import Navbar from "./ui/navbar/nav-bar";
import About from "./ui/landing-page/about";

export default function Page() {
  return (
    <main className="min-h-screen ">
      <Navbar/>
      <About/>
    </main>
  );
}
