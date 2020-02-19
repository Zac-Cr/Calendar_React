import React from "react"

import DaysOfWeek from "./daysOfWeek"
import CalendarSquares from "./calendarSquares"

export default function content(props){
    return(
        <div className = "content">
            <DaysOfWeek />
            <CalendarSquares daysInMonth={props.daysInMonth}/>
        </div>
    )
}