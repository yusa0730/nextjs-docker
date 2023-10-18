"use client";

import { useState } from "react";
import styles from "./get-latest-message-button.module.css";

export function GetLatestMessageButton() {
  const [message, setMessage] = useState("");
  const getLatestMessage = async () => {
    const response = await fetch(`/api/message`);
    const data = await response.json();

    if (response.status !== 200) {
      return setMessage(`Error: ${data.message}`);
    } else {
      setMessage(data.message);
    }
  };

  return (
    <>
      <button className={styles.button} onClick={() => getLatestMessage()}>
        Get latest message
      </button>
      <div>
        <p>Recept Message:{message}</p>
      </div>
    </>
  );
}
