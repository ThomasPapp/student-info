import React from 'react'

const Student = props => {
    return (
        <main>
            <span className="page">{props.currentPage} of {props.totalPages}</span>
            <h1>{props.student.name}</h1>

            <p><span className="question">From:</span> {props.student.from}</p>
            <p><span className="question">Fun fact:</span> {props.student.funFact}</p>

            <h2>Would you rather...</h2>
            <ul>
                <li><span className="question">...live in the city or country?</span> {props.student.cityOrCountry}</li>
                <li><span className="question">... be indoors or outdoors?</span> {props.student.indoorsOrOutdoors}</li>
                <li><span className="question">...travel every day or never leave home?</span> {props.student.travel}</li>
                <li><span className="question">...eat at Top's or Subway?</span> {props.student.food}</li>
                <li><span className="question">...have a dog or cat?</span> {props.student.dogOrCat}</li>
            </ul>
        </main>
    )
}

export default Student