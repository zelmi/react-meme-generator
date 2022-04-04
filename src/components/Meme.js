import memesData from "../data/memesData";
import React, { useState } from "react";

export default function Meme() {
  let [allMemeImages, setAllMemeImages] = useState(memesData);
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  
  function buttonClicked() {
    let memeArray = allMemeImages.data.memes;
    let meme1 = memeArray[Math.floor(Math.random() * memeArray.length)];
    console.log(meme1.url);
    setMeme(prevMeme => {
      return {
          ...prevMeme,
          randomImage: meme1.url
      }
  })
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button onClick={buttonClicked} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <img id="memeImg" src={meme.randomImage} alt="" />
    </main>
  );
}
