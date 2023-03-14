import { ReactNode } from 'react';
import { workouts } from '../../data2';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper';


export function HomeSlider() {
  const { programs } = workouts;
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={32}
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      //grabCursor={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        720: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      }}
      modules={[Navigation, Autoplay]}
      className='workoutSlider'
    >
      {programs.map((program, index) => {
        const { image, name } = program;
        return (
          <SwiperSlide key={index}>
            <div className="relative bg-black">
              {/* image */}
              <div className=''>
                <img src={image} alt="" className="w-full h-[790px] object-cover" />
              </div>
              {/* message & name */}
              <div
                data-aos='fade-up'
                data-aos-delay='200'
                className='absolute bottom-[24rem] left-[36rem] p-[40px]  text-white font-primary'>
                <div
                  style={{ textShadow: "0 0 10px rgba(0,0,0,1.5)" }}
                  className="h1 flex flex-items justify-center italic ">
                  {name}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

