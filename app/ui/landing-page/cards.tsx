import Image from "next/image"

type Cardprops = {
  id : number;
  src : string;
  about : string;
  note : string
}

export default function Cards({id, src, about, note} : Cardprops){
  return(
    <div
    style={{ backgroundColor: "#1c1d21", cursor: "pointer" }}
    className="grid items-center rounded-2xl justify-center"
    id="card"
    key={id}
  >
    <div className="overflow-hidden rounded-lg w-full box-border relative">
      <div
        style={{ backgroundColor: "#1e1919" }}
        className="w-full flex max-h-full max-w-full box-border"
      >
        <div className="w-full relative flex box-border">
          <div className="static w-full flex items-center max-h-full max-w-full box-border">
            <div
              style={{ aspectRatio: 1, overflow: "unset" }}
              className="w-full h-full flex relative items-center max-h-full max-w-full box-border"
            >
              <Image
                src={src}
                alt="girl"
                width={500}
                height={500} // Adjust this as needed
                quality={80}
                className="object-cover w-full h-full absolute inset-0 max-w-full max-h-full box-border"
              />
            </div>
          </div>
        </div>
      </div>
      <span
        style={{ color: "#f7f5f2" }}
        className="absolute left-1 bottom-1 inline-block size-8 box-border"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="dig-UIIcon"
          width="32"
          height="32"
          role="presentation"
          focusable="false"
        >
          <path
            d="M12 4c-5.159 0-8 2.841-8 8s2.841 8 8 8 8-2.841 8-8-2.841-8-8-8Zm-2 11.5v-7l5.5 3.5-5.5 3.5Z"
            fill="currentColor"
            vectorEffect="non-scaling-stroke"
          ></path>
        </svg>
      </span>
    </div>
    <div className="md:pt-0 md:pb-1 pb-6  pt-2 px-6 flex flex-col h-full justify-start box-border">
      <span
        style={{
          color: "#cd2f7b",
          lineHeight: "120%",
          overflowWrap: "break-word",
        }}
        className="p-0 mb-6  md:mt-3 mt-6 font-bold not-italic text-xs bg-transparent hyphens-manual"
      >
        {" "}
        Testimonial
      </span>
      <h3
        style={{
          lineHeight: "120%",
          color: "#f7f5f2",
          overflowWrap: "break-word",
        }}
        className="text-lg p-0 m-0 not-italic font-medium lg:text-2xl hyphens-manual box-border"
      >
        {about}
      </h3>
      <p
        style={{
          lineHeight: "150%",
          color: "#f7f5f2",
          overflowWrap: "break-word",
        }}
        className="box-border p-0 m-0 mt-2 md:mb-2 mb-6 font-normal text-sm hyphens-manual"
      >
        {note}
      </p>
      <button
        style={{
          width: "fit-content",
          color: "#f7f5f2",
          appearance: "none",
          cursor: "pointer",
          textDecoration: "none",
        }}
        className="text-left mt-auto mb-2 p-0 inline-block border-none bg-transparent border-0 box-border"
      >
        <div
          style={{
            textDecorationColor: "hsla(36, 24%, 96%, .6)",
          }}
          className="m-0 p-0   w-full relative box-border"
        >
          <span
            style={{ lineHeight: "120%" }}
            className="p-0 m-0 font-medium not-italic  text-base hyphens-manual box-border decoration-1  underline-offset-2 decoration-stone-500 hover:decoration-white underline"
          >
            Watch testimonial
          </span>
        </div>
      </button>
    </div>
  </div>
  )
}