import React, { useState } from 'react';
import Input from "../common/input"

function SupportForm() {

    const [userInput, setUserInput] = useState("")
    
    const doSubmit = (event) => {
        console.log("Submit")
        setUserInput(userInput) 
        console.log(userInput)
    }

    return (
            <div>
                <form onSubmit={doSubmit}>
                    <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        label="Submit you email below to stay up to date with us."
                        onChange={event => setUserInput(event.target.value)}
                        error="" />
                    <button className="btn btn-warning mt-2">{"Keep in Touch"}</button>
                </form>
            </div>
    );
}


export default SupportForm;