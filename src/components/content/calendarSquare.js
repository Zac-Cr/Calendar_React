import React, {Component} from "react"

export default class CalendarSquare extends Component{
    constructor(){
        super()

        this.state = {}
    }

    render(){
        return(
            <div className= {`calendar-square  ${this.props.inactive ? "overflow-day" : null}`}>
                <div>{this.props.date}</div>
                <input type="text" disabled = {this.props.inactive ? true:false}/>
            </div>
        )
    }
}