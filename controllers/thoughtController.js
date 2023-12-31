const { Thought, User } = require('../models');

module.exports = {
    // get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
    async createThought(req, res) {
        try {
            const thought = await Thought.create();
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // get a single thought
    async getSingleThought(req,res) {
        try {
            const thought = await Thought.findOne( { _id: req.params.thoughtId })
                .select('-__v');
            
            if (!thought) {
                return res.status(404).json({message: 'No thought with that ID'})
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // delete a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thought) {
                res.status(404).json({ message: 'No thought with that ID'});
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Update a thought

    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

        if (!thought) {
            res.status(404).json({ message: 'No thought with this ID' });
        }

        res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};
