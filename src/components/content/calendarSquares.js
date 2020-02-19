import React from "react"
import CalendarSquare from "./calendarSquare"

export default function calendarSquares(props){
    function renderSquares(){
        const squaresList =[]

        for(let i=1; i<=props.daysInMonth; i++){
            squaresList.push(<CalendarSquare date={i}/>)
        }

        return squaresList
    }

    return(
        <div className="calendar-squares">
            {renderSquares()}
        </div>
        
    )
}