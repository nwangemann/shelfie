import React, {Component} from 'react';
import Product from '../Product/Product'
import './Dashboard.css'

class Dashboard extends Component {
    constructor(props){
        super(props)


    }

    render(){
        let mappedInventory = this.props.inventory.map(elem => {
            return <Product 
                name={elem.name}
                price={elem.price}
                imgurl={elem.imgurl}
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