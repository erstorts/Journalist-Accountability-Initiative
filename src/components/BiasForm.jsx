import React, { useState } from 'react';
import Input from "../common/input"

function BiasForm({getURL}) {

    const [emailInput, setEmailInput] = useState("")
    const [articleInput, setArticleInput] = useState("")
    
    const doSubmit = (event) => {
        console.log("Submit")
        event.preventDefault()
        setArticleInput(articleInput) 
        setEmailInput(emailInput)
        getURL(articleInput)
        console.log(emailInput, articleInput)
    }

    const validate = () => {
        if (emailInput.length > 0 && articleInput.length > 0) {
            return false
        }
        return true
    }

    return (
            <div>
                <form onSubmit={doSubmit}>
                    <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        label="Submit you email & aritcle to see bias."
                        onChange={event => setEmailInput(event.target.value)}
                        error="" />
                    <Input type="text"
                        placeholder="Article URL"
                        name="url"
                        label=""
                        onChange={event => setArticleInput(event.target.value)}
                        error="" />
                    <button disabled={validate()} className="btn btn-warning mt-2">{"Get Bias"}</button>
                </form>
            </div>
    );
}


export default BiasForm;