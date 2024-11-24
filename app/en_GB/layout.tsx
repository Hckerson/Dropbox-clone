import Navbar from "../ui/navbar/scarceNav";
import { MiniFooter } from "../ui/landing-page/footer";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex  flex-col min-h-screen box-border ">
      <header className="w-full box-border">
        <div className="w-full box-border z-50 fixed top-0">
          <Navbar />
        </div>
      </header>
      {children}
      <footer className="w-full box-border">
        <MiniFooter/>
      </footer>
    </div>
  );
}