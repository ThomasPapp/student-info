import React, { Component } from 'react'

const EditStudent = props => {
    return (
        <main>
            <span className="page">Edit a student</span>
            <input
                placeholder="Student's name"
                onChange={ e => props.updateInput(0, e.target.value) }
                value={props.inputs[0]}
            />

            <p><span className="question">From:</span> 
            <input 
                value={props.inputs[1]} 
                onChange={ e => props.updateInput(1, e.target.value) } 
                placeholder="Student's hometown"
            /></p>

            <p><span className="question">Fun fact:</span> 
            <input 
                value={props.inputs[2]} 
                onChange={ e => props.updateInput(2, e.target.value) } 
                placeholder="Fun fact about student" 
            /></p>

            <h2>Would you rather...</h2>
            <ul>
                <li><span className="question">...live in the city or country?</span> 
                <input
                    value={props.inputs[3]} 
                    onChange={ e => props.updateInput(3, e.target.value) } 
                    placeholder="City or country?" 
                 /></li>

                <li><span className="question">... be indoors or outdoors?</span> 
                <input 
                    value={props.inputs[4]} 
                    onChange={ e => props.updateInput(4, e.target.value) } 
                    placeholder="Indoors or outdoors?" 
                /></li>

                <li><span className="question">...travel every day or never leave home?</span> 
                <input 
                    value={props.inputs[5]} 
                    onChange={ e => props.updateInput(5, e.target.value) } 
                    placeholder="Travel or stay home?" 
                /></li>

                <li><span className="question">...eat at Top's or Subway?</span> 
                <input 
                    value={props.inputs[6]} 
                    onChange={ e => props.updateInput(6, e.target.value) } 
                    placeholder="Tops or Subway?"
                /></li>

                <li><span className="question">...have a dog or cat?</span> 
                <input 
                    value={props.inputs[7]} 
                    onChange={ e => props.updateInput(7, e.target.value) } 
                    placeholder="Have a dog or cat?" 
                /></li>
            </ul>
        </main>
    )
}

export default EditStudent