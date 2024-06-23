import React,{useState} from 'react';
import WheelComponent from './WheelComponent';
import './App.css';


const SpinWheel = () => {
 const [winner,setWinner] = useState('');
  const segments = ["10% Discount", "30% Discount", "40% Discount","Unlucky ! Try Next Time"];
  const segColors = ["#faa230", "#055cba", "#bb1625"];
  const onFinished = (winner1) => {
    console.log(winner1);
    setWinner(winner1)
  };

  const btnClick = () =>{
      
  }
  return (
    <div>
      <div>
        <div className='wheel'>
          <WheelComponent
            segments={segments}
            segColors={segColors}
            onFinished={(winner1) => onFinished(winner1)}
            primaryColor="#4E4F50"
            contrastColor="white"
            buttonText="Spin"
            isOnlyOnce={false}
            size={170}
            upDuration={50}
            downDuration={600}
            fontFamily="Arial"
          />
        </div>
      </div>
      <div className='btn-wrap'>
      <button className='btn-go'>Click to Avail</button>
      </div>
    </div>
  );
};

export default SpinWheel;
