import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

let arrayName = [
    {
        Value: 1,
        Status: false
    },
    {
        Value: 2,
        Status: false
    },
    {
        Value: 3,
        Status: false
    },
    {
        Value: 4,
        Status: false
    },
    {
        Value: 5,
        Status: false
    }
]

function Main(props) {
    const [ratingData,setRatingData] = useState(arrayName);
    const [preIndex,setPreIndex] = useState(null);
    const navigate = useNavigate();    
    const clickedFunc = (i) => {
        let temp = [...ratingData];
        if (preIndex !== null ){
            temp[preIndex].Status = !temp[preIndex].Status;
        }
        setPreIndex(i);
        temp[i].Status = !temp[i].Status;
        setRatingData(temp);
    }
    
    return (
        <>
            <div className="main-wrap-1">
                <div className="star circleStar"></div>
                <div className="heading">How do we do?</div>
                <p>Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!</p>
                <div className="rating">
                    {
                        ratingData.map((Anas, Osama) => (
                            <div className="circle" style={{
                                backgroundColor: Anas.Status ? "White" : "Grey",
                                color: Anas.Status ? "Black": "White"
                            }} onClick={() => clickedFunc(Osama)}>{Anas.Value}</div>
                            ))
                    }
                </div>
                <button className="buttonSubmit" onClick={() => navigate('/thankyou',{ state: { rate : preIndex } })} type="button">
                   SUBMIT 
                </button>
            </div>
        </>
    )
}

export {Main}

