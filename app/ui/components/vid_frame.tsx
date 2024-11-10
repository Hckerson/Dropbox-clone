export default function Frame() {
  return (
    <div
      style={{ aspectRatio: 16 / 9, overflow: "unset" }}
      className=" relative h-auto max-w-[1000px] max-h-full w-full min-w-0  box-border "
    >
      <div
        style={{
          aspectRatio: 16 / 9,
        }}
        className="w-full h-auto  flex relative items-center max-h-full max-w-full box-border"
      >
        <video
          className="object-contain w-full absolute inset-0 h-full lg:scale-90"
          width={2880}
          height={1368}
          aria-hidden="false"
          aria-label=""
          autoPlay
          playsInline
          loop
          muted
        >
          <source
            src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/backup/01_Backup_Simple-Computer-Backup_1080x1080.mov"
            type="video/quicktime; codecs=hvc1"
          />
          <source
            src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/backup/01_Backup_Simple-Computer-Backup_1080x1080.webm"
            type="video/webm; codecs=vp9"
          />
        </video>
      </div>
    </div>
  );
}
