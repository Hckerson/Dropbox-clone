import Image from "next/image";
export  function ImgLayout() {
  return (
    <Image
      src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/hero/all-files-desktop.png?id=75a3b2c3-59ab-45f6-bdaa-fa64bac618e7&width=2880&output_type=png"
      alt="Description"
      width={900} // The largest image size
      height={800}
      className="-translate-y-7 h-[480px] w-auto shadow-2xl rounded-2xl"
      priority
    />
  );
}


export  function MiniImg() {
  return (
    <Image
      src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/hero/all-files-mobile.png?id=53d5fd1b-a40c-4bea-9cb3-2c5dff1a0903&output_type=png"
      alt="Description"
      width={200} // The largest image size
      height={800}
      className=" h-[420px] w-auto rounded-2xl shadow-2xl"
    />
  );
}
