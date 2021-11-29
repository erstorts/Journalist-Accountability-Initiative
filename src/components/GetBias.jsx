import React, { useState } from 'react';
import BiasForm from './BiasForm';

function GetBias(props) {

    const [biasMessage, setBiasMessage] = useState("")

    const getURL = (data) => {
        setBiasMessage(data)
    }

    return (
        <div className='container gallery'>
                <img className='hero-image' src="https://images.pexels.com/photos/3422053/pexels-photo-3422053.jpeg?cs=srgb&dl=pexels-produtora-midtrack-3422053.jpg&fm=jpg" alt="calm young women holding newspaper on fire" />
                <div>
                    <h1>Is This What Reading <br />
                    the News Feels Like?</h1>
                </div>
                <BiasForm getURL={getURL}/>
                <h3>{biasMessage}</h3>
        </div>
    );
}

export default GetBias;