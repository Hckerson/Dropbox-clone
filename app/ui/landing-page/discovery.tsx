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
    <div className="mb-20 ">
      <div className="px-52 py-24">
        <h2 className="text-center text-4xl font-medium block ">
          Discover, learn, thrive with Dropbox
        </h2>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-3 gap-6">
          {articles.map((article) => {
            return (
              <div
                key={article.id}
                className="rounded-2xl overflow-hidden shadow-sm"
                style={{ backgroundColor: "white" }}
              >
                <Link href={article.href} className="">
                  <div className="p-2 shrink-0 ">
                    <Image
                      src={article.src}
                      alt="girl"
                      width={400}
                      height={400} // Adjust this as needed
                      className="h-full object-cover rounded-2xl"
                      quality={100}
                    />
                  </div>
                  <div className="w-full pt-2 p-6">
                    <div className="h-[280px] relative">
                      <div className="leading-9 font-bold text-xs text-stone-600">
                        Article
                      </div>
                      <p className="mt-4 font-bold text-lg leading-5">
                        {article.about}
                      </p>
                      <p className="mt-4 text-stone-600 text-sm font-normal ">
                        {article.note}{" "}
                      </p>
                      <div className="absolute bottom-0 font-semibold underline underline-offset-2 decoration-1">
                        Read Article
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex h-[169px]  items-center justify-center text-blue-700">
        <Link href="/mac ">View more resources</Link>
      </div>
    </div>
  );
}
