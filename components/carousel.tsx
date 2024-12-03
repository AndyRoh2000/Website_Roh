'use client'
import { title } from './primitives'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import { images, imagess } from '@/config/image'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Carousel() {
  return (
    <div>
      <h1 className={title()}>Proficient</h1> <br /><br /><br />

      <section className="w-screen h-auto flex flex-col justify-center pl-2 pr-2 pb-2 bg-white">
        {/* Ensure Full Width */}
        <div className="w-full flex pl-2 pr-2 pb-2">
          <Swiper
            slidesPerView={4}
            centeredSlides={true}
            loop={true}
            speed={7000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
            className="w-full rounded-lg"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={0}
                    height={60}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <div>
        <br /><br /><br />
        <h1 className={title()}>Intermediate</h1>
        <br /><br /><br />
      </div>
      <section className="w-screen h-auto flex flex-col justify-center pl-2 pr-2 pb-2 bg-white">
        {/* Ensure Full Width */}
        <div className="w-full flex pl-4 pr-2 pb-2">
          <Swiper
            slidesPerView={4}
            centeredSlides={true}
            loop={true}
            speed={7000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 25,
              },
            }}
            modules={[Autoplay]}
            className="w-full"
          >
            {imagess.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={0}
                    height={60}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  )
}
