import React, { useState, useEffect } from 'react';
import aos from 'aos';

import image from '../images/fnt_sampleImg.jpeg';
import image1 from '../images/sample.jpeg';
import image2 from '../images/sample1.jpeg';
import image3 from '../images/sample2.jpeg';
import 'aos/dist/aos.css';
import './AboutPage.scss';

const AboutPage = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Branding',
      content: 'brand strategy consulting',
      contentTwo: 'corporate / brand identity design',
      imageURL: [image],
    },
    {
      id: 2,
      name: 'Social Media',
      content: 'social media campaign & marketing',
      contentTwo: '',
      imageURL: [image1],
    },
    {
      id: 3,
      name: 'Digital Media',
      content: 'prototype design',
      contentTwo: 'digital platform planning / UI/UX design / dev',
      imageURL: [image2],
    },
    {
      id: 4,
      name: 'Film/Video',
      content: 'film / video production & design',
      contentTwo: 'corporate / brand identity design',
      imageURL: [image3],
    },
  ]);

  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      {/* <section className='spareSpace' /> */}

      <div className='container'>
        <section className='about-section'>
          <article className='about-intro'>
            <p className='about-intro-description'>
              당신의 브랜드는 지금 어디에 있습니까?
            </p>
            <p>
              엘리스가 이상한 나라 원더랜드에서 성숙한 것처럼 우리는 당신에게
              원더랜드와 같은 역할을 수행합니다.
            </p>
            <p>
              아이디어를 실현시키고 브랜드를 성숙시키며, 고객과 소통합니다.
              브랜딩, 개발, 타겟, 페르소나, 마케팅.
            </p>
            <p>이 모든 것이 우리의 놀이터 입니다.</p>
          </article>
          <article className='about-body'>
            <div className='about-body-content'>
              <ul className='about-body-content-list'></ul>
            </div>
            <div className='about-body-content1'>
              <div className='gallery'>
                {/* <div class='gallery__card'> */}
                {services.map((item, index) => (
                  <div className='gallery__card' key={index}>
                    <div className='gallery__cardContainer' data-aos='fade-up'>
                      <div className='gallery__cardContainer--image'>
                        <div className='overlay'></div>
                        <img src={item.imageURL[0]} alt='Gallery' />
                      </div>
                      <div className='gallery__cardContainer--title'>
                        <p>{item.name}</p>
                      </div>
                      <div className='gallery__cardContainer--contents'>
                        <span>{item.content}</span>
                        <br></br>
                        <span>{item.contentTwo}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {/* </div> */}
              </div>
            </div>
            <div className='about-body-content2'></div>
            <div className='about-body-content3'></div>
          </article>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
