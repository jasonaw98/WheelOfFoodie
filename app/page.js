'use client'
import WheelComponent from "./react-wheel-of-prizes/dist/index";

export default function Home() {

  const segments = [
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

  const segColors = [
    '#EE4040',
    '#F0CF50',
    '#815CD1',
    '#3DA5E0',
    '#ffc8d9',
    '#34A24F',
    '#F9AA1F',
    '#EC3F3F',
    '#babbf6',
    '#FF9000',
  ];

  const onFinished = (winner) => {
    console.log(winner);
  };

  return (
    <div className="App">
    <h1>What should we eat today?</h1>
    <div className="container">
    <div className="wheel">
      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="Spin"
        isOnlyOnce={false}
        size={290}
        upDuration={300}
        downDuration={500}
        fontFamily="Arial"
      />
    </div>
    </div>
  </div>
  )
}
