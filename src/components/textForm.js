import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To UpperCase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To LowerCase", "success");
    }

    const handleClClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById('myText')
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy To Clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    // setText("Hello")
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'gray',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} value={text} id="myText" rows="10" />
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className='container my-5' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes To Read The Words</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something In The Text-Box Above To Preview It Here"}</p>
            </div>
        </>
    )
}