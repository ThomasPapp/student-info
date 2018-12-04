import React from 'react'

const Toolbar = props => (
    <div className="toolbar">

    <button className="buttonBlue space" onClick={ props.cancel }>Cancel</button>
    
    <button className="buttonBlue" onClick={ props.submit }>Submit</button>

</div>
)

export default Toolbar