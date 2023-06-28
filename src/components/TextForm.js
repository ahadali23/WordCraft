import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase", "success");
  }

  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase", "success");
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared", "warning");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const handleCopy = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // navigator.clipboard.writeText(text.value);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copy To Clipboard", "success");
  }
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}
        style={{backgroundColor: props.mode==='dark'?'#adb5bd':'white',
        color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert To LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>Words: {text.split(/\s+/).filter((ele) =>{return ele.length !== 0}).length} | Characters: {text.length}</p>
      <p>{0.008 * text.split(" ").filter((ele) =>{return ele.length !== 0}).length} Minutes To Read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing To Preview!"}</p>
    </div>
    </>
  )
}
