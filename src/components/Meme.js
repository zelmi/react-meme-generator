import memesData from "../data/memesData";
import React, {useState} from "react";

export default function Meme() {
  let [memeImage, setMemeImage] = useState("");
  function buttonClicked() {
    let memeArray = memesData.data.memes;
    let meme = memeArray[Math.floor(Math.random() * memeArray.length)];
    console.log(meme.url);
    setMemeImage(meme.url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button onClick={buttonClicked} className="form--button">Get a new meme image 🖼</button>
      </div>
      <img id="memeImg" src={memeImage} alt="Flowers in Chania"/>
    </main>
  );
}
