import React from 'react'
export default function Basic(){
    const [inputValue,SetInputValue]=useState(" ");
    const [displayMessage,setDisplayMessage]=useState('');
    const handleChange=(even) =>{
        SetInputValue(even.target.value);
    };
    const handleSubmit=(even) =>{
        even.preventDefault();
        setDisplayMessage(`Your submited: ${inputValue}`);
    };
    return(
        <div>
            <p>{displayMessage}</p>
            <from onSubmit={handleSubmit}>
                <lable>Type:</lable>
                <input type='text' value={inputValue} onChange={handleChange}/>
                <button>Submit</button>
            </from>
        </div>
    )
}