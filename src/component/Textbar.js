import { useState } from 'react';



export default function Textbar(props) {
    const [text,updateText] = useState("enter text here");


    
    const handleUptoclick = (event)=>{
        
        let newText= text.toUpperCase();
        
        updateText(newText);
        
        
    }
    
    const handleLotoclick = (event)=>{
        
        let newText= text.toLowerCase();
        
        updateText(newText)
    }
    
    const handleOnChange = (event)=>{

        updateText(event.target.value);

    }

    const handleColorclick = (event)=>{

        document.getElementById("mybox").style.color = "blue";

      

    }

    return (

        <>
            <div className="container" style={{color:props.mode === "dark"? "white":"black"}}>
                <h1>Enter text here</h1>
                <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} id="mybox"  style={{backgroundColor:props.mode === "dark"? "grey":"white" , color:props.mode === "dark"? "white":"black"}} rows="8" value={text}></textarea>
                </div>
            <button type="button" onClick={handleUptoclick} className="btn btn-primary mx-1">convert Uppercase </button>
            <button type="button" onClick={handleLotoclick} className="btn btn-primary mx-1">convert Lowercase </button>
            <button type="button" onClick={handleColorclick} className="btn btn-primary mx-1">change color text </button>
            </div>
            <div className='container my-3' style={{color:props.mode === "dark"? "white":"black"}}>
                <h2>enter text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!== 0}).length} word and {text.length} character</p>
                <p>{0.008* text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
        

    );
}