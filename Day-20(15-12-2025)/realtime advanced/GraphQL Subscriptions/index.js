import { ApolloServer, gql, PubSub } from "apollo-server";

const pubsub = new PubSub();
const MESSAGE_ADDED = "MESSAGE_ADDED";

const typeDefs = gql`
  type Message {
    content: String
  }

  type Query {
    messages: [Message]
  }

  type Mutation {
    addMessage(content: String!): Message
  }

  type Subscription {
    messageAdded: Message
  }
`;

const messages = [];

const resolvers = {
  Query: {
    messages: () => messages
  },
  Mutation: {
    addMessage: (_, { content }) => {
      const msg = { content };
      messages.push(msg);
      pubsub.publish(MESSAGE_ADDED, { messageAdded: msg });
      return msg;
    }
  },
  Subscription: {
    messageAdded: {
      subscribe: () => pubsub.asyncIterator([MESSAGE_ADDED])
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
