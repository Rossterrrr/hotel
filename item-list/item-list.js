import React,{Component} from 'react';
import './item-list.css';
import HotelItem from '../item/item';

export default class ItemList extends Component{
    constructor(props){
        super(props);
    }
    getAllItems(){
        return this.props.data.map(item => {
            return(<HotelItem data={item}/>)
        })
    }
    render(){
        console.log(this.props.filters);
        return(
                <div className="container">
                    <div className="item-list">
                        {this.getAllItems()}
                    </div>
                    
                </div>  
        )
    }

} 