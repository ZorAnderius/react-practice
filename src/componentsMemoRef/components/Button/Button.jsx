import React from "react";

export const Button = React.memo(function Button({ children, handleClick }) {
  return (
    <button type="button" onClick={() => handleClick()}>
      {children}
    </button>
  );
});
