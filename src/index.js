//import React from 'react' - this is for JSX elements
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ApolloProvider from './ApolloProvider'

ReactDOM.render(ApolloProvider, document.getElementById('root'));  //ApolloProvider because it is imported on top

//import App from './App'
//ReactDOM.render(<App />, document.getElementById('root')); - this version if import App such as on top is used

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
