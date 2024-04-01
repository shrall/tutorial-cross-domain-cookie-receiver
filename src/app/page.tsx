"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Home() {
  const [cookie, setCookie] = useState("");
  useEffect(() => {
    const tokenValue = Cookies.get("token");
    if (tokenValue) setCookie(tokenValue);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Cookie: {cookie}</div>
    </main>
  );
}
