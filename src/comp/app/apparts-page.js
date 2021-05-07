import React,{Component} from 'react';
import './app.css';
import Header from '../header/header';
import Demo from '../demo/demo';
import ItemList from '../item-list/item-list';
import Footer from '../footer/footer';
import DB from '../../db.json';

export default class AppartsPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Demo title={'Доступные номера'} coast={2000} btnName={'На главную'} demoUrl={'/img/demo4.jpg'}/>
                <ItemList data={JSON.parse(JSON.stringify(DB))}/>   
                <Footer/>
            </React.Fragment>
        )
    }
}