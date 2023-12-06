import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";

type HomeLayoutProps = {
  children: ReactNode;
};

const HomeLayout = async ({ children }: HomeLayoutProps) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  }
  return (
    <div>{children}</div>
  );
};

export default HomeLayout;
