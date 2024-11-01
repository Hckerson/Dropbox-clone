import Image from "next/image";
import Link from "next/link";
type everyProps = {
  src: string;
  head: string;
  body: string;
  link: string;
  name: string;
};
export default function BigTopPicCard({
  src,
  head,
  body,
  link,
  name,
}: everyProps) {
  return (
    <div className="box-border w-full h-full md:px-3">
      <div
        style={{
          gridAutoFlow: "row",
          gridTemplateRows: "max-content",
        }}
        className="box-border grid overflow-hidden h-full items-start p-0 m-0 "
      >
        <div
          style={{ backgroundColor: "#eee9e2" }}
          className="overflow-hidden box-border  "
        >
          <div
            style={{ aspectRatio: 3 }}
            className="w-full relative box-border"
          >
            <div className="w-full max-w-full max-h-full absolute inset-0 box-border flex items-center">
              <Image
                src={src}
                alt="picture"
                width={1272}
                height={424} // Adjust this as needed
                className="h-full w-full absolute inset-0 box-border max-h-full max-w-full"
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="box-border grid gap-y-8 bg-white p-12 ">
          <div className="text-2xl font-medium">{head}</div>
          <div className="font-normal text-stone-700 text-base ">{body}</div>
          <div
            style={{ width: "fit-content", backgroundColor : '#0061fe' }}
            className="rounded-2xl py-4 px-5 group flex space-x-3"
          >
            <Link href={link}></Link>
            <p className="text-white text-lg font-medium">{name}</p>
            <span className="group-hover:translate-x-1 transition-transform ease-in duration-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="inline-flex transition-transform duration-300 "
                width="24"
                height="24"
                role="presentation"
                focusable="false"
              >
                <path
                  d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  vectorEffect="non-scaling-stroke"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
