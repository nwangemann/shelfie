import React, {Component} from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import Dashboard from "./Components/Dashboard/Dashboard";

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: [{ 
        name: 'Dummy item #1', 
        price: 11, 
        imgurl: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'},
        { 
        name: 'Dummy item #2', 
        price: 22, 
        imgurl: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'},
        { 
        name: 'Dummy item #3', 
        price: 33, 
        imgurl: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60'}
      ]
    }
  }

  render(){
  return (
    <div className="App">
      <div className="headerParent">
        <Header />
      </div>
      <div className="bodyParent">
        <Dashboard 
        inventory={this.state.inventory} />
        <Form />
      </div>
    </div>
  );
  }
}

export default App;
