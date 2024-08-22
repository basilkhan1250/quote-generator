import { useEffect, useState } from "react"
import React from "react"
import icon from "./assets/random.png"
import "./random.css"

export default function Randomquotes() {

    const [quote, setQuote] = useState({})

    const [refesh,setRefresh] = useState(0)

    const url = 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=2';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'd09239869emshf55a824a55ae015p14a3f5jsndbde726ffd4f',
            'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com'
        }
    };
    useEffect(() => {
        fetchData();
    }, [refesh])
    
    const fetchData = async () => {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setQuote(result[0])
        } catch (error) {
            console.error(error);
        }
    }
    

   

    return (
        <div className="container">
            <div className="quote">{quote.text}</div>
            <div className="line"></div>
            <div className="bottom">
                <div className="author">- {quote.author}</div>
                <div className="icon">
                    <img src={icon} onClick={() =>{setRefresh(refesh+1)}} />
                </div>
            </div>
        </div>

    )
}