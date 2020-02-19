import React, {Component} from "react"

export default class CalendarSquare extends Component{
    constructor(){
        super()

        this.state = {}
    }

    render(){
        return(
            <div className= "calendar-square">
                <div>{this.props.date}</div>
                <input type="text"/>
            </div>
        )
    }
}