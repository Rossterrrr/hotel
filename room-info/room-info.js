import React,{Component} from 'react';
import './room-info.css';

export default class RoomInfo extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="container">
                <div className="room-info">
                    <div className="room-images">
                        <img src="img/9/2.jpg"/>
                        <img src="img/9/2.jpg"/>
                        <img src="img/9/2.jpg"/>
                    </div>
                </div>
            </div>
        )     
    }
}