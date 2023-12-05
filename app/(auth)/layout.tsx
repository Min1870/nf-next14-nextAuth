import Image from "next/image";
import { ReactNode } from "react";
import BackgroundImage from "../../public/login_background.jpg";
import Logo from "../../public/netflix_logo.svg";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="relative flex  h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        fill
        priority
        src={BackgroundImage}
        alt="Background Image"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
      />
      <Image
        src={Logo}
        alt="Logo"
        width={120}
        height={120}
        priority
        className=" absolute top-4 left-4 object-contain md:left-10 md:top-6"
      />
      {children}
    </div>
  );
};

export default AuthLayout;
