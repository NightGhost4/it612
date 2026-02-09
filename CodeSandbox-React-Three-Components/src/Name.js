import React from "react";

/**
 * Name component: displays first and last name.
 * Replace "YourFirstName" and "YourLastName" with your actual name.
 */
function Name() {
  const firstName = "YourFirstName";
  const lastName = "YourLastName";
  return (
    <p className="name-display">
      {firstName} {lastName}
    </p>
  );
}

export default Name;
