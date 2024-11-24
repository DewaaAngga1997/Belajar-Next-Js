"use client";
import { useFormStatus } from "react-dom";

export default function MealButtonSubmit() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Sharing..." : "Share Image"}
    </button>
  );
}
