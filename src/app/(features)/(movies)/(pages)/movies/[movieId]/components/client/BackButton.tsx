"use client";

import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  const redirectBack = () => {
    router.push('/movies');
  }
  return (
   <button onClick={redirectBack}>Back</button>
  );
}

export default BackButton;
