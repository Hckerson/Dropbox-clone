
import Navbar from "../ui/navbar/nav-bar 2.0";
import { Blur } from "@/app/ui/navbar/nav-link 2.0"
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col  box-border w-full">
      <div className="w-full fixed top-0 box-border">
        <Blur/>
        <Navbar/>
      </div>
      <div className="w-full box-border ">{children}</div>
    </div>
  );
}
