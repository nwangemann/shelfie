import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="productParent">
        <div className="imageFlex">
          <img className="productImage" src={this.props.imgurl} alt="product" />
        </div>
        <div className="rightSideParent">
          <div className="textFlex">
            <p>{this.props.name}</p>
            <p>${this.props.price}</p>
          </div>
          <div className="buttonFlex">
            <button
              className="productButton"
              value={this.props.value}
              onClick={this.props.deleteProduct}
            >
              Delete
            </button>
            <button
              className="productButton"
              onClick={this.props.selectToEdit}
              value={this.props.value}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
