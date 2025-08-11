import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  imagesSlider: string[];
}

export default function ImageSlider({ imagesSlider }: Props) {
  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-gradient-to-br from-orange-400 to-yellow-300 opacity-40 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-tl from-orange-400 to-yellow-300 opacity-40 blur-3xl pointer-events-none"></div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="rounded-xl shadow-lg overflow-hidden"
        style={{
          ["--swiper-navigation-color" as any]: "#f97316",
          ["--swiper-pagination-color" as any]: "#f97316",
        }}
      >
        {imagesSlider?.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src.split("uploads/")[1]}
              alt={`Slide ${index}`}
              className="w-full h-[500px] object-cover md:object-contain mx-auto bg-black"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
