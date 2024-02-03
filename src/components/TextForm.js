import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("Uppercase was clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }
    const handleloClick =()=>{
        console.log("Uppercase was clicked"+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lowercase","success");
    }

    const handledoClick = () => {
        const element = document.createElement('a');
        const file = new Blob([text], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = 'mytextfile.txt';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        props.showAlert("txt downloaded ","success");
      };
    

    const handleOnChange =(event)=>{
        console.log("no change");
        setText(event.target.value);
    }

    const handlecopy=()=>{
        console.log("i am copy");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value); 
        props.showAlert("txt is coppied","success");
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text,setText]=useState('');

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            {   /* <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div> */}
            <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>convert to lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handledoClick}>Download text</button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>copy text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>remove spaceses</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>your text summary</h2>
        <p>{text.split(" ").length}, and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}minute read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something in the textbox  above to preview it here"}</p>
    </div> 
    </>
  )
}
