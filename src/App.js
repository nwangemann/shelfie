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
      inventory: [],
      currentProductID: ''
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
    })
  }

  addProduct = (newProduct) => {
    axios.post('/api/product', newProduct).then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  selectToEdit = (e) => {
    let id = e.target.value
    this.setState({
      currentProductID: id
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
        selectToEdit={this.selectToEdit}
        getInventory={this.getInventory}
        inventory={this.state.inventory} />
        <Form 
        currentProduct={this.state.currentProductID}
        getInventory={this.getInventory}
        addProduct={this.addProduct}
        />
      </div>
    </div>
  );
  }
}

export default App;
