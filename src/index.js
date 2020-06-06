import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import Context from './Context'
import { ApolloProvider } from 'react-apollo'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-backend-one.now.sh/graphql'
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.querySelector('#app')
)
