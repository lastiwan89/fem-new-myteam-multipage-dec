"use client";

import { useRouter } from "next/navigation";

export default function Button({ type }: { type: string }) {
  const router = useRouter();
  return (
    <button
      className={`${type} border-2 text-fs-h3-18 font-semibold leading-lh-18 px-8 py-2 rounded-full`}
      onClick={() => router.push("/contact")}
    >
      contact us
    </button>
  );
}
