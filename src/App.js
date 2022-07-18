import React, {useState} from 'react';
import classes from './styles/main.module.css';
import RatingCard from "./component/RatingCard";
import RatedCard from "./component/RatedCard";

function App() {
    const [rate , setRate] = useState([
        {
            id:1,
            rate:1
        },
        {
            id:2,
            rate: 2
        },
        {
            id:3,
            rate: 3
        },
        {
            id:4,
            rate: 4
        },
        {
            id:5,
            rate: 5
        }
    ]);
    const [rated, setRated] = useState(false);
    const [rateId , setRateId] = useState('');
    const ratedHandler = (id) =>{
        const rateTemp = rate.find(item => id === item.id)
        setRateId(rateTemp.rate) ;
    }
  return (
    <div className={classes.container}>
        {
            rated ? <RatedCard rate={rate} rateId={rateId}/>
            :
            <RatingCard rate={rate}
                        setRated={setRated}
                        ratedHandler={ratedHandler}
            />
        }
    </div>
  );
}

export default App;
