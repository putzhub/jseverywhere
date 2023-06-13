// index.js
// This is the main entry point of our application
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
require('dotenv').config();

// Database connection
const db = require('./db');
// Database schema
const models = require('./models');
// GraphQL schema language
const typeDefs = require('./schema');
// Provide resolver functions for our schema fields
const resolvers = require('./resolvers');

// Run the server on a port specified in our .env file or port 4000
const port = process.env.PORT || 4000;
// Store the DB_HOST value as a variable
const DB_HOST = process.env.DB_HOST;

const app = express();

db.connect(DB_HOST);

// Apollo Server setup
const server = new ApolloServer({ 
    typeDefs,               //Defines what the user interfaces with
    resolvers,              //how the computer processes it
    context: () => {        //Add the db models to the context
        return { models };
    }
});

// Apply the Apollo GraphQL middleware and set the path to /api
server.applyMiddleware({app, path: '/api/'});

//app.get('/', (req, res) => res.send('Hello World!!'));
app.listen(port, () => 
    console.log(
        `GraphQL Server running at http://localhost:${port}${server.graphqlPath}!`
    )
);

