import React,{Component} from 'react';
import SectionTitle from '../section-title/section-title';
import './filter-panel.css';

export default class FilterPanel extends Component{
    constructor(props){
        super(props);
        this.minSquare = this.props.data[0].square;
        this.maxSquare = this.props.data[0].square;
        this.minPersons = this.props.data[0].persons;
        this.maxPersons = this.props.data[0].persons;
        this.starsArray = [];
        this.personCountArray = [];
    }
    getSquareParams(){
        this.props.data.forEach(item => {
            this.minSquare = this.minSquare > item.square?item.square:this.minSquare;
            this.maxSquare = this.maxSquare < item.square?item.square:this.maxSquare;
        })
        return(
            <React.Fragment>
                <input className="square-selector" type="text" placeholder={`от ${this.minSquare} м²`} onChange={(e) => this.props.onFilterChange(e,'squareMin')}/>
                <input className="square-selector" type="text" placeholder={`до ${this.maxSquare} м²`} onChange={(e) => this.props.onFilterChange(e,'squareMax')}/>
            </React.Fragment>
        )
    }
    getCountPersonParams(){
        let result = [];

        for (let value of this.props.data) {
            if (!result.includes(value.persons)) {
              result.push(value.persons);
            }
        }
        result.sort();
        result.unshift('Не указано');
        return result.map(item => {
            return (<option>{item}</option>)
        })
    }
    getCountStars(){
        let result = [];

        for (let value of this.props.data) {
            if (!result.includes(value.stars)) {
              result.push(value.stars);
            }
        }
        result.sort();
        result.unshift('Не указано');
        return result.map(item => {
            return(
                <option>{item}</option>
            )
        })
    }
    render(){
        return(
            <div className="filter-panel">
                <div className="container">
                    <SectionTitle title={'Поиск номера'}/>
                    <div className="filters">
                        <form name="filter" className="filter">

                            <div className="select-container">
                                <span className="select-title">Кол-во звезд</span>
                                <div>
                                    <select className="stars-count" onChange={(e) => this.props.onFilterChange(e,'stars')}>
                                        {this.getCountStars()}
                                    </select>
                                </div>
                            </div>

                             <div className="select-container">
                                <span className="select-title">Кол-во персон</span>
                                <div>
                                    <select className="persons" onChange={(e) => this.props.onFilterChange(e,'persons')}>
                                        {this.getCountPersonParams()}
                                    </select>
                                </div>
                            </div>
                            
                            <div className="range-container">
                                <span className="select-title">Цена за сутки</span>
                                <span>{this.props.range.value}Р</span>
                                <div>
                                    <input className="price-range-selector" name="range" type="range" min={this.props.range.min} max={this.props.range.max} value={this.props.range.value} onChange={(e) => this.props.onRangeChange(e)}/>
                                </div>
                            </div>

                            <div className="select-container">
                                <span className="select-title">Площадь</span>
                                <div>
                                    {this.getSquareParams()}
                                </div>
                            </div>

                            <div className="select-container ">
                                <div className="extended-options">
                                    <div className="checkbox-item">
                                        <input type="checkbox" onChange={(e) => this.props.onFilterChange(e,'breakfast')}/>Завтрак
                                    </div>
                                    <div className="checkbox-item">
                                        <input type="checkbox" onChange={(e) => this.props.onFilterChange(e,'afternoon')}/>Ужин
                                    </div>
                                    <div className="checkbox-item">
                                        <input type="checkbox" onChange={(e) => this.props.onFilterChange(e,'pets')}/>Питомцы
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}