import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
      imgurl: "",
      currentProductID: this.props.currentProductID,
      editDisplay: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps)
    console.log('prevState', prevState)
    console.log('current props', this.props)
    console.log('curProps.currentID', this.props.currentProduct)
    if (prevProps.currentProduct !== this.props.currentProduct) {
      this.setState({
        currentProductID: this.props.currentProduct,
        editDisplay: true
      });
      console.log('component did update was triggered')
    }
  }

  cancel = () => {
    this.setState({
      name: "",
      price: "",
      imgurl: ""
    });
  };

  handleChange = e => {
    let { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    let { name, price, imgurl } = this.state;
    this.props.addProduct({
      name,
      price,
      imgurl
    });
    this.props.getInventory();
    this.setState({
      editDisplay: false
    })
    this.cancel();
  };

  render() {
    return (
      <div className="formParent">
        <div className="imageParent">
          <img
            className="formImage"
            src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            alt="displayimage"
          />
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
          <button onClick={this.cancel} className="formButton">
            Cancel
          </button>

          {this.state.editDisplay ? 
            <button onClick={this.submitForm} className="formButton">
              Save Changes
            </button>
           : 
            <button onClick={this.submitForm} className="formButton">
              Add to Inventory
            </button>
          }
        </div>
      </div>
    );
  }
}

export default Form;
