const express = require('express');
const cors = require('cors')
const expressGraphQL = require('express-graphql').graphqlHTTP
const schema = require('./schema/schema')
const app = express();

require('dotenv').config()

app.use(express.json())
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }))
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

app.use(
  '/graphql',
  (req, res, next) => 
  expressGraphQL( async () => {
    return {
      schema,
      graphiql: true,
      context: { req, res }
    }
  })(req, res, next)
);

const server = app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});