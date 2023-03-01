import { useSelector, useDispatch } from 'react-redux'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { details, horror } from './Action';
import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import axios from 'axios';


const Movies = ({showModal}:any) => {
  const netflixmovies = useSelector((state: any) => state?.netflixval?.value)
  const netflixtrendingmovie = useSelector((state: any) => state?.netflixval?.trending)
  const toprated = useSelector((state: any) => state?.netflixval?.toprated)
  const actionmovie = useSelector((state: any) => state?.netflixval?.actionmovie)
  const comedy = useSelector((state: any) => state?.netflixval?.comedy)
  const horror = useSelector((state: any) => state?.netflixval?.horror)
  const romance = useSelector((state: any) => state?.netflixval?.romance)
  const documentaries = useSelector((state: any) => state?.netflixval?.documentaries)
 



  const dispatch = useDispatch()




  return (
    <div className='main-map-img-netflix'>
      <div>


        <p className='Netflix-Originals'>Netflix Originals</p>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="swiper-box"

        >
          {
            netflixmovies?.data?.results?.map((movie: any) => {
              return (

                <SwiperSlide className='SwiperSlide-images-slide'>
                  

                  <img className='Netflix-Originals-imges-for-hover' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} width={280} onClick={() => {dispatch(details(movie));showModal();}} />
                </SwiperSlide>

                // <div className='api-get-imge'>


                // </div>
              )

            })
          }
        </Swiper>
      </div>
      <div>


        <h1 className='Netflix-Originals'>Trending</h1>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}

        >
          {
            netflixtrendingmovie?.data?.results?.map((a: any) => {

              return (

                <SwiperSlide className='SwiperSlide-images-slide'>

                  <img className='Netflix-Originals-imges-for-hover' src={`https://image.tmdb.org/t/p/original/${a?.backdrop_path}`} width={270} height={200} onClick={() => {dispatch(details(a));showModal();}}/>
                </SwiperSlide>

                // <div className='api-get-imge'>


                // </div>
              )

            })
          }
        </Swiper>
      </div>
      <div>


        <h1 className='Netflix-Originals'>toprated</h1>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}

        >
          {
            toprated?.data?.results?.map((m: any) => {
              return (

                <SwiperSlide className='SwiperSlide-images-slide'>
                  <img className='Netflix-Originals-imges-for-hover' src={`https://image.tmdb.org/t/p/original/${m?.backdrop_path}`} width={270} height={200} onClick={() => {dispatch(details(m));showModal();}}/>
                </SwiperSlide>

                // <div className='api-get-imge'>


                // </div>
              )

            })
          }
        </Swiper>
      </div>

      <div>


        <h1 className='Netflix-Originals'>Actionmovie</h1>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}

        >
          {
            actionmovie?.data?.results?.map((m: any) => {
              return (

                <SwiperSlide className='SwiperSlide-images-slide'>
                  <img className='Netflix-Originals-imges-for-hover' src={`https://image.tmdb.org/t/p/original/${m?.backdrop_path}`} width={270} height={200} onClick={() => {dispatch(details(m));showModal();}}/>
                </SwiperSlide>

                // <div className='api-get-imge'>


                // </div>
              )

            })
          }
        </Swiper>
      </div>
      <div>


        <h1 className='Netflix-Originals'>Comedy</h1>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}

        >
          {
            comedy?.data?.results?.map((e: any) => {
              return (

                <SwiperSlide className='SwiperSlide-images-slide'>
                  <img className='Netflix-Originals-imges-for-hover' src={`https://image.tmdb.org/t/p/original/${e?.backdrop_path}`} width={270} height={200} onClick={() => {dispatch(details(e));showModal();}}/>
                </SwiperSlide>

                // <div className='api-get-imge'>


                // </div>
              )

            })
          }
        </Swiper>
      </div>
      <div>


        <h1 className='Netflix-Originals'>Horror</h1>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}

        >
          {
            horror?.data?.results?.map((e: any) => {
              return (

                <SwiperSlide className='SwiperSlide-images-slide'>
                  <img className='Netflix-Originals-imges-for-hover' src={`https://image.tmdb.org/t/p/original/${e?.backdrop_path}`} width={270} height={200} onClick={() => {dispatch(details(e));showModal();}}/>
                </SwiperSlide>

                // <div className='api-get-imge'>


                // </div>
              )

            })
          }
        </Swiper>
      </div>
      <div>


        <h1 className='Netflix-Originals'>Romance</h1>
        <Swiper
          // install Swiper modules

          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          swiper-onPaginationHide={4}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}

        >
          {
            romance?.data?.results?.map((e: any) => {
              return (

                <SwiperSlide className='SwiperSlide-images-slide'>
                  <img className='Netflix-Originals-imges-for-hover' src={`https://image.tmdb.org/t/p/original/${e?.backdrop_path}`} width={280} height={200} onClick={() => {dispatch(details(e));showModal();}}/>
                </SwiperSlide>

                // <div className='api-get-imge'>


                // </div>
              )

            })
          }
        </Swiper>
      </div>
      <div>


        <h1 className='Netflix-Originals'>Documentaries</h1>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          swiper-onPagination={4}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}

        >
          {
            documentaries?.data?.results?.map((e: any) => {
              return (

                <SwiperSlide className='SwiperSlide-images-slide'>
                  <img className='Netflix-Originals-imges-for-hover' src={`https://image.tmdb.org/t/p/original/${e?.backdrop_path}`} width={280} height={200} onClick={() => {dispatch(details(e));showModal();}}/>
                </SwiperSlide>

                // <div className='api-get-imge'>


                // </div>
              )

            })
          }
        </Swiper>
      </div>
      <div className='year-made'>

        <p>©  {(new Date().getFullYear())} Made with ❤️  by  <span className='maid-rohit'>Rohit Sindhi</span></p>
      </div>
    </div>
  )
}

export default Movies