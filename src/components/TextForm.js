// TextForm Preview and text analysis
import React, { useState } from 'react'
// import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState("");
    // const [uppercasetext, setUppercasetext] = useState("");

    function ClearText() {
        setText("")
        alert("are you sure you want to clear the text")

    }

    return (
        <div>
            
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={(e) => setText(e.target.value)} id="my-bux" rows="7"></textarea>
            </div>
            <button className='btn btn-primary' onClick={ClearText} style={{ fontSize: '1.3vw' }}>clear</button>
            <div className='my-3'>
                <h3 className='my-3'>Your Text Analysis:</h3>
                {/* <h4 className='center-text'><b>{uppercasetext}</b></h4> */}
                <h5 className='center-text'>{text.split(" ").length} words {text.length} characters</h5>
                <h5 className='center-text'>{0.008 * text.split(" ").length} minutes read</h5>
            </div>
            <div>
                <h3 className='my-4'>Preview:</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

