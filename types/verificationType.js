const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLID, GraphQLInt } = graphql;

const VerificationType = new GraphQLObjectType({
  name:  'VerificationType',
  fields: () => ({
    id: { type: GraphQLID },
    message: { type: GraphQLString },
  })
});

module.exports = VerificationType;
