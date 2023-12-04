import React ,{useState} from 'react'

export default function TextForm(props) {
    const handleup = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handlelo = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclr = ()=>{
        setText('');
    }
    const handleinv = ()=>{
        //console.log("Uppercase was clicked" + text);
        let reversedString = text.split("").reverse().join("");
        setText(reversedString);
    }
    const capatalize = ()=>{
        //console.log("Uppercase was clicked" + text);
       let newText= text.toLowerCase().split(" ");
        let finalstr="";
        for(var i=0;i<newText.length;i++)
        {
            finalstr=finalstr+" "+ newText[i].charAt(0).toUpperCase()+newText[i].substring(1);
        }
        setText(finalstr);
    }
    const titlecase = ()=>{
        let newstrs = text.split(".");
        let finalstr="";
        for(var i=0;i<newstrs.length;i++)
        {
            finalstr=finalstr+"."+ newstrs[i].substring(0,2).toUpperCase()+newstrs[i].substring(3);
        }
        setText(finalstr.substring(1));
        
    }
   
    const altering = ()=>{
        //console.log("Uppercase was clicked" + text);
            var chars = text.toLowerCase().split("");
            for (var i = 0; i < chars.length; i += 2) {
            chars[i] = chars[i].toUpperCase();
            }
            setText(chars.join(""));
            
    }
    const handlecopy = ()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleremext = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
   
    const handleonChange = (event)=>{
        //console.log("On change");
        setText(event.target.value);
    }
    //Important 
    const [text, setText] = useState('');
   
  return (
    <>
    <div className="container mb-1 " style={{color:props.mode==='light'?'black':'white'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'#494545':'white',color:props.mode==='dark'?'white':'black',borderColor:props.mode==='dark'?'black':'#dadada'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleup}>Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlelo}>Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleinv}>Inverse</button>
        <button className="btn btn-primary mx-1 my-1" onClick={capatalize}>Capatalize Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={titlecase}>Title Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={altering}>Altering Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleremext}>Remove extraspaces</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlecopy}>Copy to clipboard</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleclr}>Clear text</button>
        
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview"}</p>
    </div>
    </>
  )
}
