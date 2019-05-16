import { HttpLink, InMemoryCache, ApolloClient, split } from 'apollo-boost';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

// const httpURI = process.env.REACT_APP_SERVER_URL + '/graphql'
const httpURI = 'http://localhost:4000/graphql';

const httpLink = new HttpLink({
  uri: httpURI,
});

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4001/graphql/`,
  options: {
    reconnect: true,
    // connectionParams: {
    //   authToken: 'dummytoken',
    // },
  },
});

const cache = new InMemoryCache();

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const defintion = getMainDefinition(query);
    return (
      defintion.kind === 'OperationDefinition' &&
      defintion.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export default new ApolloClient({
  link: link,
  cache,
});
