import React from 'react';
import Grid from '@material-ui/core/Grid';
import './AboutPage.scss';

const AboutPage = () => {
  return (
    <>
      <section className='page_Container'>
        <div className='page_padding'>
          <div className='page_heading'>
            <h1 className='page_header'>Form and thought</h1>
          </div>
          <div className='page_main_section'>
            <div className='page_main_padding'>
              <Grid className='main_grids' container spacing={3}>
                <Grid
                  className='main_grid_item'
                  item

                  // style={{ background: 'green' }}
                >
                  <p>
                    Studio fnt is a Seoul based graphic design studio founded in
                    November 2006. We collect fragmented and straying thoughts,
                    and then organize and transform them into relevant forms.
                    Our three partners, Heesun Kim, Jaemin Lee and Woogyung Geel
                    work together with a number of designers on various
                    projects. Our capabilities include branding for corporate
                    business, graphic design for exhibitions and/or cultural
                    arts events, and many others in various fields, sizes and
                    media.
                  </p>
                  {/* <div>
                    <img src='/images/fnt_sampleImg.jpeg'></img>
                  </div>  */}
                </Grid>
                <Grid
                  className='main_grid_item'
                  item

                  // style={{ background: 'orange' }}
                >
                  <p>
                    After studying industrial design at KAIST, Heesun Kim has
                    been conducting various local and international projects
                    since 2001, including corporate branding, promotion and
                    events. Since 2011, she has been working with studio fnt as
                    a creative director, leading major projects. Jaemin Lee
                    studied Visual Communication Design at Seoul National
                    University and founded studio fnt in 2006. As a graphic
                    designer and an art director, he plays a key role in
                    managing the visual aspects of many projects. He teaches
                    Visual Communications Design at the University of Seoul.
                    He’s also a member of the Alliance Graphique Internationale
                    (AGI) since 2016. Woogyung Geel studied Visual Communication
                    Design at Seoul Women's University and joined the team in
                    2007. As an art director, she’s been working on branding and
                    communication projects, and contributed in setting the
                    company’s direction.
                  </p>
                </Grid>
                <Grid
                  className='main_grid_item'
                  item

                  // style={{ background: 'green' }}
                >
                  <p>
                    Our works were featured in various books, such as The
                    History of Graphic Design. Vol. 2, 1960—Today (TASCHEN),
                    Printed Pages (It's Nice That), Asian Creatives (PIE
                    International), and Los Logos 6 (Gestalten), as well as in
                    magazines such as IDEA magazine, Monocle, form,
                    Communication Arts, novum, IdN magazine, Design 360°. We
                    were also featured in online media such as It's Nice That,
                    BOOOOOOOM, BP&O, Dieline, LIGATURE.ch, étapes, and Naver,
                    and received design awards from CORE77 Design Awards, YCN
                    Awards, Graphic Design Festival Scotland International
                    Poster Competition, and Reddot Design Awards, etc. Some of
                    our works are permanently archived in London’s Victoria and
                    Albert Museum and Paris’ Musée des Arts Décoratifs.
                  </p>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className='page_sub_section'>
            <div className='page_sub_padding'>
              <Grid className='sub_grids' container spacing={3}>
                <Grid
                  className='sub_grid_item'
                  item

                  // style={{ background: 'green' }}
                >
                  <p>
                    2006년 11월에 서울에서 만들어진 그래픽 디자인 스튜디오 fnt는
                    생각의 단편들(thought)을 조직적이고 유의미한 형태(form)로
                    만들어 나가는 과정과 그 결과를 제안합니다. 현재 세 명의
                    파트너 - 김희선, 이재민, 길우경을 주축으로 몇몇의
                    디자이너들이 함께 작업하고 있으며, 기업의 비즈니스를 위한
                    브랜딩부터 전시나 공연, 문화예술행사를 위한 그래픽
                    디자인까지, 여러 분야와 규모, 매체를 아우르는 프로젝트들을
                    진행합니다.
                  </p>
                </Grid>
                <Grid
                  className='sub_grid_item'
                  item

                  // style={{ background: 'orange' }}
                >
                  <p>
                    김희선은 카이스트에서 산업디자인을 공부했습니다. 2001년부터
                    기업의 브랜딩과 커뮤니케이션 부문의 다양한 프로젝트 경험을
                    쌓았습니다. 2011년 fnt의 크리에이티브 디렉터로 합류하여 주요
                    프로젝트의 디자인 전략을 찾고 구체화하는 업무를 담당하고
                    있습니다. 이재민은 서울대학교에서 시각디자인을 공부했습니다.
                    2006년에 fnt를 설립한 이후, 그래픽 디자이너이자
                    아트디렉터로서 프로젝트의 시각적인 부분에서 핵심적 역할을
                    담당해 왔습니다. 서울시립대학교에서 시각디자인을 가르치고
                    있으며, 2016년부터 국제그래픽연맹(AGI)의 회원으로 활동
                    중입니다. 길우경은 서울여자대학교에서 시각디자인을 공부한
                    후, 2007년에 fnt에 합류했습니다. 아트디렉터로서 오랜 기간
                    다수의 프로젝트를 진행하며 스튜디오의 방향성을 형성하는데
                    기여해 왔습니다.
                  </p>
                </Grid>
                <Grid
                  className='sub_grid_item'
                  item

                  // style={{ background: 'green' }}
                >
                  <p>
                    fnt는 『그래픽 디자인의 역사 Vol. 2, 1960—현재』 (TASCHEN),
                    『프린티드 페이지』 (It's Nice That), 『아시아
                    크리에이티브』 (PIE International), 『로스 로고스』
                    (Gestalten) 등의 단행본과, 『아이디어 매거진』, 『모노클』,
                    『폼』, 『커뮤니케이션 아트』, 『노범』, 『아이디엔』,
                    『디자인 360°』 등 다수의 매거진, It's Nice That, BOOOOOOOM,
                    BP&O, The Dieline, LIGATURE.ch, étapes, Naver 등의 온라인
                    매체에 소개되었으며, CORE77 디자인 어워즈, YCN 어워즈,
                    그래픽 디자인 페스티벌 스코틀랜드 국제 포스터 공모전, 레드닷
                    디자인 어워즈 등의 디자인 어워드에서 수상하였습니다. fnt의
                    몇몇 작업은 런던의 빅토리아 앨버트 박물관과 파리의
                    장식미술관에 소장되어 있습니다.
                  </p>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </section>
      <ul>
        <li></li>
      </ul>
    </>
  );
};

export default AboutPage;
