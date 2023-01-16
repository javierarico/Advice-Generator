import './App.css';
import dice from './icon-dice.svg';
import patternDskt from './pattern-divider-desktop.svg';
import { useState, useEffect } from 'react';

export function AdviceGenerator (){
    const [advices, setAdvice] = useState([]);

    const APICall = () => {
        fetch('https://api.adviceslip.com/advice')
            .then((res) => res.json())
            .then((data) => {
                //console.log(data)
                //console.log(data.slip.advice, data.slip.id);
                setAdvice(data.slip);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    useEffect(() => {
        APICall();
    }, []);

    //console.log(advices)

    const handleClick = () => {
        //console.log('random quote');
        //console.log(advices);
        APICall();
    }
    return (
        <div className='app-generator'>
            <main className='app-generator-container'>
                <h5 className='advice-number'>Advice #{advices.id}</h5>
                <h3 className='advice-txt'>"{advices.advice}"</h3>
                <img src={patternDskt} alt='' className='pattern-divider' />
            </main>
            <button className='random-btn' onClick={handleClick}><img src={dice} alt='random advice' /></button>
            <div class="attribution">
                <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
                Coded by <a href="https://github.com/javierarico" target="_blank" rel="noreferrer">Javiera Rico</a>.<br/>
                Made in React with ♥.</p>
            </div>
        </div>
    )
}