
import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { Header } from './components/Header.jsx'
import { Main } from './components/Main.jsx'
import { Footer } from './components/Footer.jsx'

const client = new ApolloClient({
  uri: `http://localhost:5000/graphql`,
  cache: new InMemoryCache()
})

export function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <Main />
        <Footer />
      </ApolloProvider>
    </>
  );
}


