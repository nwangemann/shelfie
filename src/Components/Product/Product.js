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
          <img
            className="productImage"
            src={this.props.imgurl}
            alt="product"
          />
        </div>
        <div className="textFlex">
          <p>{this.props.name}</p>
          <p>${this.props.price}</p>
        </div>
      </div>
    );
  }
}

export default Product;
