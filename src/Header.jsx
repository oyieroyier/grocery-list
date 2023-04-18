import React from "react";

const Header = ({ title }) => {
  return (
    <header
      style={{
        color: "whitesmoke",
        background: "#333",
        padding: "10px",
      }}
    >
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = { title: "Default Header" };

export default Header;
