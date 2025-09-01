const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLBoolean } = graphql;
require('dotenv').config()

const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses")

//// SES
const config = {
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  },
  region: process.env.AWS_REGION
}

const ses = new SESClient(config);

//// TYPES
const VerificationType              = require('../types/verificationType')

//// TEMPLATES
const { consultationRequest }       = require('../templates/consultation')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    contact: {
      type: VerificationType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        address: { type: GraphQLString },
        adu: { type: GraphQLBoolean },
        addition: { type: GraphQLBoolean },
        custom: { type: GraphQLBoolean }, 
        remodel: { type: GraphQLBoolean },
        tenantImprovement: { type: GraphQLBoolean },
        notSure: { type: GraphQLBoolean },
        instructions: { type: GraphQLString }
      },
      async resolve(parentValue, { name, email, phone, address, adu, addition, custom, remodel, tenantImprovement, notSure, instructions }) {
        
        try {
        
          const params    = consultationRequest( name, email, phone, address, adu, addition, custom, remodel, tenantImprovement, notSure, instructions )
          const command   = new SendEmailCommand(params);
          const response  = await ses.send(command);

          console.log(response)
          
          return { message: `You're request has been sent`}
          
        } catch (error) {
          console.log(error)
          console.log(error.response.body)
          throw new GraphQLError(error.message, {
            extensions: {
              code: 'INTERNAL_SERVER_ERROR',
            },
          });
        }
        
      }
    }
  }
})

module.exports = mutation