import React, {Component} from 'react';
import Product from '../Product/Product'
import './Dashboard.css'
import axios from 'axios';

class Dashboard extends Component {
    constructor(props){
        super(props)


    }

    deleteProduct = (e) => {
        let id = e.target.value
        axios.delete(`/api/delete/${id}`).then(res => {
            this.props.getInventory()
        })
    } 

    render(){
        let mappedInventory = this.props.inventory.map(elem => {
            return <Product 
                key={elem.id}
                value={elem.id}
                deleteProduct={this.deleteProduct}
                selectToEdit={this.props.selectToEdit}
                name={elem.name}
                price={elem.price}
                imgurl={elem.img}
            />
        })
        return(
            <div className="dashboardParent">
                {mappedInventory}
                
            </div>
        )
    }
}

export default Dashboard;