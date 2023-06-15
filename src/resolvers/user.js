module.exports = {
    notes: async (user, args, { models }) => {
        //Resolve the author info for a note when requested
        return await models.Note.find({ author: user._id }).sort({ _id: -1});
    },
    favorites: async (user, args, { models }) => {
        //Resolved the favoritedBy info for a note when requested
        return await models.Note.find({ favoritedBy: user._id }).sort({ _id: -1 });
    },
};