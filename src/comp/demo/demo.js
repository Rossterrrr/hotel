import React,{Component} from 'react';
import './demo.css';
import GoldBtn from '../gold-btn/gold-btn';
import {Link} from 'react-router-dom';

export default class Demo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
                <section className="demo" style={{backgroundImage: `url(${this.props.demoUrl})`}}>
                    <div className="container">
                        <div className="demo-info">
                            <h2>{this.props.title}</h2>
                            <h4>Цены от {this.props.coast}Р</h4>
                            <div className="demo-info-line"></div>
                            <Link to="/apparts" className="link-to-apparts"><GoldBtn title={this.props.btnName}/></Link>
                        </div>
                    </div>
                </section>
        )
    }
}