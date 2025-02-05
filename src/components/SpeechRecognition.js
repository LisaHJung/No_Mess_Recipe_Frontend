"use strict";
import React, { Component } from "react";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continous = true;
recognition.interimResults = false;
recognition.lang = "en-US";

class Speech extends Component {
  constructor() {
    super();
    this.state = {
      listening: false,
    };
    this.toggleListen = this.toggleListen.bind(this);
    this.handleListen = this.handleListen.bind(this);
  }

  toggleListen() {
    this.setState(
      {
        listening: !this.state.listening,
      },
      this.handleListen
    );
  }

  handleListen() {
    console.log("listening?", this.state.listening);

    if (this.state.listening) {
      recognition.start();
      recognition.onend = () => {
        console.log("...continue listening...");
        recognition.start();
      };
    } else {
      recognition.stop();
      recognition.onend = () => {
        console.log("Stopped listening per click");
      };
    }

    recognition.onstart = () => {
      console.log("Listening!");
    };

    let finalTranscript = "";
    recognition.onresult = (event) => {
      let interimTranscript = "";

      const currentTranscript = event.results[0][0].transcript;
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + " ";
        else interimTranscript += transcript;
      }
      document.getElementById("final").innerHTML = finalTranscript;

      const transcriptArr = finalTranscript.split(" ");
      const stopCmd = transcriptArr.slice(-3, -1);

      if (currentTranscript.includes("up")) {
        window.scrollBy({
          top: -100,
          behavior: "smooth",
        });
      }

      if (currentTranscript.includes("down")) {
        window.scrollBy({
          top: 100,
          behavior: "smooth",
        });
      }

      if (stopCmd[0] === "stop" && stopCmd[1] === "listening") {
        recognition.stop();
        recognition.onend = () => {
          console.log("Stopped listening per command");
          const finalText = transcriptArr.slice(0, -3).join(" ");
          document.getElementById("final").innerHTML = finalText;
        };
      }
    };

    recognition.onerror = (event) => {
      console.log("Error occurred in recognition: " + event.error);
    };
  }

  render() {
    return (
      <div style={container}>
        <p>Click on the red button to initiate speech command</p>
        <button
          id="microphone-btn"
          style={button}
          onClick={this.toggleListen}
        />
        <div id="final" style={final}></div>
      </div>
    );
  }
}

export default Speech;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "bold"  
  },
  button: {
    width: "60px",
    height: "60px",
    background: "red",
    margin: "6em 0 2em 0",
  },
  final: {
    color: "black",
    border: "#ccc 1px solid",
    padding: "1em",
    margin: "1em",
    width: "300px",
  },
};

const { container, button, final } = styles;
