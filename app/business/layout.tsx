import Footer from "../ui/landing-page/footer";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex  flex-col min-h-screen box-border ">
      {children}
      <footer className="w-full box-border">
        <Footer />
      </footer>
    </div>
  );
}
