"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // const { isLoaded, userId } = useAuth();
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded || !isSignedIn) return null;

  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}
