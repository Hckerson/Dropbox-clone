export function VideoLeft() {
  return (
    <div style={{gridTemplateRows : '100%', gridTemplateColumns : '100%', aspectRatio : 16/9}} className="relative z-10 w-full h-full grid box-border ">
      <video

        muted
        autoPlay
        loop
        playsInline // Ensures the video covers the container appropriately
        className=" h-[400px] object-cover overflow-hidden box-border w-full z-10 "
        style={{aspectRatio : 16 /9, gridColumn : 1, gridRow : 1}}
      >
        <source
          src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/test/homepageredesign2024/hero/GettyImages-1423693942_compressed.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export function VideoRight() {
  return (
    <div style={{gridTemplateRows : '100%', gridTemplateColumns : '100%', aspectRatio : 16/9}} className="relative z-10 w-full h-full grid box-border ">
      <video

        muted
        autoPlay
        loop
        playsInline // Ensures the video covers the container appropriately
        className="h-[400px] object-cover overflow-hidden box-border w-full z-10"
      >
        <source
          src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/test/homepageredesign2024/hero/GettyImages-1316864226_compressed.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
