import memesData from "../data/memesData";

export default function Meme() {
  function buttonClicked() {
    let memeArray = memesData.data.memes;
    let meme = memeArray[Math.floor(Math.random() * memeArray.length)];
    console.log(meme.name);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button onClick={buttonClicked} className="form--button">Get a new meme image 🖼</button>
      </div>
    </main>
  );
}
