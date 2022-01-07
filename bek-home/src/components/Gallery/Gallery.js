import image from '../../images/fnt_sampleImg.jpeg';
import image1 from '../../images/sample.jpeg';
import image2 from '../../images/sample1.jpeg';
import image3 from '../../images/sample2.jpeg';
import branding_km from '../../images/branding_km_main.png';
import branding_km2 from '../../images/branding_km_main2.png';
import branding_clef from '../../images/CLEF_branding.png';
import branding_nexton_bts from '../../images/nexton_bts.png';
import marketing_ferrari from '../../images/marketing_ferrari.png';
import marketing_blackpink_blink from '../../images/blackpink_blink.png';
import marketing_vw from '../../images/VW.png';

export const GalleryItems = [
  {
    id: 1,
    title: 'KM',
    imageURL: [branding_km, branding_km2],
    link: '/projects/Branding',
    clicked: false,
    description:
      '국제종합기계 대동공업과 합병후 페이스 리프트 및 브랜드 이미지 상승을 위해 브랜딩을 진행하였습니다. BI 어플리케이션을 포함하여 총 316page의 결과물을 제작하였습니다.',
  },

  {
    id: 2,
    title: 'CLEF',
    imageURL: [branding_clef],
    link: '/projects/Branding',
    clicked: false,
    description:
      'CLEF는 글로벌 브랜드인 VONVOM, 시클로트(ciclotte), 루즈 (Reuge)오르골의 국내편집브랜드로 2016년 런칭 되었습니다.',
  },
  {
    id: 3,
    title: 'NEXT ON SMART FARM',
    imageURL: [branding_nexton_bts],
    link: '/projects/Branding',
    clicked: false,
    description:
      '2019년 런칭된 넥스트온은 충북옥천 경부고속도로 통제구역에 설치된 스마트 팜으로 ',
  },
];

export const GalleryItemsTwo = [
  {
    id: 1,
    title: 'Sample4',
    imageURL: [marketing_ferrari],
    link: '/projects/Marketing',
    clicked: false,
    description:
      '2015년 페라리 레더 브레이슬릿. 이태리 소가죽을 사용하여 레드 팬톤 색상을 맞춰 디자인 되었으며, 핸드메이드로 제작되었다. 페라리의 안내책자와 함께 제작되었으며 안내책자는 섬유질감의 특수 용지로 제작 후 은박으로 페라리의 로고를 정중앙에 위치시켜 미니멀한 디자인을 완성하였다.',
  },
  {
    id: 2,
    title: 'Sample5',
    imageURL: [marketing_blackpink_blink],
    link: '/projects/Marketing',
    clicked: false,
    description:
      '블랙핑크 키트 BLINK 굿즈 포토카드, 카드지갑등 팬들의 니즈에 맞춘 제품들이 포함되어 있다. 핑크와 블랙이 미니멀하고 조화롭게 구성되었다.',
  },

  {
    id: 3,
    title: 'Sample6',
    imageURL: [marketing_vw],
    link: '/projects/Marketing',
    clicked: false,
    description:
      '2020년, 2021년 2년간 폭스바겐의 굿즈를 제작을 하였으며, 그중 프레스킷은 유럽 브랜드인 Collanil의 슈케어 세트로 제작되었습니다. THE GREAT VISlON 이라는 주제로 4륜 구동시연을 위해 야외에서 진행되었습니다. 거친지형을 넘는 사륜구동의 특징을 슈케어와 연결하여 긍적적인 반응을 얻을 수 있었습니다.',
  },
];

export const GalleryItemsThree = [
  {
    id: 1,
    title: 'Sample7',
    imageURL: [image2],
    link: '/projects/Design',
    clicked: false,
  },

  {
    id: 2,
    title: 'Sample8',
    imageURL: [image3],
    link: '/projects/Design',
    clicked: false,
  },
  {
    id: 3,
    title: 'Sample9',
    imageURL: [image],
    link: '/projects/Design',
    clicked: false,
  },
];

export const GalleryItemsFour = [
  {
    id: 1,
    title: 'Sample10',
    imageURL: [image1],
    link: '/projects/Photography',
    clicked: false,
  },
  {
    id: 2,
    title: 'Sample11',
    imageURL: [image2],
    link: '/projects/Photography',
    clicked: false,
  },
  {
    id: 3,
    title: 'Sample12',
    imageURL: [image3],
    link: '/projects/Photography',
    clicked: false,
  },
];

export const GalleryItemsFive = [
  {
    id: 1,
    title: 'Sample13',
    imageURL: [image],
    link: '/projects/Development',
    clicked: false,
  },
  {
    id: 2,
    title: 'Sample14',
    imageURL: [image1],
    link: '/projects/Development',
    clicked: false,
  },
  {
    id: 3,
    title: 'Sample15',
    imageURL: [image2],
    link: '/projects/Development',
    clicked: false,
  },
];

export const GalleryItemList = [
  ...GalleryItems,
  ...GalleryItemsTwo,
  ...GalleryItemsThree,
  ...GalleryItemsFour,
  ...GalleryItemsFive,
];
