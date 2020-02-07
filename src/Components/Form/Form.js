import React, { Component } from "react";
import "./Form.css";
import formImage from "./form.JPG";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      price: "",
      imgurl: ""
    };
  }

  cancel = () => {
    this.setState({
        name: "",
        price: "",
        imgurl: ""
      });
  }

  handleChange = (e) => {
    let { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    let { name, price, imgurl} = this.state;
    //this.props.create does not exist, this will have to be modified to fit our schema when we hook up endpoints and structure our CRUD methods**************
    // this.props.create({
    //   name,
    //   price,
    //   imgurl
    // });
    console.log('This is the placeholder for what will become our create method. Working on submit?')
    this.setState({
      name: "",
      price: "",
      imgurl: ""
    });
  };


  render() {
    return (
      <div className="formParent">
        <div className="imageParent">
          <img className="formImage" src={formImage} alt="displayimage" />
        </div>
        <div>
          <p>Image URL:</p>
          <input
            className="formInput"
            type="text"
            name="imgurl"
            value={this.state.imgurl}
            onChange={this.handleChange}
            placeholder="Image URL"
          />
        </div>
        <div>
          <p>Product Name:</p>
          <input
            className="formInput"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Name"
          />
        </div>
        <div>
          <p>Price:</p>
          <input
            className="formInput"
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
            placeholder="Price"
          />
        </div>
        <div className="buttonFlex">
          <button 
          onClick={this.cancel}
          className="formButton">Cancel</button>
          <button 
          onClick={this.submitForm}
          className="formButton">Add to Inventory</button>
        </div>
      </div>
    );
  }
}

export default Form;
