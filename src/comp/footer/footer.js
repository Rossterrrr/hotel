import React,{Component} from 'react';
import './footer.css';


export default class Footer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <span>Все права защищены@</span>
                        <span>Company,2021</span>
                    </div>
                </div>
            </footer>
        )
    }
}