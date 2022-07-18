import React, {useState} from 'react';
import classes from '../styles/main.module.css';
import starIcon from '../assets/icon-star.svg';
import RatedCard from "./RatedCard";
const RatingCard = ({rate,setRated,ratedHandler}) =>{
    const clickSubmitBtnHandler = () =>{
        setRated(true);
    }
    return(
            <div className={classes.card}>
                <div className={classes['card__iconWrapper']}>
                    <img src={starIcon} alt="star-icon"/>
                </div>
                <h2>How did we do?</h2>
                <p>Please let us know how we did with your support request.All feedback is appreciated to help us improve our offering!</p>
                <div className={classes['card__ratingWrapper']}>
                    {rate.map(item => {
                        return(
                            <button  key={item.id}
                                    className={`${classes.circle} ${classes.active}`}
                                    onClick={() =>ratedHandler(item.id)}
                            >
                                {item.rate}
                            </button>
                        )
                    })
                    }
                </div>
                <button className={classes['card__submitBtn']} onClick={clickSubmitBtnHandler}>Submit</button>
            </div>
    )
}
export default RatingCard;