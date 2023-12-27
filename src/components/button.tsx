"use client";

import { useRouter } from "next/navigation";

export default function Button({ type }: { type: string }) {
  const router = useRouter();
  return (
    <button
      className={`${type} text-fs-h3-18 rounded-full border-2 px-8 py-2 font-semibold leading-lh-18`}
      onClick={() => router.push("/contact")}
    >
      contact us
    </button>
  );
}
