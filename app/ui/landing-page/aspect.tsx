import Image from "next/image";
import Link from "next/link";
const aspects = [
  {
    href: "",
    id: 1,
    pic: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/construction/construction-hero@2x.jpg?id=dbfc08de-234c-40af-949d-7e176ad7d582&width=1920&output_type=jpg",
    name: "Construction",
    about:
      "with Dropboxs for teams, you can store, access, preview, edit and transfer CAD, BIM, PDF and visual content files form anywhere",
  },
  {
    href: "",
    id: 2,
    pic: " https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/enterprise/creative-tools/The-Luupe-Genya-Oneall.jpg?id=bc0d3114-b68a-41e7-837b-262d86f2d472&output_type=jpg",
    name: "Construction",
    about:
      "with Dropboxs for teams, you can store, access, preview, edit and transfer CAD, BIM, PDF and visual content files form anywhere",
  },
  {
    href: "",
    id: 4,
    pic: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/technology/GettyImages-1139238082.jpg?id=7e97fb44-2356-46b7-8f3d-621a5f98072e&width=3840&output_type=jpg",
    name: "Construction",
    about:
      "with Dropboxs for teams, you can store, access, preview, edit and transfer CAD, BIM, PDF and visual content files form anywhere",
  },
  {
    href: "",
    id: 3,
    pic: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/manufacturing/GettyImages-900253108.jpg?id=560cbf20-b4fc-4ec9-8769-8a5e9ad1b223&width=3840&output_type=jpg",
    name: "Construction",
    about:
      "with Dropboxs for teams, you can store, access, preview, edit and transfer CAD, BIM, PDF and visual content files form anywhere",
  },

  {
    href: "",
    id: 5,
    pic: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/business/solutions/professional-services/etgcNMmB.jpeg?id=e7016484-98bf-4757-acad-25618e33788e&width=3840&output_type=jpg",
    name: "Construction",
    about:
      "with Dropboxs for teams, you can store, access, preview, edit and transfer CAD, BIM, PDF and visual content files form anywhere",
  },
  {
    href: "",
    id: 6,
    pic: " https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/education/education-hero@2x.jpg?id=40129999-5c0d-45fc-800e-134eecfd175e&width=1920&output_type=jpg",
    name: "Construction",
    about:
      "with Dropboxs for teams, you can store, access, preview, edit and transfer CAD, BIM, PDF and visual content files form anywhere",
  },
];

export default function Aspect() {
  return (
    <div className="w-full box-border flex flex-col items-center">
      <div
        style={{ gridAutoFlow: "row", gridTemplateRows: "max-content" }}
        className="xl:max-w-[1100px] box-border lg:gap-y-20  gap-y-12  w-full mx-auto xl:px-0 lg:px-20 lg:py-24 md:px-12 px-6  py-20 grid items-center "
      >
        <h2
          style={{ overflowWrap: "anywhere", lineHeight: "120%" }}
          className="text-center p-0 m-0 font-medium text-3xl box-border hyphens-manual"
        >
          Dropbox empowers accross industries
        </h2>
        <div id="aspect" className="grid gap-6 box-border">
          {aspects.map((aspect) => {
            return (
              <div
                key={aspect.id}
                style={{ backgroundColor: "#f7f5f2" }}
                className="box-border h-full overflow-hidden relative rounded-2xl"
              >
                <div
                  className="p-0 m-0 h-full grid justify-start items-center box-border"
                  id="pic"
                >
                  <div className="md:w-[186px] h-full md:block hidden box-border">
                    <div style={{aspectRatio : 1.7}} className="w-full h-full flex overflow-hidden relative max-h-full max-w-full box-border items-center">
                      <Image
                        src={aspect.pic}
                        alt="girl"
                        width={1920}
                        height={1080} // Adjust this as needed
                        className="h-full object-cover w-full absolute inset-0 max-h-full max-w-full box-border"
                      />
                    </div>
                  </div>
                  <div
                    className="w-full p-6 "
                    style={{ backgroundColor: "#f7f5f2" }}
                  >
                    <div>
                      <div className="w-full text-base font-semibold">
                        {aspect.name}
                      </div>
                      <span>{aspect.about}</span>
                    </div>
                    <>
                      <p className="inline underline underline-offset-2 decoration-1 decoration-stone-300">
                        <Link href={'#'}>Learn more</Link>
                      </p>{" "}
                      <span className="group-hover:translate-x-2 transition-transform ease-in duration-300">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="inline-flex ml-2 transition-transform duration-300 group-hover:translate-x-1"
                          width="24"
                          height="24"
                          role="presentation"
                          focusable="false"
                        >
                          <path
                            d="M5 11.75h12m-5.25-6.5 6.25 6.5-6.25 6.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            vectorEffect="non-scaling-stroke"
                          ></path>
                        </svg>
                      </span>
                    </>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
