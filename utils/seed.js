const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomFriends } = require('./data');

connection.on('error', (err) => err);

