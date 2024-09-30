import Navbar from "./ui/navbar/nav-bar";
import About from "./ui/landing-page/about";
import { VideoLeft, VideoRight } from "./ui/landing-page/video";

export default function Page() {
  return (
    <main className="min-h-screen ">
      <div className="fixed w-full top-0 bg-black">
        <Navbar />
        <About />
      </div>
      <div className="mt-[590px] w-full">
        <div className="flex justify-between">
          <VideoLeft/>
          <VideoRight/>
        </div>
      </div>
    </main>
  );
}
