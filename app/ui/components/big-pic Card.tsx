import Image from "next/image";
type everyProps = {
  src: string;
  head: string;
  body: string;
};

type everyPropsV1 = {
  src: string;
  head: string;
  body: string;
  bg : string
};
export default function BigPicCard({ src, head, body }: everyProps) {
  return (
    <div className="box-border w-full h-full md:px-3 lg:px-6">
      <div
        style={{
          gridAutoFlow: "row",
          gridTemplateRows: "max-content",
        }}
        className="box-border grid overflow-hidden h-full items-start p-0 m-0 gap-y-4"
      >
        <div
          style={{ backgroundColor: "#eee9e2" }}
          className="overflow-hidden box-border p-8 "
        >
          <div
            style={{ aspectRatio: 1 }}
            className="w-full relative box-border"
          >
            <div className="w-full max-w-full max-h-full absolute inset-0 box-border flex items-center">
              <Image
                src={src}
                alt="picture"
                width={800}
                height={800} // Adjust this as needed
                className="h-full w-full absolute inset-0 box-border max-h-full max-w-full"
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="box-border grid gap-y-4">
          <div className="text-xl font-semibold">{head}</div>
          <div className="font-light  text-lg  ">{body}</div>
        </div>
      </div>
    </div>
  );
}


export  function BigPicCardV1({ src, head, body, bg="#eee9e2"}: everyPropsV1) {
  return (
    <div className="box-border w-full h-full md:px-3 lg:px-6">
      <div
        style={{
          gridAutoFlow: "row",
          gridTemplateRows: "max-content",
        }}
        className="box-border grid overflow-hidden h-full items-start p-0 m-0 gap-y-4"
      >
        <div
          style={{ backgroundColor: bg }}
          className="overflow-hidden box-border"
        >
          <div
            style={{ aspectRatio: 1 }}
            className="w-full relative box-border"
          >
            <div className="w-full max-w-full max-h-full absolute inset-0 box-border flex items-center">
              <Image
                src={src}
                alt="picture"
                width={800}
                height={800} // Adjust this as needed
                className="h-full w-full absolute inset-0 box-border max-h-full max-w-full"
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="box-border grid gap-y-4 text-white">
          <div className="text-lg font-semibold">{head}</div>
          <div className="font-light ">{body}</div>
        </div>
      </div>
    </div>
  );
}
