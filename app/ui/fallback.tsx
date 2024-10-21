import Image from "next/image";
export function LeftImgFallback() {
  return (
    <>
      <div className="image-container">
        <Image
          src="/left-fallback.png" // The base image URL
          alt="Description"
          width={1920} // The largest image size
          height={1080}
          sizes="(min-width: 1920px) 37vw, (min-width: 1440px) 32vw, (min-width: 1280px) 25vw, 100vw"
          priority // Optional: loads the image quickly, used for critical images
          className="your-classes"
        />
      </div>
    </>
  );
}
