import { useEffect, useState } from "react";

export default function ScrollRevealText() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [position, setPosition] = useState<"absolute" | "fixed" | "relative">(
    "absolute"
  );
  const [top, setTop] = useState(320);

  const Start = 1200; // Set your Start scroll value here
  const End = 1700; // Set your End scroll value here

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Check if scrollTop is greater than or equal to Start
      if (scrollTop >= End) {
        setPosition("fixed");
        setTop(230); // Fixed position for the revealed content
      } else if (scrollTop >= Start) {
        setPosition("absolute");
        const scrollValue =
          320 - ((scrollTop - Start) / (End - Start)) * 320 * 0.6956521739;
        setTop(scrollValue); // Smooth transition for the top value
      } else {
        setPosition("absolute");
        setTop(320); // Initial top position
      }

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / scrollHeight;
      setScrollPosition(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLineRevealProgress = (lineNumber: number, totalLines: number) => {
    const progressPerLine = 1 / totalLines;
    const start = lineNumber * progressPerLine;
    const end = (lineNumber + 1) * progressPerLine;

    if (scrollPosition < start) return 0;
    if (scrollPosition > end) return 1;
    return (scrollPosition - start) / (end - start);
  };

  return (
    <div className="flex justify-center items-center h-[2000px] bg-gray-100">
      <div
        className="relative w-full max-w-xl mx-auto p-4 "
        style={{ position: position, top: top }}
      >
        <div className="text-2xl font-semibold text-gray-900 leading-relaxed scroll-text ">
          <p
            className="inline"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) ${getLineRevealProgress(0, 5) * 100}%, rgba(0, 0, 0, 0.2) 0%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "rgba(0, 0, 0, 0.2)",
              willChange: "background-position",
            }}
          >
            With Dropbox you can{" "}
            <span style={{ color: "#9b6400" }}>edit and sign </span>
            your <br />
          </p>
          <p
            className="inline"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) ${getLineRevealProgress(1, 5) * 100}%, rgba(0, 0, 0, 0.2) 0%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "rgba(0, 0, 0, 0.2)",
              willChange: "background-position",
            }}
          >
            documents,
            <span style={{ color: "#0f503c" }}>corroborate </span>
            on projects, <br />
          </p>
          <p
            className="inline"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) ${getLineRevealProgress(2, 5) * 100}%, rgba(0, 0, 0, 0.2) 0%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "rgba(0, 0, 0, 0.2)",
              willChange: "background-position",
            }}
          >
            <span style={{ color: "#78286e" }}>search </span>
            across all your apps, and it happens <br />
          </p>
          <p
            className="inline"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) ${getLineRevealProgress(3, 5) * 100}%, rgba(0, 0, 0, 0.2) 0%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "rgba(0, 0, 0, 0.2)",
              willChange: "background-position",
            }}
          >
            in the same place you{" "}
            <span style={{ color: "#cd2f7b" }}>securely store </span>
            all your <br />
          </p>
          <p
            className="inline"
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) ${getLineRevealProgress(4, 5) * 100}%, rgba(0, 0, 0, 0.2) 0%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "rgba(0, 0, 0, 0.2)",
              willChange: "background-position",
            }}
          >
            content. {"it's that simple"}
          </p>
        </div>
      </div>
    </div>
  );
}
