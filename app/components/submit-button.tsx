"use client";

import classNames from "classnames";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={classNames(
        "text-white",
        pending ? "bg-gray-300" : "bg-blue-500"
      )}
      disabled={pending}
    >
      {pending ? "loading..." : text}
    </button>
  );
}
