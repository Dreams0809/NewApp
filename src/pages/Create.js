import React from "react";

export default function Create() {
  return (
    <div>
      <h1> Create your Community </h1>

      <form className="form">
        Community Name:
        <input type="text" placeholder="Top text" className="form--input" />
        City:
        <input type="text" placeholder="Bottom text" className="form--input" />
        Area Code:
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button">Create 🖼</button>
      </form>
    </div>
  );
}
