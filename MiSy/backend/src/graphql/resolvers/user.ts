import { GraphQLContext } from "../../util/types";

const resolvers = {
Query:{
searchUsers: () => {},
},
Mutation: {
createUsername: async(_: any, args: { username: string } , 
    context: GraphQLContext ):Promise <> => {

    const { username } = args;
    const { session, prisma} = context;

    console.log("HEY AT API", username);
    console.log ('HERE IS CONTEXT', context);
} ,
},
};

export default resolvers;





