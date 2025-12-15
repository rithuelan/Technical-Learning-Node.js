import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    hello: String
    users: [User]
  }

  type User {
    id: ID
    name: String
  }
`;

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const resolvers = {
  Query: {
    hello: () => "Hello World!",
    users: () => users
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server running at ${url}`));
