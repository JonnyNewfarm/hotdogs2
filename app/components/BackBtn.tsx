"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackBtn = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.back()} className="underline cursor-pointer">
      Go back
    </div>
  );
};

export default BackBtn;
