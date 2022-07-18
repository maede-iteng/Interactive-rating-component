import React from 'react';
import classes from '../styles/main.module.css';
import thanksImg from '../assets/illustration-thank-you.svg';

const RatedCard = ({rateId}) =>{
    return(
        <div className={`${classes.card} ${classes.ratedCard}`}>
            <div className={classes['card__imageWrapper']}>
                <img src={thanksImg} alt="thanks-img"/>
            </div>
            <div className={classes.resultWrapper}>
                <p>You selected {rateId} out of 5</p>
            </div>
            <h2>Thank You!</h2>
            <p className={classes.message}>We appreciate you taking the time to give a rating.if you ever need more support,don't hesitate to get in touch.</p>
        </div>
    )
}
export default RatedCard;