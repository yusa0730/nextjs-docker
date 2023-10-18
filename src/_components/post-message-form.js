"use client";

import styles from "./post-message-form.module.css";

export function PostMessageForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const message = formData.get("message");
    const res = await fetch("/api/message", {
      method: "POST",
      body: JSON.stringify({ message }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status !== 200) {
      return alert(`Post Message Failed!`);
    } else {
      const data = await res.json();
      return alert(data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" name="message" />
      </div>
      <button type="submit" className={styles.button}>
        Post Message
      </button>
    </form>
  );
}
