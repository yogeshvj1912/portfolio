import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [

  {
    img : "/pizza.png",
    disc : "This is complete authentication and also it has authorized functionality pizza delivery app.This is responsive web design.",
    link : "https://effortless-semifreddo-349782.netlify.app/"
},
  
    {
        img : "/calculater.png",
        disc : "This is amazing calculater website",
        link : "https://fabulous-gecko-f49bd7.netlify.app/"
    },
    {
        img : "thirukural.png",
        disc : "This Websites shows you the Famous tamil literature line knowns as 'THIRUKKURAL' by selecting the number of thirukkural you want!",
        link : "https://tangerine-narwhal-678194.netlify.app/"
    },
    {
        img : "https://lh3.googleusercontent.com/vtcFBSB4_9Z38yMKQ4IC9iXTQCFyxk-1OHDUZVQF4QSOeNkZKEJMhEeIzfIpTt4jmP3s6CdEwTElQYA4deB38N-em6MXeekFnW1GRwl_bKYMcZI8sU6L786RNnPAvwKennDWqptifg=w2400",
        disc : "This was the Exact Clone of Youtube with all the features that original Youtube have, I've done this with the help of Youtube API",
        link : "https://sage-parfait-6c9188.netlify.app"
    },
    {
        img : "/dog.png",
        disc : "This was API shows the all dogs pictures",
        link : "https://tiny-stroopwafel-803e0b.netlify.app"
    },
    {
        img : "https://lh3.googleusercontent.com/2W40wwMniWgf6z2EzWEy_UsYDb5d2ebyKivGfy_qNf8Pc0z43Efa6JeeIiijdpaZBqbddXLI4hoOHuKqbvmx219Ls_OJ237qT8L2zspFEaOJvVAVQe4QC9Rum4a5Ggcu_qAQVHoiKg=w2400",
        disc : "This Weather API shows the 'Temperature', 'Humidity' and 'Description' of the particular country/capitals/state that you need to know!",
        link : "https://zingy-dusk-58afbb.netlify.app/"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`
