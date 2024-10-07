export function VideoLeft() {
  return (
    <div className="relative z-20">
      <video

        muted
        autoPlay
        loop
        playsInline
        style={{ objectFit: "cover" }} // Ensures the video covers the container appropriately
        className="w-[380px] h-[400px]"
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
    <div className="relative z-20">
      <video

        muted
        autoPlay
        loop
        playsInline
        style={{ objectFit: "cover" }} // Ensures the video covers the container appropriately
        className="w-[380px] h-[400px]"
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
