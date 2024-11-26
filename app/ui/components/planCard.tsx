import Link from "next/link";
type everyProps = {
  id: number;
  head: string;
  sub: string;
  detail: string;
  link: string;
  bName: string;
};
export default function PlanCard({
  head,
  sub,
  link,
  detail,
  bName,
}: everyProps) {
  return (
    <div className="box-border w-full h-full md:px-3  ">
      <div
        style={{
          gridAutoFlow: "row",
          gridTemplateRows: "max-content",
        }}
        className="rounded-2xl bg-[#f7f5f2] select-none overflow-hidden p-0 m-0 justify-stretch h-full grid items-start box-border"
      >
        <div className=" p-6 md:p-8 md:pb-0 w-full flex flex-col h-full space-y-4">
          <legend className="font-semibold text-3xl ">{head}</legend>
          <span className="text-stone-500 font-semibold">{sub}</span>
          <p className="font-light text-sm text-stone-800">{detail}</p>
        </div>
        <div className="w-full h-full flex items-end px-6 py-6 md:px-8 md:py-8 relative">
          <div className="rounded-2xl   space-x-3">
            <Link
              href={link}
              className=" rounded-xl w-full px-5 py-2 ring-1 ring-black text-black hover:bg-stone-200  group flex justify-between font-semibold "
            >
              {bName}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
