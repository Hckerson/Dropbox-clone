import Image from "next/image";
export function ImgLayout() {
  return (
    <div
      style={{ aspectRatio: 1.6 }}
      className="w-auto h-full flex relative items-center max-h-full max-w-full box-border "
    >
      <Image
        src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/hero/all-files-desktop.png?id=75a3b2c3-59ab-45f6-bdaa-fa64bac618e7&width=2880&output_type=png"
        alt="Description"
        width={2880} // The largest image size
        height={1368}
        priority
        className=" shadow-2xl rounded-2xl"
      />
    </div>
  );
}

export function MiniImg() {
  return (
    <div
      style={{ aspectRatio: 0.46, maxHeight: "100%", maxWidth: "100%" }}
      className="w-auto px-10 sm:px-0  flex justify-center h-full relative box-border "
    >
      <Image
        src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/hero/all-files-mobile.png?id=53d5fd1b-a40c-4bea-9cb3-2c5dff1a0903&output_type=png"
        alt="Description"
        width={800} // The largest image size
        height={1600}
        priority
        className="w-full h-full shadow-2xl rounded-b-3xl md:rounded-2xl"
      />
    </div>
  );
}
