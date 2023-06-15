module.exports ={
    author: async (note, args, { models}) => {
        //Resolve the author info for a note when requested
        return await models.User.findById(note.author);
    },
    favoritedBy: async (note, args, { models }) => {
        //Resolved the favoritedBy info for a note when requested
        return await models.User.find({ _id: { $in: note.favoritedBy }});
    }
};