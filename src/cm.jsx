import { useState } from "react";
import "./app.css"; // make sure this is updated CSS

function Cm() {
  const [r, setr] = useState(0);
  const [g, setg] = useState(0);
  const [b, setb] = useState(0);
  const [gc, setgc] = useState(rcolor());

  function rcolor() {
    return `rgb(${r},${g},${b})`;
  }

  const gcolor = () => {
    navigator.clipboard.writeText(gc)
    alert('color code is copy..')
  };

  return (
    <div className="color-mixture-container">
      <h1>🎨 Color Mixture</h1>

      <div className="color-box" style={{ backgroundColor: rcolor() }}></div>

      <div className="sliders">
        <div className="slider-group">
          <label htmlFor="red">🔴 Red</label>
          <input type="range" min="0" max="255" id="red" value={r} onChange={(e) =>
            setr(Number(e.target.value),
            setgc(rcolor())
            )} />
        </div>

        <div className="slider-group">
          <label htmlFor="green">🟢 Green</label>
          <input type="range" min="0" max="255" id="green" value={g} onChange={(e) =>
            setg(Number(e.target.value),
              setgc(rcolor())
            )} />
        </div>

        <div className="slider-group">
          <label htmlFor="blue">🔵 Blue</label>
          <input type="range" min="0" max="255" id="blue" value={b} onChange={(e) => 
            setb(Number(e.target.value),
            setgc(rcolor()))} />
        </div>
      </div>

      <h1 className="saved-color">{gc}</h1>
      <button className="save-btn" onClick={gcolor}>Get Color Code</button>

      <footer className="footer">
        Made with ❤️ by <a href="https://github.com/mananmkgithub?tab=repositories" target="_blank" rel="noopener noreferrer">Mk</a>
      </footer>
    </div>
  );
}

export default Cm;
