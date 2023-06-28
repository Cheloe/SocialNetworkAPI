const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomThoughts, getRandomUsername, getRandomEmail, getRandomFriends, getRandomReactions,getOneThought } = require('./data');

const getRandomNumber = () => {
    return Math.floor(Math.random() * 5) + 1;
  };

const usersArr = [];
const thoughtsArr = [];

for (let i = 0; i < 10; i++) {
    const username = getRandomUsername();
    const email = getRandomEmail();
    const thoughts = getRandomThoughts(getRandomNumber());
    const thoughtText = getOneThought();
    const friends = getRandomFriends(getRandomNumber());
    const reactions = getRandomReactions(getRandomNumber());
   

    usersArr.push({
        username,
        email,
        thoughts,
        friends,
    });

    thoughtsArr.push({
        username, 
        thoughtText,
        reactions
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

    await User.collection.insertMany(usersArr);

    await Thought.collection.insertMany(thoughtsArr);

    console.table(usersArr);
    //console.table(thoughtsArr);
    console.info('Seeding complete 🌱');
    process.exit(0);
});
    

