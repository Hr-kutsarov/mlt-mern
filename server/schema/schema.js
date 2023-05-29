const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLFloat, GraphQLList, GraphQLNonNull} = require('graphql');

const Event = require('../models/Event.js');
const Artist = require('../models/Artist.js');
const Ticket = require('../models/Ticket.js');
const User = require('../models/User.js');
const DevlogEntry = require('../models/Devlog.js');

const EventType = new GraphQLObjectType({
    name: 'Event',
    fields: () => ({
        _id: {type: GraphQLID},
        title: {type: GraphQLString},
        summary: {type: GraphQLString},
        content: {type: GraphQLString},
        pictureUrl: {type: GraphQLString}
    })
})

const ArtistType = new GraphQLObjectType({
    name: "Artist",
    fields: () => ({
        _id: {type: GraphQLID},
        name: {type: GraphQLString},
        birthDate: {type: GraphQLString},
        bio: {type: GraphQLString}
    })
})

const TicketType = new GraphQLObjectType({
    name: "Ticket",
    fields: () => ({
        _id: {type: GraphQLID},
        title: {type: GraphQLString},
        created: {type: GraphQLString},
        price: {type: GraphQLFloat },
        seat: {type: GraphQLFloat},
        owner: {type: GraphQLString}
    })
})


const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        _id: {type: GraphQLID},
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        role: {type: GraphQLString }
    })
})

const DevlogEntryType = new GraphQLObjectType({
    name: "DevlogEntry",
    fields: () => ({
        _id: {type: GraphQLID},
        title: {type: GraphQLString},
        created: {type: GraphQLString},
        entry: {type: GraphQLString}
    })
})

const query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getEvent: {
            type: EventType,
            args: {id: {type: GraphQLID}},
            resolve(_, args) {
                return Event.findById(args.id);
            }
        },
        allEvents: {
            type: new GraphQLList(EventType),
            resolve(_,args) {
                return Event.find()
            }
        },
        getArtist: {
            type: ArtistType,
            args: {id: {type: GraphQLID}},
            resolve(_, args) {
                return Artist.findById(args.id);
            }
        },
        allArtists: {
            type: new GraphQLList(ArtistType),
            resolve(_,args) {
                return Artist.find()
            }
        },
        getTicket: {
            type: TicketType,
            args: {id: {type: GraphQLID}},
            resolve(_, args) {
                return Ticket.findById(args.id);
            }
        },
        allTickets: {
            type: new GraphQLList(TicketType),
            resolve(_,args) {
                return Ticket.find()
            }
        },
        getUser: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            resolve(_, args) {
                return User.findById(args.id);
            }
        },
        allUsers: {
            type: new GraphQLList(TicketType),
            resolve(_,args) {
                return User.find()
            }
        },
        getDevlogEntry: {
            type: DevlogEntryType,
            args: {id: {type: GraphQLID}},
            resolve(_, args) {
                return DevlogEntry.findById(args.id);
            }
        },
        getAllDevlogEntries: {
            type: new GraphQLList(DevlogEntryType),
            resolve(_,args) {
                return DevlogEntry.find()
            }
        }
    }
})

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {

        // Event mutations

        addEvent: {
            type: EventType,
            args: {
                title: {type: GraphQLString},
                summary: {type: GraphQLString},
                content: {type: GraphQLString},
                pictureUrl: {type: GraphQLString}
            },
            resolve(_, args) {
                const newEvent = new Event({
                    title: args.title,
                    summary: args.summary,
                    content: args.content,
                    pictureUrl: args.pictureUrl
                });
                return newEvent.save()
            }
        },
        deleteEvent: {
            type: EventType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(_, args,) {
                return Event.findByIdAndRemove(args.id)
            }
        },
        editEvent: {
            type: EventType,
            args: {
                id: {type: GraphQLID},
                title: {type: GraphQLString},
                summary: {type: GraphQLString},
                content: {type: GraphQLString},
                pictureUrl: {type: GraphQLString}
            },
            resolve(_,args) {
                return Event.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            title: args.title,
                            summary: args.summary, 
                            content: args.content,
                            pictureUrl: args.pictureUrl
                        }
                    }
                )
            }
        },

        // Artist mutations

        addArtist: {
            type: ArtistType,
            args: {
                name: {type: GraphQLString},
                birthDate: {type: GraphQLString},
                bio: {type: GraphQLString}
            },
            resolve(_, args) {
                const newArtist = new Artist({
                    name: args.name,
                    birthDate: args.birthDate,
                    bio: args.bio
                });
                return newArtist.save()
            }
        },
        deleteArtist: {
            type: ArtistType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(_, args,) {
                return Artist.findByIdAndRemove(args.id)
            }
        },
        editArtist: {
            type: ArtistType,
            args: {
                id: {type: GraphQLID},
                name: {type: GraphQLNonNull(GraphQLString)},
                birthDate: {type: GraphQLString},
                bio: {type: GraphQLString},
            },
            resolve(_,args) {
                return Artist.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            name: args.name,
                            birthDate: args.birthDate, 
                            bio: args.bio
                        }
                    }
                )
            }
        },
        // User mutations

        addUser: {
            type: UserType,
            args: {
                email: {type: GraphQLString},
                password: {type: GraphQLString},
                role: {type: GraphQLString}
            },
            resolve(_, args) {
                const newUser = new User({
                    email: args.email,
                    password: args.password,
                    role: args.role
                });
                return newUser.save()
            }
        },
        deleteUser: {
            type: UserType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(_, args,) {
                return User.findByIdAndRemove(args.id)
            }
        },
        editUser: {
            type: UserType,
            args: {
                id: {type: GraphQLID},
                email: {type: GraphQLNonNull(GraphQLString)},
                password: {type: GraphQLString},
                role: {type: GraphQLString},
            },
            resolve(_,args) {
                return User.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            email: args.email,
                            password: args.password, 
                            role: args.role
                        }
                    }
                )
            }
        },

        // Ticket mutations

        addTicket: {
            type: TicketType,
            args: {
                title: { type: GraphQLString },
                price: { type: GraphQLFloat },
                seat: { type: GraphQLFloat },
                owner: { type: GraphQLString }
            },
            resolve(_, args) {
                const newTicket = new Ticket({
                    title: args.title,
                    price: args.price,
                    seat: args.seat,
                    owner: args.owner
                });
                return newTicket.save()
            }
        },
        deleteTicket: {
            type: TicketType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(_, args,) {
                return Ticket.findByIdAndRemove(args.id)
            }
        },
        editTicket: {
            type: TicketType,
            args: {
                id: {type: GraphQLID},
                title: {type: GraphQLNonNull(GraphQLString)},
                price: {type: GraphQLFloat },
                seat: {type: GraphQLFloat },
                owner: { type: GraphQLString }
            },
            resolve(_,args) {
                return Ticket.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            title: args.title,
                            price: args.price, 
                            seat: args.seat,
                            owner: args.owner
                        }
                    }
                )
            }
        },

        // Mutations for Devlog Entries

        // TODO rename all 'add' keywords to 'create' because they mess up with css search (highlights 'padding')

        addDevlogEntry: {
            type: DevlogEntryType,
            args: {
                title: { type: GraphQLString },
                created: { type: GraphQLString },
                entry: { type: GraphQLString }
            },
            resolve(_, args) {
                const newDevlogEntry = new DevlogEntry({
                    title: args.title,
                    created: args.created,
                    entry: args.entry
                });
                return newDevlogEntry.save()
            }
        },
        deleteDevlogEntry: {
            type: DevlogEntryType,
            args: {
                id: {type: GraphQLID}
            },
            resolve(_, args,) {
                return DevlogEntry.findByIdAndRemove(args.id)
            }
        },
        editDevlogEntry: {
            type: DevlogEntryType,
            args: {
                id: {type: GraphQLID},
                title: { type: GraphQLString },
                entry: { type: GraphQLString }
            },
            resolve(_,args) {
                return DevlogEntry.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            title: args.title,
                            entry: args.entry
                        }
                    }
                )
            }
        },

    }
})

module.exports = new GraphQLSchema({
    query,
    mutation
})