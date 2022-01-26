import React from 'react';
import './AboutPage.scss';

const AboutPage = () => {
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
              <div className='body-content1-columns'>
                <div className='body-content1-column1'>
                  <div className='body-content-column-items'>
                    <p style={{ fontWeight: '400' }}>Branding</p>
                    <p>
                      brand strategy consulting
                      <br></br>
                      corporate / brand identity design
                    </p>
                  </div>
                  <div className='body-content-column-items'>
                    <p style={{ fontWeight: '400' }}>Film/Video</p>
                    <p>
                      film / video production &amp; design
                      <br></br>
                      corporate / brand identity design
                    </p>
                  </div>
                </div>

                <div className='body-content1-column2'>
                  <div className='body-content-column-items'>
                    <p style={{ fontWeight: '400' }}>Social Media</p>
                    <p>
                      social media campaign &amp; marketing
                      <br></br>
                    </p>
                  </div>
                  {/* <div
                  className='body-content1-column2-item2'
                  style={{ paddingTop: '20px' }}
                >
                  <p>Film/Video</p>
                  <p>
                    film / video production design
                    <br></br>
                    corporate / brand identity design
                  </p>
                </div> */}
                </div>

                <div className='body-content1-column3'>
                  <div className='body-content-column-items'>
                    <p style={{ fontWeight: '400' }}>Digital Media</p>
                    <p>
                      prototype design
                      <br></br>
                      digital platform planning / UI/UX design / dev
                    </p>
                  </div>
                  {/* <div
                  className='body-content1-column3-item2'
                  style={{ paddingTop: '20px' }}
                >
                  <p>Film/Video</p>
                  <p>
                    film / video production design
                    <br></br>
                    corporate / brand identity design
                  </p>
                </div> */}
                </div>
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
