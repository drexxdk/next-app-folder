"use client";

import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <div>
      <h1>About</h1>
      <button
        onClick={() => router.push("/")}
        className="text-blue-500 bg-gray-100"
      >
        Go home
      </button>
    </div>
  );
}
