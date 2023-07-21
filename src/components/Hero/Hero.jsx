import React from "react";

export default function Hero() {
  return (
    <div>
      <header>
        <nav>
          <img alt="logo" />
          <button
            type="button"
            onClick={() =>
              window.open("https://github.com/onikaChorba/summarize")
            }
          >
            GitHub
          </button>
        </nav>
        <h1>
          Summarizing Articles using <br />
          the Power of <span>OpenAI GPT-4</span>
        </h1>
        <h2>Experience the Future of AI-Driven Summarization</h2>
      </header>
    </div>
  );
}
