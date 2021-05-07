import React,{Component} from 'react';
import './gold-btn.css';

export default class GoldBtn extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <button className="gold-btn">{this.props.title.toUpperCase()}</button>
        )
    }
}