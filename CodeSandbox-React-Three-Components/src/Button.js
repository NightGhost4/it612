import React, { useState } from "react";

/**
 * Button component: displays a button with click behavior.
 */
function Button() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((prev) => prev + 1);
  }

  return (
    <div className="button-section">
      <button type="button" className="action-button" onClick={handleClick}>
        Click me
      </button>
      <p className="click-message">
        Button clicked {clickCount} time{clickCount !== 1 ? "s" : ""}.
      </p>
    </div>
  );
}

export default Button;
