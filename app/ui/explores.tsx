import { useEffect, useState } from "react";

export default function ScrollRevealText() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const text = "With Dropbox, you can edit and sign your documents, collaborate on projects, search across all your apps, and securely store all your content. It’s that simple! 😊";

  // Split the text into lines (you can customize the number of words per line)
  const words = text.split(" ");
  const wordsPerLine = 5;
  const lines = [];

  for (let i = 0; i < words.length; i += wordsPerLine) {
    lines.push(words.slice(i, i + wordsPerLine).join(" "));
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / scrollHeight;
      setScrollPosition(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-full max-w-xl mx-auto p-4">
        {lines.map((line, index) => {
          // Calculate the reveal threshold for each line
          const revealThreshold = (index + 1) / lines.length;

          return (
            <p
              key={index}
              className="text-2xl font-semibold text-gray-900 leading-relaxed scroll-text"
              style={{
                opacity: scrollPosition >= revealThreshold ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              {line}
            </p>
          );
        })}
      </div>
    </div>
  );
}
