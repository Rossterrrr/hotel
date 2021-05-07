import React,{Component} from 'react';
import './services-item.css';

export default class ServicesItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="services-item">
                <i className="material-icons">{this.props.services.icon}</i>
                <h5>{this.props.services.title}</h5>
                <p>{this.props.services.description}</p>
            </div>
        )
    }
}