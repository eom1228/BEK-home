import image from '../../images/fnt_sampleImg.jpeg';
import image1 from '../../images/sample.jpeg';
import image2 from '../../images/sample1.jpeg';
import image3 from '../../images/sample2.jpeg';

export const GalleryItems = [
  {
    id: 1,
    title: 'Sample1',
    imageURL: image,
    link: '/projects/Branding',
    clicked: false,
  },

  {
    id: 2,
    title: 'Sample2',
    imageURL: image1,
    link: '/projects/Branding',
    clicked: false,
  },
  {
    id: 3,
    title: 'Sample3',
    imageURL: image2,
    link: '/projects/Branding',
    clicked: false,
  },
];

export const GalleryItemsTwo = [
  {
    id: 1,
    title: 'Sample4',
    imageURL: image3,
    link: '/projects/Marketing',
    clicked: false,
  },
  {
    id: 2,
    title: 'Sample5',
    imageURL: image,
    link: '/projects/Marketing',
    clicked: false,
  },

  {
    id: 3,
    title: 'Sample6',
    imageURL: image1,
    link: '/projects/Marketing',
    clicked: false,
  },
];

export const GalleryItemsThree = [
  {
    id: 1,
    title: 'Sample7',
    imageURL: image2,
    link: '/projects/Design',
    clicked: false,
  },

  {
    id: 2,
    title: 'Sample8',
    imageURL: image3,
    link: '/projects/Design',
    clicked: false,
  },
  {
    id: 3,
    title: 'Sample9',
    imageURL: image,
    link: '/projects/Design',
    clicked: false,
  },
];

export const GalleryItemsFour = [
  {
    id: 1,
    title: 'Sample10',
    imageURL: image1,
    link: '/projects/Photography',
    clicked: false,
  },
  {
    id: 2,
    title: 'Sample11',
    imageURL: image2,
    link: '/projects/Photography',
    clicked: false,
  },
  {
    id: 3,
    title: 'Sample12',
    imageURL: image3,
    link: '/projects/Photography',
    clicked: false,
  },
];

export const GalleryItemsFive = [
  {
    id: 1,
    title: 'Sample13',
    imageURL: image,
    link: '/projects/Development',
    clicked: false,
  },
  {
    id: 2,
    title: 'Sample14',
    imageURL: image1,
    link: '/projects/Development',
    clicked: false,
  },
  {
    id: 3,
    title: 'Sample15',
    imageURL: image2,
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
