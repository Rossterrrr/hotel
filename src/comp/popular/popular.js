import React,{Component} from 'react';
import './popular.css';
import SectionTitle from '../section-title/section-title';
import HotelItem from '../item/item';

export default class Popular extends Component{
    constructor(props){
        super(props);
    }
    getPopularItems(){
        return this.props.data.map(item => {
            if(item.popular){
                return(<HotelItem data={item}/>)
            }   
        })
    }
    render(){
        return(
        <div className="popular">
            <div className="container">
                <SectionTitle title={'Популярные'}/>
                <div className="popular-list">
                    {this.getPopularItems()}
                </div>
            </div>
        </div>
        )
    }
}