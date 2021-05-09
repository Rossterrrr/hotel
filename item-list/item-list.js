import React,{Component} from 'react';
import './item-list.css';
import HotelItem from '../item/item';

export default class ItemList extends Component{
    constructor(props){
        super(props);
    }
    getAllItems(){
        let filteredArray = JSON.parse(JSON.stringify(this.props.data));
        filteredArray = this.props.data.filter(item => {
            if(this.props.filters.minSquare && !this.props.filters.maxSquare && this.props.filters.minSquare > item.square){
                return false;
            }
            if(this.props.filters.maxSquare && !this.props.filters.minSquare && this.props.filters.maxSquare < item.square){
                return false;
            }
            if(this.props.filters.maxSquare && this.props.filters.minSquare && !(this.props.filters.minSquare <= item.square && this.props.filters.maxSquare >= item.square )){
                return false;
            }
            if(this.props.filters.stars && this.props.filters.stars != item.stars && this.props.filters.stars != 'Не указано'){
                return false;
            }
            if(this.props.filters.persons && this.props.filters.persons != item.persons && this.props.filters.persons != 'Не указано'){
                return false;
            }
            if((this.props.filters.pets && !item.pet)){
                return false;
            }
            if((this.props.filters.breakfast && !item.breakfast)){
                return false;
            }
            if((this.props.filters.afternoon && !item.afternoon)){
                return false;
            }
            if((this.props.filters.range.value < item.price)){
                return false;
            }
            
            return true;   
        })

        return filteredArray.map(elem => {
            return(<HotelItem data={elem}/>)
        })
    }
    render(){
        return(
                <div className="container">
                    <div className="item-list">
                        {this.getAllItems()}
                    </div>
                </div>  
        )
    }

} 