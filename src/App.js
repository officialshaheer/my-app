import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
  // return (
  //   <div className="App">
  //     <h1>Hi, Im a React App</h1>
  //   </div>
  // );

return React.createElement ('div', null , 'h1' , 'Hello, I\'m a react app');

	}
}
export default App;
