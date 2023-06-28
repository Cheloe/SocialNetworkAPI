const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomEmail, getRandomFriends, getRandomReactions, getRandomThought } = require('./data');

const randomNumber = () => {
    return Math.floor(Math.random() * 5) + 1;
  };

// Empty arrays for randomly generated posts and tags
const thoughtsArr = [];
const usersArr = [];
const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const makeUser = () => {
    usersArr.push({
        username: getRandomUsername(),
        email: getRandomEmail(),
        friends: getRandomFriends(randomNumber()),
        thoughts: [thoughtsArr[genRandomIndex(thoughtsArr)]._id],
    })
}


// Create 20 random tags and push them into the tags array
for (let i = 0; i < 20; i++) {
  const textBody = getRandomThought();

  thoughtsArr.push({
    textBody,
    reactions: getRandomReactions(randomNumber())
  });
}


connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('thoughts');
    }

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
        await connection.dropCollection('users');
    }


    await Thought.collection.insertMany(thoughtsArr);

    thoughtsArr.forEach(() => makeUser());

    await User.collection.insertMany(usersArr);

    console.table(usersArr);
    console.table(thoughtsArr);
    console.info('Seeding complete 🌱');
    process.exit(0);
});
    

