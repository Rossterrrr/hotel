import React,{Component} from 'react';
import './app.css';
import Header from '../header/header';
import Demo from '../demo/demo';
import ItemList from '../item-list/item-list';
import Footer from '../footer/footer';
import DB from '../../db.json';
import FilterPanel from '../filter-panel/filter-panel';

export default class AppartsPage extends Component{
    constructor(props){
        super(props);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.onRangeChange = this.onRangeChange.bind(this);
        this.data = JSON.parse(JSON.stringify(DB));
        this.state = {
            range:{
                min:this.getMinPrice(),
                max:this.getMaxPrice(),
                value:this.getAvgValue()
            }
        }
    }
    getMinPrice(){
        let min = this.data[0].price;
        this.data.forEach(item => {
            min = item.price < min?item.price:min;
        })
        return min;
    }
    getMaxPrice(){
        let max = this.data[0].price;
        this.data.forEach(item => {
            max = item.price > max?item.price:max;
        })
        return max;
    }
    getAvgValue(){
        let min = this.data[0].price;
        let max = this.data[0].price;
        this.data.forEach(item => {
            min = item.price < min?item.price:min;
            max = item.price > max?item.price:max;
        })
        return Math.round((min + max)/2);
    }
    onFilterChange(e,filterName){
        switch(filterName){
            case 'squareMin':{
                this.setState({minSquare:e.target.value})
                break;
            }
            case 'squareMax':{
                this.setState({maxSquare:e.target.value})
                break;
            }
            case 'stars':{
                this.setState({stars:e.target.value})
                break;
            }
            case 'persons':{
                this.setState({persons:e.target.value})
                break;
            }
            case 'pets':{
                this.setState({pets:e.target.checked})
                break;
            }
            case 'afternoon':{
                this.setState({afternoon:e.target.checked})
                break;
            }
            case 'breakfast':{
                this.setState({breakfast:e.target.checked})
                break;
            }  
            default:{
                break;
            }
        }
    }
    onRangeChange(e){
        let tmp = JSON.parse(JSON.stringify(this.state.range));
        tmp.value = e.target.value;
        console.log(tmp);
        this.setState({range:tmp});
    }
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Demo title={'Доступные номера'} coast={2000} btnName={'На главную'} demoUrl={'/img/demo4.jpg'}/>
                <FilterPanel data={JSON.parse(JSON.stringify(DB))} onFilterChange={this.onFilterChange} onRangeChange={this.onRangeChange} range={this.state.range}/>
                <ItemList data={JSON.parse(JSON.stringify(DB))} filters={this.state}/>   
                <Footer/>
            </React.Fragment>
        )
    }
}