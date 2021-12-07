import React ,{useState} from  'react'

export default function Textarea(props) {
    const setUpCase=()=>{
        console.log('Upper case is clicked');
        let newtext=text.toUpperCase();
        settext(newtext);
    }
    const changed=(event)=>{
        console.log("Changed!!");
        settext(event.target.value);
    }
    const [text,settext]=useState('Enter your text here');
    return (        
    <div class="form-group">
        <h3>{props.heading}</h3>
        <textarea class="form-control" id="myBox" rows="8" value={text} onChange={changed}></textarea>
        <button className="primaryUppercase"  onClick={setUpCase}>Convert to Uppercase</button>
    </div>    
    )
}
