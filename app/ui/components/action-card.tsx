import clsx from "clsx";
import Link from "next/link";
import { App } from "./vgs";
interface Card {
  first: boolean;
  name: string;
  children: React.ReactNode;
}
export default function ActionCard({ first, name, children }: Card) {
  return (
    <div
      className={clsx(
        "w-[135px] p-3 flex flex-col space-y-3 border-[1px] border-white border-opacity-20 items-start rounded-xl box-border",
        first && "bg-white"
      )}
    >
      <span className="inline-flex">{children}</span>
      <p className={clsx("text-sm font-semibold", first && "text-black")}>
        {name}
      </p>
    </div>
  );
}

export function OneCard() {
  return (
    <div style={{gridArea : '1 / 4 / 2 / 5'}} className="box-border ">
      <Link
        href={"https://www.dropbox.com/install"}
        className={clsx(
          "w-[135px] p-3 flex flex-col space-y-3 border-[1px] border-white border-opacity-20 items-start rounded-lg box-border"
        )}
      >
        <span className="inline-flex">
          <App />
        </span>
        <p className={clsx("text-sm font-semibold")}>Get the app</p>
      </Link>
    </div>
  );
}
