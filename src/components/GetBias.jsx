import React, { useState } from 'react';
import BiasForm from './BiasForm';
import APIWrapper from "../services/API"

function GetBias(props) {

    const API = new APIWrapper()
    
    async function test() {
        const response = await API.get('/users')
        console.log(response)
    }

    test()

    const [url, setURL] = useState("")

    const getURL = (data) => {
        console.log(data)
        const biasOptions = ['Left', 'Lean Left', 'Center', 'Lean Right', 'Right']
        const biasOutput = biasOptions[Math.floor(Math.random() * biasOptions.length)];
        setURL(`This article's bias is ${biasOutput}`)
    }

    return (
        <div className='container gallery'>
                <img className='hero-image' src="https://images.pexels.com/photos/3422053/pexels-photo-3422053.jpeg?cs=srgb&dl=pexels-produtora-midtrack-3422053.jpg&fm=jpg" alt="calm young women holding newspaper on fire" />
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