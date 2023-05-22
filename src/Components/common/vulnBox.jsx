import React from "react";

const VulnBox = ({ bgcolor, vulnNum, tagname }) => {
  return (
    <div className="vuln-box">
      <div className="vuln-num" style={{ backgroundColor: bgcolor }}>
        <div className="vuln-num-text">{vulnNum}</div>
      </div>
      <div className="vuln-level">{tagname}</div>
    </div>
  );
};

export default VulnBox;
