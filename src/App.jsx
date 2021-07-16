import React, { useState } from "react";
import ColorFulMessage from "./compornents/ColorFulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitch = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  if (num % 3 === 0) {
    setFaceShowFlag || setFaceShowFlag(true);
  } else {
    faceShowFlag && setFaceShowFlag(false);
  }

  return (
    <>
      <h1>あああああ</h1>
      <ColorFulMessage color="pink" fontSize="28px">
        あいしてる
      </ColorFulMessage>
      <ColorFulMessage color="blue" fontSize="30px">
        お元気ですか
      </ColorFulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitch}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;
