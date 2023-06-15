const Query = require('./query');
const Mutation = require('./mutation');
const Note = require('./note');
const User = require('./user');
const { GraphQLDateTime } = require('graphql-iso-date');
//more info about custom scalars https://the-guild.dev/graphql/tools/docs/introduction

module.exports = {
    Query,
    Mutation,
    Note,
    User,
    DateTime: GraphQLDateTime,
};