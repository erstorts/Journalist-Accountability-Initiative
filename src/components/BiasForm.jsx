import React, { useState } from 'react';
import Input from "../common/input"
import APIWrapper from "../services/API"

function BiasForm({getURL}) {

    const API = new APIWrapper()
    const [emailInput, setEmailInput] = useState("")
    const [articleInput, setArticleInput] = useState("")

    
    async function doSubmit(event) {
        console.log("Submit")
        event.preventDefault()
        setArticleInput(articleInput) 
        setEmailInput(emailInput)

        const myInit = {
            body: {email: emailInput,
                    article: articleInput},
        };

        try {
            await API.post('/users', myInit)
            const articlesResponse = await API.post('/articles', myInit)
            getURL(articlesResponse)
        } catch (ex) {
            console.log(ex)
            alert("Looks like we have an error.  Please try again.")
        }
        
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