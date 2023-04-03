import { gql } from "apollo-server-core";


const typeDefs = gql `
type User {
    id: String
    username: String

}

type Query{
    searchUsers(username: String)
}
`;