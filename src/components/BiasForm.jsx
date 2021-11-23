import React, { useState } from 'react';
import Input from "../common/input"

function BiasForm({getURL}) {

    const [userInput, setUserInput] = useState("")
    
    const doSubmit = (event) => {
        console.log("Submit")
        event.preventDefault()
        setUserInput(userInput) 
        getURL(userInput)
        console.log(userInput)
    }

    return (
            <div>
                <form onSubmit={doSubmit}>
                    <Input type="text"
                        placeholder="Article URL"
                        name="url"
                        label="Submit an article to see the bias."
                        onChange={event => setUserInput(event.target.value)}
                        error="" />
                    <button className="btn btn-warning">{"Get Bias"}</button>
                </form>
            </div>
    );
}


export default BiasForm;