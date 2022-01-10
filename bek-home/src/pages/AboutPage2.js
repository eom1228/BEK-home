import React from 'react';

const AboutPage2 = () => {
  return (
    <div className='container' style={{ height: '100vh' }}>
      <section className='about-section'>
        <article className='about-intro' style={{ paddingTop: '150px' }}>
          <p style={{ marginBottom: '30px', fontWeight: '400' }}>
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
          <div className='about-body-content1'></div>
          <div className='about-body-content2'></div>
          <div className='about-body-content3'></div>
        </article>
      </section>
    </div>
  );
};

export default AboutPage2;
