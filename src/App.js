import React, {Component} from "react";
import axios from 'axios';
import "./App.css";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import Dashboard from "./Components/Dashboard/Dashboard";

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: []
    }
  }

  componentDidMount(){
    this.getInventory()
  }

  getInventory = () => {
    axios.get('/api/inventory').then(res => {
      console.log('res.data', res.data)
      this.setState({
        inventory: res.data
      })
      console.log('this.state.inventory', this.state.inventory)
    })
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
