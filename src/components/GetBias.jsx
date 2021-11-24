import React, { useState } from 'react';
import fire from "../images/fire-newspaper.jpeg"
import BiasForm from './BiasForm';

function GetBias(props) {

    const [url, setURL] = useState("")

    const getURL = (data) => {
        console.log(data)
        const biasOptions = ['Left', 'Lean Left', 'Center', 'Lean Right', 'Right']
        const biasOutput = biasOptions[Math.floor(Math.random() * biasOptions.length)];
        setURL(`This article's bias is ${biasOutput}`)
    }

    return (
        <div className='container gallery'>
                <img className='hero-image' src={fire} alt="calm young women holding newspaper on fire" />
                <div>
                    <h1>Is This What Reading <br />
                    the News Feels Like?</h1>
                </div>
                <BiasForm getURL={getURL}/>
                <h3>{url}</h3>
        </div>
    );
}

export default GetBias;