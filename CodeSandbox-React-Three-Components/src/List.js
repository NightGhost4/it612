import React from "react";

/**
 * List component: displays an unordered list of items.
 */
function List() {
  const items = [
    "React components",
    "CSS styling",
    "CodeSandbox",
    "Web development",
  ];

  return (
    <ul className="custom-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
