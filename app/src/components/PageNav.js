import React from 'react'

const PageNav = props => (
    <div className="pageNav">
        <button className="textButton left" onClick={ props.previousPage }>{"< Previous"}</button>

        <button className="buttonBlue" onClick={props.edit}>Edit</button>

        <button className="buttonBlue" onClick={props.delete}>Delete</button>

        <button className="buttonBlue" onClick={props.createNew}>New</button>

        <button className="textButton right" onClick={ props.nextPage }>Next ></button>
    </div>
);

export default PageNav