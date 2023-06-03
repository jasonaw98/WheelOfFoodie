import { useState } from "react";

const foodItems = [
    "Yamatatsu",
    "Chilli Pan Mee",
    "Shin Zushi",
    "Hao Jiu Mian",
    "Menya Hanabi",
    "Jisoo",
    "Home Cook",
    "Nasi Lemak",
    "Korean Fried Chicken",
    "The Fire",
    "XHS",
];

const getRandomFood = () => {
  const randomIndex = Math.floor(Math.random() * foodItems.length);
  return foodItems[randomIndex];
};

const WheelOfFood = () => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState("");

  const spinWheel = () => {
    setSpinning(true);
    const randomRotation = Math.floor(Math.random() * 360) + 720;
    setRotation(rotation + randomRotation);
    setTimeout(() => {
      const food = getRandomFood();
      setResult(food);
      setSpinning(false);
    }, 3000);
  };

  return (
    <div className="wheel-container">
        <div className="result">What shall we eat today ?</div>
      <div className="wheel" style={{ transform: `rotate(${rotation}deg)` }}>
        {foodItems.map((food, index) => (
          <div
            key={index}
            className="segment"
            style={{ transform: `rotate(${index * (360 / foodItems.length)}deg)` }}
          >
            {food}
          </div>
        ))}
      </div>
      <button className="spin-button" onClick={spinWheel} disabled={spinning}>
      {spinning ? 'Spinning...' : 'Spin'}
      </button>
      {result && <div className="result">You got: {result}</div>}
    </div>
  );
};

export default WheelOfFood;
