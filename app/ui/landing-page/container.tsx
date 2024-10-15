import Security from "./security";
import Image from "next/image";
export default function Container() {

  return (
    <main className="relative h-[1804px] w-full flex flex-col">
      <div
        className="absolute top-0 left-0 flex flex-col items-center w-full h-full rounded-3xl"
        style={{
          backgroundImage: "linear-gradient(180deg, #292c31, #000)",
          zIndex: -1,
        }}
      ></div>
      <div className="relative z-10 w-full mt-28 flex flex-col items-center space-y-24">
        <Security />
        <div className="max-w-7xl h-[550px] w-[1280px] ">
          <Image
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-3.png?id=add2f4d9-c3c9-4e43-ad3b-9dfbba483c43&output_type=png"
            alt="girl"
            width={540}
            height={450} // Adjust this as needed
            quality={80}
            className="absolute  top-[130px]"
          />
          <Image
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-2.png?id=c2b49cbb-0530-4d59-83b0-a04e82bb6cd4&output_type=png"
            alt="girl"
            width={540}
            height={450} // Adjust this as needed
            quality={80}
            className="absolute right-0 top-[130px]"
          />
          <Image
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/security-left-1.png?id=a9586e97-cdca-47f1-84f6-8e1b8492c225&output_type=png"
            alt="girl"
            width={540}
            height={450} // Adjust this as needed
            quality={80}
            className="absolute right-0 top-[130px]"
          />
          <Image
            src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/security/hero/permissions.png?id=89a89ccc-4eb8-4dd9-8cb3-4897f80c7f36&output_type=png"
            alt="girl"
            width={540}
            height={450} // Adjust this as needed
            quality={80}
            className="absolute right-0 top-[130px]"
          />
        </div>
        <div className="w-full pl-[300px]">

        </div>
      </div>
    </main>
  );
}
