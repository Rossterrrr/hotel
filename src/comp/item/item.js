import React,{Component} from 'react';
import './item.css';
import GoldBtn from '../gold-btn/gold-btn';

export default class HotelItem extends Component{
    constructor(props){
        super(props);
        this.state = props.data;
        this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
        this.onMouseOutHandler = this.onMouseOutHandler.bind(this);
    }
    onMouseOverHandler(){
        this.setState({bg:`/img/${this.state.id}/2.jpg`});
    }
    onMouseOutHandler(){
        this.setState({bg:`/img/${this.state.id}/1.jpg`});
    }
    render(){
        return(
        <div 
            className="item" 
            style={{backgroundImage: `url(${this.state.bg})`}} 
            onMouseOver={this.onMouseOverHandler} 
            onMouseOut={this.onMouseOutHandler}
        >
            <div className="opacity-block"/>
            <span className="room-coast">{this.state.price}Р</span>
            <span className="room-name">{this.state.title}</span>
            <GoldBtn title={'ПРОСМОТР'}/>
        </div>
        )
    }
}