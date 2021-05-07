import React,{Component} from 'react';
import './section-title.css';

export default class SectionTitle extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="section-title">
                <h4>{this.props.title}</h4>
                <div className="section-title-underline">
                </div>
            </div>
        )
    }
}