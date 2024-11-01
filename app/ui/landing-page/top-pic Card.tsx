import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"
type list = {
  src : string;
  note : string;
  about : string;
  href : string
}
export default function TopCardPic({src, about, note, href}:list){
  return(
    <div
    className={clsx('relative box-border transition-all duration-500')}
  >
    <div className=" xs:min-w-[293px] xs:w-full  w-[230px] h-full box-border">
      <div style={{gridAutoFlow : 'row', gridTemplateRows : 'max-content', backgroundColor : '#fff'}} className="rounded-2xl select-none overflow-hidden p-0 m-0 justify-stretch h-full grid items-start box-border">
        <div className="rounded-lg m-2 overflow-hidden box-border">
          <div
            style={{ aspectRatio: 2.2 }}
            className="w-full relative flex box-border"
          >
            <div className="w-full absolute inset-0 flex items-center box-border max-h-full max-w-full">
              <Image
                src={src}
                alt="girl"
                width={662}
                height={300} // Adjust this as needed
                className="h-full w-full absolute inset-0 box-border max-h-full max-w-full"
                quality={100}
              />
            </div>
          </div>
        </div>
        <div className="px-6 pb-8 pt-2 h-full  box-border">
          <div className="flex h-full flex-col justify-between box-border">
            <div
              style={{
                gridAutoFlow: "row",
                gridTemplateRows: "max-content",
              }}
              className="gap-y-3 m-0 p-0 grid justify-stretch box-border"
            >
              <div
                style={{
                  overflowWrap: "anywhere",
                  color: "rgba(82,74,62,.82)",
                  lineHeight: "300%",
                }}
                className="m-0 p-0 font-bold  hyphens-manual box-border text-xs "
              >
                Article
              </div>
              <p
                style={{ overflowWrap: "anywhere" }}
                className=" font-semibold text-lg hyphens-manual leading-5"
              >
                {about}
              </p>
              <p
                style={{
                  overflowWrap: "anywhere",
                  color: "rgba(82,74,62,.82)",
                }}
                className=" text-stone-600  hyphens-manual text-sm font-normal "
              >
                {note}{" "}
              </p>
            </div>
            <div className="mt-6">
              <Link href={href}>
                Read Article
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}