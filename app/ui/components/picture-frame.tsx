import Image from "next/image";
export default function Frame() {
  return (
    <div style={{aspectRatio : 1.83, overflow: 'unset'}} className="xl:max-w-[1000px]    flex items-center box-border max-w-full ">
      <div
        style={{
          aspectRatio: 16 / 9,
        }}
        className="w-full h-auto flex relative items-center max-h-full max-w-full box-border"
      >
        <Image
          src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/fss-all-files-share-ui-transparent-1440x1440.png?id=5d004402-c723-4de8-9db1-ab3025f77446&output_type=png"
          alt="girl"
          width={2000}
          height={1440} // Adjust this as needed
          quality={80}
          className="object-contain w-full absolute inset-0 h-full"
        />
      </div>
    </div>
  );
}
