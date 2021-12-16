import { useState } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import FirstNameForm from "./components/FirstNameForm";

function WhatWeNeed() {
  const [hidden, setHidden] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [error, setError] = useState(false);

  function clickButton1() {
    setHidden(!hidden);
  }

  return (
    <Container>
      <div style={{ backgroundColor }}>
        <h1>Some stuff to know</h1>
        <p>What we need for the christmas break: </p>
        <Button onClick={clickButton1}>{hidden ? "Show" : "Hide"}</Button>
        {!hidden && (
          <ul>
            <li>Component-ise stuff</li>
            <li>Styling our app</li>
            <li>Using some dynamic props</li>
            <li>Setting content to state so our page will update!</li>
          </ul>
        )}
        <Button
          onClick={() => {
            setBackgroundColor("green");
          }}
        >
          Set background Color to ivory
        </Button>
        <div style={{ margin: "20px" }}>
          <FirstNameForm buttonError={error} placeholder="first name" />
          <Button
            onClick={() => {
              setError(!error);
            }}
          >
            Error
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default WhatWeNeed;
