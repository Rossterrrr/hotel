import React,{Component} from 'react';
import './services.css';
import ServicesItem from '../services-item/services-item';
import SectionTitle from '../section-title/section-title';

export default class Services extends Component{
    constructor(props){
        super(props);
    }
    getServices(){
        return this.props.services.map(item => {
            return (<ServicesItem services={item}/>)
        })
    }
    render(){
        return(
            <section className="services">
                <div className="container">
                    <SectionTitle title={'Наш сервис'}/>
                    <div className="services-list">
                        {this.getServices()}
                    </div>
                </div>
            </section>
        )
    }
}