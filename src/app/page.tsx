"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [cookie, setCookie] = useState("");
  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.origin === process.env.NEXT_PUBLIC_COOKIE_DOMAIN) {
        const { type, cookie } = event.data;
        if (type === "setCookie") {
          document.cookie = cookie;
          setCookie(cookie.split("=")[1]);
        }
      }
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Cookie: {cookie}</div>
    </main>
  );
}
