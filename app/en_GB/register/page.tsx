import type { Metadata } from "next";
import { MiniFooter } from "@/app/ui/landing-page/footer";
import AuthForm from "@/app/ui/components/auth_Form";
export const metadata: Metadata = {
  title: "Dropbox - Register",
};
export default function page() {
  return (
    <main className="box-border w-full ">
      <div className="w-full box-border  items-center  justify-center py-20  mt-12 md:mt-20 flex">
        <div className="w-[350px] text-center px-4">
          <AuthForm type="register"/>
        </div>
      </div>
      <footer className="w-full box-border">
        <MiniFooter />
      </footer>
    </main>
  );
}
