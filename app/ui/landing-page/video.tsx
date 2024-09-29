export function VideoLeft() {
  return (
    <>
      <video controls width="250" className="z-10" height={400} >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flowe.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

export function VideoRight() {
  return (
    <>
      <video controls width="250" className="z-10" height={400} >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flowe.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
