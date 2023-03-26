import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Thankyou() {
    const {state} = useLocation();
    return (
        <>
            <div className="main-wrap-2">
                <div className="illustration"></div>
                <div className="selected">You selected {state.rate+1} out of 5</div>
                <div className="heading">Thank you!</div>
                <p className="last" >We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!</p>
            </div>
        </>
    )
}