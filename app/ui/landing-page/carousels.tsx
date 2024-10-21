import Swiper from "./swipe";
import { useEffect, useState } from 'react';
import { PauseCircleIcon, PlayCircleIcon } from "@heroicons/react/24/outline";

export default function Carousels() {
  const [state, setState] = useState(false)

  const handleClick = () => {
    setState((prevState) => !prevState); // Toggle the state
  };
  
  useEffect(() => {
    const carousel = document.getElementById('carousel');
    if (carousel) {
      carousel.style.animationPlayState = state ? 'paused' : 'running';
    }
  }, [state]);
  return (
    <div className="box-border">
      <div className="w-full box-border">
        <div className="overflow-hidden box-border w-full">
          <div
            style={{ width: "fit-content" }}
            className="box-border flex flex-row justify-between"
            id="carousel"
          >
            <Swiper />
            <Swiper />
            <Swiper />
            <Swiper />
            <Swiper />
          </div>
        </div>
        <div onClick={handleClick} className="flex justify-center box-border">
          <button
            style={{
              aspectRatio: 1,
              cursor: "pointer",
              width: "fit-content",
              color: "#f7f5f2",
            }}
            className="m-1 inline-flex bg-transparent relative items-center box-border"
          >
             {state === true ? <PlayCircleIcon className="size-8"/> : <PauseCircleIcon className="size-8"/> }
          </button>
        </div>
      </div>
    </div>
  );
}
