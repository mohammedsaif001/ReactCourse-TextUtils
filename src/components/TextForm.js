import React, { useState } from 'react';



export default function TextForm(props) {
    const handleUPClick = () => {
        console.log("UpperCae was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("CONVERTED TO UPPERCASE","danger");
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter Text Here');
    // text = "New Text"  -> Wrong Way
    // setText("New Text"); //Correct Way to change the text
    
    return (
        <>
        <div className='container' style = {{ color:props.mode === 'dark' ? 'white' : '#042743' }}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUPClick}>CONVERT TO UPPERCASE</button>
        </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} word, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>PREVIEW TO READ</h2>
            <p>{text.length>0?text:"Enter Your TExt to Preview"}</p>
        </div>
            
        </>
    )
}
