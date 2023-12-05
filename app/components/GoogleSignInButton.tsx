"use client";
import GoogleIcon from "../../public/google.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const GoogleSignInButton = () => {
  return (
    <Button variant="outline" size="icon">
      <Image src={GoogleIcon} alt="Google Icon" className="w-6 h-6" />
    </Button>
  );
};

export default GoogleSignInButton;
