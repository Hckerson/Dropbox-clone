import Image from "next/image";
export default function Frame({src}: {src : string}) {
  return (
    <div style={{aspectRatio : 16/9, overflow: 'unset'}} className=" relative h-auto max-w-[1000px] max-h-full w-full min-w-0  box-border ">
      <div
        style={{
          aspectRatio: 16 / 9,
        }}
        className="w-full h-auto  flex relative items-center max-h-full max-w-full box-border"
      >
        <Image
          src={src}
          alt="picture"
          width={2880}
          height={1368} // Adjust this as needed
          quality={80}
          className="object-contain w-full absolute inset-0 h-full scale-90 "
        />
      </div>
    </div>
  );
}
