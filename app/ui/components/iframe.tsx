import { golos } from "../fonts";

export default function IFrame({src}: {src: string}) {
  return (
    <div className="box-border w-full ">
      <div className="w-full flex flex-col items-center box-border">
        <div
          style={{ flexGrow: 1 }}
          className="  box-border flex flex-col items-center gap-y-20 w-full mx-auto pt-20"
        >
          <h2
            style={{ overflowWrap: "anywhere", lineHeight: "120%" }}
            className={`text-center p-0 mx-4 font-medium text-3xl md:text-4xl box-border hyphens-manual ${golos.className}`}
          >
            Expedia travels with Dropbox
          </h2>
          <section className="w-full ">
            <div
              style={{ aspectRatio: 16 / 9 }}
              className="flex lg:px-12 md:px-6 px-4 box-border w-full h-auto flex-col items-center "
            >
              <iframe src={src} className="h-full w-full"></iframe>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
