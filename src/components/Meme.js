export default function Meme() {
  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
        />
      </div>
    </main>
  );
}
