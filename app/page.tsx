import Navbar from "./ui/navbar/nav-bar";
import About from "./ui/landing-page/about";
import { VideoLeft, VideoRight } from "./ui/landing-page/video";

export default function Page() {
  return (
    <main className="min-h-screen ">
      <div className="fixed w-full top-0">
        <Navbar />
        <About />
      </div>
      <div className="flex justify-between mt-[620px]">
        <VideoLeft/>
        <VideoRight/>
      </div>
    </main>
  );
}
