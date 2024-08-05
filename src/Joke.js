import React from "react";

export default function Joke(props) {
  return (
    <div className="Joke">
      <h1>{props.setup}</h1>
      <h2>{props.punchline}</h2>
    </div>
  );
}
