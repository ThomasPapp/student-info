import React, { Component } from 'react'

const AddStudent = props => (
    <main>
        <span className="page">Add a student</span>
        <input
             placeholder="Student's name"
             onChange={ e => props.updateInput(0, e.target.value) }
        />

        <p><span className="question">From:</span> <input onChange={ e => props.updateInput(1, e.target.value) } placeholder="Student's hometown"/></p>

        <p><span className="question">Fun fact:</span> <input onChange={ e => props.updateInput(2, e.target.value) } placeholder="Fun fact about student" /></p>

        <h2>Would you rather...</h2>
        <ul>
            <li><span className="question">...live in the city or country?</span> <input onChange={ e => props.updateInput(3, e.target.value) } placeholder="City or country?" /></li>

            <li><span className="question">... be indoors or outdoors?</span> <input onChange={ e => props.updateInput(4, e.target.value) } placeholder="Indoors or outdoors?" /></li>

            <li><span className="question">...travel every day or never leave home?</span> <input onChange={ e => props.updateInput(5, e.target.value) } placeholder="Travel or stay home?" /></li>

            <li><span className="question">...eat at Top's or Subway?</span> <input onChange={ e => props.updateInput(6, e.target.value) } placeholder="Tops or Subway?" /></li>

            <li><span className="question">...have a dog or cat?</span> <input onChange={ e => props.updateInput(7, e.target.value) } placeholder="Have a dog or cat?" /></li>
        </ul>
    </main>
)

export default AddStudent