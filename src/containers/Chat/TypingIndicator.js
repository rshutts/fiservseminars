import React, { useState } from "react";
import { concat, after, useListener } from "polyrhythm-react";

export const TypingIndicator = ({ timeout = 5000 }) => {
  const [isTyping, setTyping] = useState(false);

  const autoTimeoutTyper = () =>
    concat(
      after(0, () => setTyping(true)),
      after(timeout, () => setTyping(false))
    );

  //prettier-ignore
  useListener(
    /message\/edit\/(?!me)/,
    autoTimeoutTyper,
    { mode: "replace" } // See https://deanius.github.io/polyrhythm/#concurrency-modes---declarative-timing-control
  );
  useListener(/message\/from/, () => setTyping(false));

  return (
    isTyping && (
      <div className="chat-message__typing">
        <img
          alt="typing..."
          src="https://osxtips.net/wp-content/uploads/imessage-sending-animated-gif.gif"
        />
      </div>
    )
  );
};