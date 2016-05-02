import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App


// import '../assets/stylesheets/base.scss';
// import React, { Component } from 'react';
//
// const Hello = React.createClass({
//   render() {
//     return(
//       <h1>Hello, {this.props.name}!</h1>
//     )
//   }
// });
//
// export default Hello;
