import React, { Component } from 'react';
import css from './Quote.module.css';
import background from './5590822.jpg';
import { useState } from 'react';
import axios from 'axios';



const Quote = () => {

    const [quote, setQuote] = useState("Click on Next to get Quotes");

    async function getQuote() {
        const qu = await axios.get('https://api.adviceslip.com/advice');
        console.log(qu.data.slip.advice);
        setQuote(qu.data.slip.advice);
    }
    return (
        <div className={css.main_div} style={{ backgroundImage: `url(${background})` }}>
            <div className={css.quote_div}>
                <h3 className={css.quote_head}>{`"${quote}"`}</h3>
                <button className={css.btn} onClick={getQuote}>Next</button>
            </div>
        </div>

    );

};
export default Quote;