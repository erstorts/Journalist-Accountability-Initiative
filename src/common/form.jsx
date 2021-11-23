import React, { useState } from 'react';
// import Joi from 'joi-browser'
import Input from "./input"

export function RenderInput (name, label, type='text', placeholder="") {

    const [value, setValue] = useState("")

    console.log(value)


    return (<Input type={type}
                    placeholder={placeholder}
                    name={name}
                    label={label}
                    onChange={e => setValue(e.target.value)}
                    error={""} />)
}

export function renderButton (label) {
    return (<button className="btn btn-warning">{label}</button>)
}

