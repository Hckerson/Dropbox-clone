import Security from "./security";
import Image from "next/image";
import Cards from "./cards";
import Carousels from "./carousels";

const cards = [
  {
    id: 1,
    about: "“The security of knowing our information is safe.” ",
    note: "Customer Bryan Chandler reveals how his team uses Dropbox to organize and share file successfully",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/interview-cards/BrianThumb.png?id=ad81b907-369a-439e-b7f7-1c52d1061618&output_type=png",
  },
  {
    id: 2,
    about: "“Seriously impressive security features.” ",
    note: "Tech influencer Justin Tse discuss why he trusts Dropbox to keep his content safe",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/interview-cards/JustinThumb.png?id=9e7c8793-8282-4398-a9d0-b1f1a803f10a&output_type=png",
  },
  {
    id: 3,
    about: "“How to enhance security and keep productivity reasonable” ",
    note: "Your company is sharing contents with collaborators all over the world. Are you in control?",
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/interview-cards/SecurityThumb.png?id=9b20ffce-4e40-4d57-9ac1-6173cb71473e&output_type=png",
  },
];

export default function Container() {
  return (
    <main className="relative  w-full flex flex-col box-border">
      <div className="box-border h-full py-28">
        <div
          className="absolute top-0 left-0 flex flex-col items-center w-full h-full lg:rounded-3xl"
          style={{
            backgroundImage: "linear-gradient(180deg, #292c31, #000)",
            zIndex: -1,
          }}
        ></div>
        <div className="relative px-6 md:px-8 w-full   flex flex-col items-center space-y-20 box-border">
          <Security />
          <div className="w-full h-[550px] relative box-border  ">
            <div className="w-full absolute h-full hidden lg:block box-border">
              <div
                style={{ aspectRatio: 0.79, willChange: "transform" }}
                id="spring"
                className="w-[206px] origin-top-right delay-100 absolute top-[244px] h-auto flex items-center max-h-full max-w-full box-border"
              >
                <Image
                  src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-1.png?id=a9586e97-cdca-47f1-84f6-8e1b8492c225&output_type=png"
                  alt="girl"
                  width={618}
                  height={786} // Adjust this as needed
                  quality={80}
                  className="object-cover  absolute h-full inset-0 box-border max-h-full max-w-full"
                />
              </div>
              <div
                style={{ aspectRatio: 0.97, willChange: "transform" }}
                id="smooth"
                className="w-[162px] origin-bottom-right delay-75 absolute top-[124px] h-auto flex items-center max-h-full max-w-full box-border"
              >
                <Image
                  src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-2.png?id=c2b49cbb-0530-4d59-83b0-a04e82bb6cd4&output_type=png"
                  alt="girl"
                  width={486}
                  height={501} // Adjust this as needed
                  quality={80}
                  className="object-cover  absolute h-full inset-0 box-border max-h-full max-w-full"
                />
              </div>
              <div
                style={{ aspectRatio: 0.79, willChange: "transform" }}
                id="dice"
                className="w-[374px] origin-left delay-75 absolute top-6 h-auto flex items-center max-h-full max-w-full box-border"
              >
                <Image
                  src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-3.png?id=add2f4d9-c3c9-4e43-ad3b-9dfbba483c43&output_type=png"
                  alt="girl"
                  width={1026}
                  height={1296} // Adjust this as needed
                  quality={80}
                  className="object-cover  absolute h-full inset-0 box-border max-h-full max-w-full"
                />
              </div>
            </div>
            <div
              style={{ width: "fit-content" }}
              className="relative max-w-full box-border  "
              id="folder"
            >
              <div
                style={{
                  aspectRatio: 1.24,
                  filter: "drop-shadow(0 16px 32px rgba(0,0,0,.3))",
                }}
                className="w-[595px] max-w-full h-auto flex items-center max-h-full box-border"
              >
                <Image
                  src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/permissions.png?id=89a89ccc-4eb8-4dd9-8cb3-4897f80c7f36&output_type=png"
                  alt="girl"
                  width={1248}
                  height={1010} // Adjust this as needed
                  quality={80}
                  className="object-cover w-full absolute inset-0 max-w-full max-h-full box-border"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col box-border mt-16">
          <div className="w-full box-border">
            <div
              style={{ scrollbarWidth: "none", cursor: "grab" }}
              className="overflow-x-scroll overscroll-x-none select-none box-border"
            >
              <div
                style={{ width: "fit-content", columnGap: 24 }}
                id="scroll"
                className="grid  box-border px-6"
              >
                {cards.map((card) => {
                  return <Cards key={card.id} {...card} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 w-full box-border">
          <div className="w-full box-border">
            <h3 style={{overflowWrap : 'break-word', color : 'hsla(36, 24%, 96%, .6)', lineHeight : '150%', width : 'fit-content'}} className="box-border hyphens-manual text-center text-base font-normal m-auto p-0 px-6">Trusted by the biggest companies in the world</h3>
            <Carousels/>
          </div>
        </div>
      </div>
    </main>
  );
}
