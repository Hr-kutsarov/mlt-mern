// bring in data

const {GraphQLObjectType,GraphQLID, GraphQLString, GraphQLList, GraphQLSchema} = require('graphql')

const Event = require('../models/Event')

const EventType = new GraphQLObjectType({
    name: 'Event',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        intro: { type: GraphQLString },
        content: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // named queries here
        eventById: {
            type: EventType,
            args: {id: { type: GraphQLID }},
            resolve(_, args) {
                return Event.findById(args._id)
            }
        },
        eventList: {
            type: new GraphQLList(EventType),
            resolve(_, args) {
                Event.find()
            }
            
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})