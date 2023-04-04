import { GraphQLContext } from "../../util/types";

const resolvers = {
Query:{
searchUsers: () => {},
},
Mutation: {
createUsername: async(_: any, args: { username: string } , 
    context: GraphQLContext ):Promise <CreateUsernameResponse> => {

    const { username } = args;
    const { session, prisma} = context;
    
    if (!session?.user) {
    return {

      error: 'Not authorized',
      
        
    };
    }
const { id } = session.user;


try {
}catch (error){
    console.log("createUsername error", error);
return {
error:error?.message,

}
}
} ,
},
};

export default resolvers;





