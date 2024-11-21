import Navbar from "./ui/navbar/nav-bar";
import About from "./ui/landing-page/about";
import Dropbox from "./ui/landing-page/dropbox";
import CustomLetter from "./ui/landing-page/customized-lettering";
import Content from "./ui/landing-page/content";
import Document from "./ui/landing-page/document";
import Faster from "./ui/landing-page/faster";
import Container from "./ui/landing-page/container";
import Aspect from "./ui/landing-page/aspect";
import Discovery from "./ui/landing-page/discovery";
import Footer from "./ui/landing-page/footer";
import { Blur } from "./ui/navbar/nav-link";
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Dropbox.com',
}
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      <Blur />
      <div className="w-full fixed top-0 z-50">
        <Navbar />
      </div>
      <div className="w-full     items-center">
        <About />
      </div>
      <div style={{ backgroundColor: "#f7f5f2", zIndex: 1 }} className="flex ">
        <Dropbox />
      </div>
      <div className="w-full h-auto">
        <CustomLetter />
      </div>
      <div className="w-full flex flex-col z-10 lg:-translate-y-[275px] bg-white">
        <div className="box-border flex ">
          <Content />
        </div>
        <div className="box-border flex  ">
          <Document />
        </div>
        <div className="box-border flex  ">
          <Faster />
        </div>
      </div>
      <div className="w-full  border-box lg:px-10 ">
        <Container />
      </div>
      <div className="w-full box-border  h-full my-20">
        <Aspect />
      </div>
      <div className="w-full  box-border">
        <Discovery />
      </div>
      <footer className="w-full box-border">
        <Footer />
      </footer>
    </main>
  );
}
