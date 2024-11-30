import Navbar from "@/app/ui/navbar/nav-bar 2.0";
import { Blur } from "@/app/ui/navbar/nav-link 2.0";
import PlanCard from "@/app/ui/components/planCard";
import Compare from "@/app/ui/components/compare";
import Plans from "./plans";
import { ExpressionV10 } from "@/app/ui/components/expression";
import Footer from "@/app/ui/landing-page/footer";
import { golos } from "@/app/ui/fonts";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Find your Dropbox plan | get a 30-days free trial",
};

const planCards = [
  {
    id: 1,
    head: "Basic",
    sub: "Free",
    detail: "2 GB to store and share your files",
    link: "/en-GB/register",
    bName: "Get Basic",
  },
  {
    id: 2,
    head: "Enterprise",
    sub: "Contact us for pricing",
    detail:
      "Customise to your business with enterprise-grade security, integrations with best-in-class security solutions and live support from dedicated experts",
    link: "/en-GB/register",
    bName: "Contact us",
  },
];

export default function page() {
  return (
    <main className="box-border w-full ">
      <Blur />
      <div className="w-full box-border z-50 fixed top-0">
        <Navbar condition={false} />
      </div>
      <div className="w-full box-border  mt-12 md:mt-20 grid"></div>
      <div className="w-full box-border py-14 ">
        <ExpressionV10 />
      </div>
      <div
        id="dropbox-backup-plan"
        className="w-full box-border flex flex-col items-center"
      >
        <Plans />
      </div>
      <div className="box-border w-full ">
        <div className="w-full flex flex-col items-center box-border">
          <div
            style={{ flexGrow: 1 }}
            className="xl:max-w-[1350px]  box-border flex flex-col items-center gap-y-20 w-full mx-auto py-20"
          >
            <div
              className="grid box-border w-full px-6 md:px-10 md:gap-y-0 gap-y-14 xl:px-0"
              id="planCard"
            >
              {planCards.map((plan) => {
                return <PlanCard key={plan.id} {...plan} />;
              })}
            </div>
            <h2
            style={{
              maxWidth: "35ch",
              lineHeight: "1.2",
              textAlign: "center",
            }}
            className={`text-center p-0 mx-4 font-medium text-xl tracking-wide md:text-4xl box-border hyphens-manual ${golos.className}`}
          >
            How easy closing the deal can be with Dropbox
          </h2>
            <div className="w-full box-border px-12">
              <Compare />
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full box-border">
        <Footer />
      </footer>
    </main>
  );
}
