import Image from "next/image";
import Link from "next/link";
const articles = [
  {
    id: 1,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/blog-cards/Asset-Distraction-Article.png?id=13349693-d080-4ae6-8498-7b58b46dfeb9&output_type=png",
    href: "https://blog.dropbox.com/topics/work-culture/economist-impact-cost-of-lost-focus-research-study-2023",
    about:
      "Study: here is how many hours we lose to distraction—and how to get our focus back",
    note: "For our study, Economist Impact included knowledge workers globally—and found that, no matter where people work, there’s a significant cost to lost focus around the world.",
  },
  {
    id: 2,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/blog-cards/Asset-McLaren-Article.png?id=eb21f94b-ce63-462f-928a-e30761ba9321&output_type=png",
    href: "https://www.dropbox.com/mclaren-f1",
    about:
      "Dropbox teams up with McLaren Racing as an Official Technology Partner of McLaren Formula 1 Team",
    note: "Dropbox brings simplified sharing, collaboration, and organization to the McLaren Formula 1 Team.",
  },
  {
    id: 3,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/blog-cards/Asset-Photo-Sharing-Article.png?id=3d76b7bb-6145-4f8d-87cf-d156eff5de2d&output_type=png",
    href: "https://experience.dropbox.com/get-organized/best-way-to-share-photos",
    about: "The best way to share photos with family and friends",
    note: "Don’t lose precious photos. Save them and share them with loved ones—for free. Here’s an easy-to-follow guide to sharing and storing photos with Dropbox.",
  },
];
export default function Discovery() {
  return (
    <div
      style={{ backgroundColor: "#f7f5f2" }}
      className="box-border w-full py-20"
    >
      <div className="w-full flex items-center flex-col box-border">
        <div
          style={{ flexGrow: 1 }}
          className="xl:max-w-[1100px] box-border gap-y-20 flex flex-col   w-full mx-auto  py-20  items-center"
        >
          <h2
            style={{ overflowWrap: "anywhere", lineHeight: "120%" }}
            className="text-center p-0 m-0 font-medium text-3xl box-border hyphens-manual"
          >
            Discover, learn, thrive with Dropbox
          </h2>
          <div className="w-full box-border">
            <div
              style={{ scrollbarWidth: "none"}}
              className="overflow-x-scroll overscroll-x-none select-none box-border"
            >
              <div
                id="discovery"
                style={{ width: "fit-content" }}
                className=" gap-x-6 box-border    xl:px-0 lg:px-20  md:px-12 px-6   grid "
              >
                {articles.map((article) => {
                  return (
                    <div
                      key={article.id}
                      className=" relative box-border"
                    >
                      <div className="lg:w-full xs:min-w-[293px] xs:w-full  w-[230px] h-full box-border">
                        <div style={{gridAutoFlow : 'row', gridTemplateRows : 'max-content', backgroundColor : '#fff'}} className="rounded-2xl select-none overflow-hidden p-0 m-0 justify-stretch h-full grid items-start box-border">
                          <div className="rounded-lg m-2 overflow-hidden box-border">
                            <div
                              style={{ aspectRatio: 2.2 }}
                              className="w-full relative flex box-border"
                            >
                              <div className="w-full absolute inset-0 flex items-center box-border max-h-full max-w-full">
                                <Image
                                  src={article.src}
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
                                  {article.about}
                                </p>
                                <p
                                  style={{
                                    overflowWrap: "anywhere",
                                    color: "rgba(82,74,62,.82)",
                                  }}
                                  className=" text-stone-600  hyphens-manual text-sm font-normal "
                                >
                                  {article.note}{" "}
                                </p>
                              </div>
                              <div className="mt-6">
                                <Link href={'#'}>
                                  Read Article
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex h-[169px]  items-center justify-center text-blue-700">
            <Link href="/mac ">View more resources</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
