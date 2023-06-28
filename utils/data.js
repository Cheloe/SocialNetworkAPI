// const generate = require('mongoose-data-faker');
// const Thought = require('../models');

// Array of usernames
const usernames = [
    "john doe",
    "emma watson",
    "alex smith",
    "lily white",
    "mike johnson",
    "sarah green",
    "david brown",
    "olivia wilson",
    "andrew88",
    "jennifer parker",
    "samuel adams",
    "emily jones",
    "matthew baker",
    "isabella smith",
    "nathan davis",
    "chloe thompson",
    "robert miller",
    "amelia johnson",
    "william gray",
    "sophia taylor"
  ];
  
  // Array of emails
  const emails = [
    "john.doe@example.com",
    "emma.watson@example.com",
    "alexsmith@example.com",
    "lilywhite@example.com",
    "mike_johnson@example.com",
    "sarahgreen@example.com",
    "david.brown@example.com",
    "olivia_wilson@example.com",
    "andrew88@example.com",
    "jennifer_parker@example.com",
    "samuel.adams@example.com",
    "emily.jones@example.com",
    "matthew.baker@example.com",
    "isabella_smith@example.com",
    "nathan_davis@example.com",
    "chloe.thompson@example.com",
    "robertmiller@example.com",
    "amelia.johnson@example.com",
    "william.gray@example.com",
    "sophia_taylor@example.com"
  ];
  

const friends = [
  "Emma Johnson",
  "Liam Smith",
  "Olivia Davis",
  "Noah Anderson",
  "Ava Martinez",
  "William Thompson",
  "Sophia Wilson",
  "James Garcia",
  "Isabella Rodriguez",
  "Oliver Clark",
  "Mia Lewis",
  "Benjamin Hall",
  "Charlotte Lee",
  "Elijah Taylor",
  "Amelia Harris",
  "Lucas Scott",
  "Harper King",
  "Alexander Green",
  "Evelyn Turner",
  "Henry Baker"
];


const thoughts = [
  "Wow, this photo just brightened up my day! 😍",
  "Sending virtual hugs to everyone who needs one. 🤗",
  "That's such an inspiring story. Thanks for sharing!",
  "This song is stuck in my head. Can't stop humming it! 🎶",
  "Who's up for a movie night? Recommend me some good films!",
  "Congratulations on your well-deserved success! 🎉",
  "Just finished reading this book and it blew my mind. Highly recommended!",
  "I'm feeling nostalgic today. Anyone else miss the '90s?",
  "The sunset today was absolutely breathtaking. Nature's beauty never fails to amaze me. 🌅",
  "Can't get enough of these cute animal videos. They always make my day!",
  "I'm so grateful for the amazing friends in my life. Tag your bestie and show them some love! ❤️",
  "Cooking up a storm in the kitchen today. Any recipe suggestions?",
  "This artwork is stunning. The talent is off the charts!",
  "Feeling pumped after a great workout. Time to conquer the day! 💪",
  "Sending positive vibes to everyone who's facing challenges right now. You've got this!",
  "The weekend is finally here! What are your plans?",
  "I can't believe how fast time flies. It feels like yesterday when we celebrated New Year's!",
  "Just finished binge-watching this series. Can't wait for the next season!",
  "Shoutout to all the teachers out there who go above and beyond for their students. You are superheroes! 🙌",
  "I'm so proud of my little sister for graduating today. She's going places!",
  "The weather is perfect for a picnic. Time to enjoy some outdoor fun!",
  "The world needs more kindness. Let's spread love and positivity!",
  "I'm in awe of the breathtaking landscapes captured in this photo. Nature is truly incredible. 🌿",
  "Tried out a new recipe today and it turned out delicious! Who wants a bite?",
  "Remember to take breaks and prioritize self-care. You deserve some 'me' time. ❤️"  
];

const reactions = [
  "👍",
  "❤️",
  "😂",
  "Awesome!",
  "LOL",
  "🔥",
  "Amazing!",
  "👏",
  "Great job!",
  "Wow!",
  "Um... no",
  "Welp",
  "Womp womp",
  "bombastic side eye"
];

// randomly choose from a given array of seeds
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

//console.log(getRandomArrItem(usernames));

const getRandomThought = () => {
  return getRandomArrItem(thoughts);
}


//console.log(getRandomThoughts())

const getRandomUsername = () => {
  if (usernames.length === 0) {
    throw new Error('No usernames available.');
  }

  const index = Math.floor(Math.random() * usernames.length);
  const username = usernames[index];
  
  // Remove the selected username from the array to prevent duplicates
  usernames.splice(index, 1);

  return username;
};

const getRandomReactions = (num) => {
  const reactionArr = [];
   for (let i = 0; i <= num; i++ ){
    reactionArr.push(getRandomArrItem(reactions))
    }
  return reactionArr;
}

const getRandomEmail = () => {
  if (emails.length === 0) {
    throw new Error('No emails available.');
  }

  const index = Math.floor(Math.random() * emails.length);
  const email = emails[index];
  
  // Remove the selected username from the array to prevent duplicates
  emails.splice(index, 1);

  return email;
}

const getRandomFriends = (num) => {
  const friendArr = [];
   for (let i = 0; i <= num; i++ ){
    friendArr.push(getRandomArrItem(friends))
    }
  return friendArr;
};

module.exports = {
    getRandomUsername,
    getRandomEmail,
    getRandomFriends,
    getRandomReactions,
    getRandomThought
}