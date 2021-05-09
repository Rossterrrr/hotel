import React,{Component} from 'react';
import './item.css';
import GoldBtn from '../gold-btn/gold-btn';

export default class HotelItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            bg:this.props.data.bg
        }
        this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
        this.onMouseOutHandler = this.onMouseOutHandler.bind(this);
    }
    onMouseOverHandler(){
        this.setState({bg:`/img/${this.props.data.id}/2.jpg`});
    }
    onMouseOutHandler(){
        this.setState({bg:`/img/${this.props.data.id}/1.jpg`});
    }
    render(){
        return(
            <div 
                className="item" 
                style={{backgroundImage: `url(${this.props.data.bg})`}} 
                onMouseOver={this.onMouseOverHandler} 
                onMouseOut={this.onMouseOutHandler}
            >
                <div className="opacity-block"/>
                <span className="room-coast">{this.props.data.price}Р</span>
                <span className="room-name">{this.props.data.title}</span>
                <GoldBtn title={'ПРОСМОТР'}/>
            </div>
        )     
    }
}