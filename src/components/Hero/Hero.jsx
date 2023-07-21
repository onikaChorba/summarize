import React from "react";
import { Button } from "react-bootstrap";

const MyComponent = () => {
  return (
    <div>
      <header className="header-style">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container d-flex justify-content-between">
            <b className="navbar-brand text-warning">Summarizer</b>
            <Button
              type="button"
              className="btn btn-dark border-white"
              onClick={() =>
                window.open("https://github.com/onikaChorba/summarize")
              }
            >
              <b>GitHub</b>
            </Button>
          </div>
        </nav>
        <h1 className="text-center text-white mt-5">
          Summarizing Articles using <br />
          the Power of <span>OpenAI GPT-4</span>
        </h1>
        <h2 className="text-center mt-4 font-weight-bold text-warning">
          Experience the Future of AI-Driven Summarization
        </h2>
      </header>
    </div>
  );
};

export default MyComponent;
