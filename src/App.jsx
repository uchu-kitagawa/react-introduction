/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "../compornents/ColorfulMessage";

const App = () => {
  console.log("App.jsx START");
  // stateの変数名とset関数名を定義する
  // stateの更新毎にコンポーネントの先頭からロードされて再レンダリングされる
  /**
   * 再レンダリングの条件
   * ・stateの更新（※更新した瞬間ではなくレンダリングを終えてから再レンダリングに入るらしい）
   * ・propsの更新
   * ・親コンポーネントの再レンダリング
   */
  const [num, setNum] = useState(0);
  const [faseShowFlag, setFaceShowFlag] = useState(true);

  useEffect(() => {
    // useEffectは第2引数の変数が更新された場合に実行される
    console.log("num");
    if (num % 3 === 0) {
      faseShowFlag || setFaceShowFlag(true);
    } else {
      faseShowFlag && setFaceShowFlag(false);
    }
    // faseShowFlagを第2引数に指定しろとeslintのwarningが出るので先頭行でoffにする
  }, [num]);
  useEffect(() => {
    // useEffectの第2引数を[]にすると初期表示のみ実行、再レンダリング時には実行されない
    console.log("初期表示のみ実行");
  }, []);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchFaseShowFlag = () => setFaceShowFlag(!faseShowFlag);
  // cssのプロパティはReactだとキャメルケースの文字列で記載する
  const contentStyle = {
    color: "blue",
    fontSize: "40px"
  };
  // JSX記法（DOMを関数で記載）
  // 1つのタグを返却すること
  // Compornentはパスカルケース
  // JSX内の{}はjavascriptと判断される
  return (
    // React.Fragmentはレンダリングされないタグとして利用できる
    // React.Fragmentを省略して<></>とすることも可能
    // JSXを記載の場合は.jsより.jsxが望ましい
    <>
      <h1 style={contentStyle}>こんにちは！</h1>
      <p>お元気ですか？</p>
      <ColorfulMessage color="blue">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickSwitchFaseShowFlag}>ON/OFF</button>
      {faseShowFlag && <p>☺</p>}
    </>
  );
};

// このファイル以外にも公開して利用可能にする
export default App;
