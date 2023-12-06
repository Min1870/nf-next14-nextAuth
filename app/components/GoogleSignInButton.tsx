"use client";
import GoogleIcon from "../../public/google.svg";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";

const GoogleSignInButton = () => {
  return (
    <Button onClick={() => signIn("google")} variant="outline" size="icon">
      <Image src={GoogleIcon} alt="Google Icon" className="w-6 h-6" />
    </Button>
  );
};

export default GoogleSignInButton;
