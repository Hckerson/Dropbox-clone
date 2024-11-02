// components/TestimonialSlider.js
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/quote_2560x1440_1.jpg?id=5c6a4d49-6d0f-4e50-a3a9-1899643dfc2e&width=2560&output_type=jpg",
    body: "“Dropbox has been tremendously helpful for social media. I can hop on anytime and pull whatever photo is inspiring me to post.”",
    link: "https://experience.dropbox.com/resources/bound-for-nowhere-customer-story",
    name: "Mary Ashley Krough (MAK)",
    role: "Illustrator and Graphic Designer",
  },
  {
    id: 2,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/quote_2560x1440_1.jpg?id=5c6a4d49-6d0f-4e50-a3a9-1899643dfc2e&width=2560&output_type=jpg",
    body: "“Dropbox has been tremendously helpful for social media. I can hop on anytime and pull whatever photo is inspiring me to post.”",
    link: "https://experience.dropbox.com/resources/bound-for-nowhere-customer-story",
    name: "Mary Ashley Krough (MAK)",
    role: "Illustrator and Graphic Designer",
  },
  {
    id: 3,
    src: "https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/Dropbox_DWG/quote_2560x1440_1.jpg?id=5c6a4d49-6d0f-4e50-a3a9-1899643dfc2e&width=2560&output_type=jpg",
    body: "“Dropbox has been tremendously helpful for social media. I can hop on anytime and pull whatever photo is inspiring me to post.”",
    link: "https://experience.dropbox.com/resources/bound-for-nowhere-customer-story",
    name: "Mary Ashley Krough (MAK)",
    role: "Illustrator and Graphic Designer",
  },
  // Replicate this object for the other 6 testimonials
];

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full bg-[#1e1919] flex justify-center py-10 px-5">
      <div className="max-w-5xl w-full flex flex-col items-center">
        <h2 className="text-white text-center text-3xl font-medium mb-10">
          What Dropbox customers are saying
        </h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex flex-col md:flex-row items-center text-white gap-8">
                {/* Left image */}
                <div className="relative w-full md:w-1/2 h-64 md:h-80 object-cover">
                  <Image src={testimonial.src} alt={testimonial.name}  width={1000} height={500}  className="rounded-lg" />
                </div>
                {/* Right text content */}
                <div className="md:w-1/2 flex flex-col justify-center">
                  <p className="text-xl italic mb-4">{testimonial.body}</p>
                  <a
                    href={testimonial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline hover:text-gray-300 text-lg mb-4"
                  >
                    Read the full story →
                  </a>
                  <p className="text-lg font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Pagination */}
        <div className="flex items-center justify-between w-full mt-6">
          <span className="text-white text-sm">
            {String(currentSlide + 1).padStart(2, '0')}/07
          </span>
          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1))}
              className="text-white"
            >
              &#8592;
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0))}
              className="text-white"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
