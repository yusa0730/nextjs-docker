"use client";

import styles from "./page.module.css";

export function CallSampleAPIButton() {
  const callSampleApi = async () => {
    const response = await fetch("/api/sample");
    const data = await response.json();
    console.log(data);
  };

  return (
    <button className={styles.callApiButton} onClick={() => callSampleApi()}>
      Call API
    </button>
  );
}
