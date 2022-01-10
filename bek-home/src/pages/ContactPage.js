import React from 'react';
import Grid from '@material-ui/core/Grid';
import './ContactPage.scss';

const ContactPage = () => {
  return (
    <>
    <section className="spareSpace"></section>
      <section className='contact_Container'>
        <div className='contact_padding'>
          {/* <div className='contact_heading'>
            <h2 className='contact_header'></h2>
          </div> */}
          <div className='contact_main_section'>
            <div className='contact_main_padding'>
              <Grid className='main_grids' container spacing={3}>
                <Grid
                  className='main_grid_item'
                  item

                  // style={{ background: 'green' }}
                >
                  <h1 className='grid_item_heading'>Project inquiry</h1>
                  <div className='grid_items'>
                    <p className='grid_item_eng'>
                      Project requests are received via e-mails. Please send us
                      an email to the following address, including your project
                      details such as scope, schedule and budget.
                    </p>
                    <p className='grid_item_kor'>
                      프로젝트 의뢰는 이메일로 받고 있습니다. 아래의 메일 주소로
                      구체적인 의뢰 내용과 일정, 버젯 등을 보내주세요. 검토 후
                      회신 드리겠습니다.
                    </p>
                    <p className='grid_item_address'>
                      studiofnt(at)gmail(dot)com
                    </p>
                  </div>
                </Grid>
                <Grid
                  className='main_grid_item'
                  item

                  // style={{ background: 'green' }}
                >
                  <h1 className='grid_item_heading'>Job opportunity</h1>
                  <div className='grid_items'>
                    <p className='grid_item_eng'>
                      Currently, we do not have openings for full-time or
                      internship positions. Thank you for understanding that we
                      are unable to reply to related inquiries.
                    </p>
                    <p className='grid_item_kor'>
                      현재 일반채용과 인턴지원이 마감된 상태입니다. 채용 및
                      인턴지원 관련 문의 메일에는 회신을 드리지 못하는 점 양해
                      부탁드립니다.
                    </p>
                    <p className='grid_item_address'>
                      recruit.fnt(at)gmail(dot)com
                    </p>
                  </div>
                </Grid>
                <Grid
                  className='main_grid_item'
                  item

                  // style={{ background: 'green' }}
                >
                  <h1 className='grid_item_heading'>Postal address</h1>
                  <div className='grid_items'>
                    <p className='grid_item_eng'>
                      Please send all mails such as hard copies of documents,
                      sample or mock-ups, letters and packages to the address
                      below.
                    </p>
                    <p className='grid_item_kor'>
                      문서의 하드카피, 샘플이나 목업, 혹은 편지나 택배와 같은
                      모든 우편물은 아래의 주소로 보내주세요.{' '}
                    </p>
                    <p className='grid_item_address'>
                      2F, TOTO Building, 187, Yulgok-ro, Jongno-gu Seoul, 03081,
                      South Korea ︎ Google map
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </section>
      {/* <div>ContactPage</div> */}
    </>
  );
};

export default ContactPage;
