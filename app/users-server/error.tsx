"use client";

import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <div className="bg-orange-500">Error fetching users data</div>;
}
