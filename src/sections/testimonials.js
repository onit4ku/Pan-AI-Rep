/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Slider from 'react-slick';
import Testimonial from 'components/cards/testimonial';
import author1 from 'assets/images/clients/author1.png';
import author2 from 'assets/images/clients/author2.png';
import logo1 from 'assets/images/clients/logo1.png';
import logo2 from 'assets/images/clients/logo2.png';
import { rgba } from 'polished';

const data = [
  {
    id: 1,
    author: author1,
    logo: logo1,
    text: `Just complete the project. Always clear explanation. In the beginning you will be taught how to deal with this amazing talented people.`,
    authorName: 'Karolin Astaize',
    designation: 'Vice President - Talent & Acquisition',
  },
  {
    id: 2,
    author: author2,
    logo: logo2,
    text: `Just complete the project. Always clear explanation. In the beginning you will be taught how to deal with this amazing talented people.`,
    authorName: 'Karolin Astaize',
    designation: 'Vice President - Talent & Acquisition',
  },
  {
    id: 3,
    author: author1,
    logo: logo1,
    text: `Just complete the project. Always clear explanation. In the beginning you will be taught how to deal with this amazing talented people.`,
    authorName: 'Karolin Astaize',
    designation: 'Vice President - Talent & Acquisition',
  },
  {
    id: 4,
    author: author2,
    logo: logo2,
    text: `Just complete the project. Always clear explanation. In the beginning you will be taught how to deal with this amazing talented people.`,
    authorName: 'Karolin Astaize',
    designation: 'Vice President - Talent & Acquisition',
  },
];

const settings = {
  arrows: false,
  dots: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <section id="testimonials" sx={styles.section}>
      <Container>
        <Slider sx={styles.slider} {...settings}>
          {data.map((testimonial) => (
            <Testimonial key={testimonial.id} data={testimonial} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;

const styles = {
  section: {
    pt: [12, null, null, null, 10, 14],
    pb: [8, null, null, null, 10, 14],
  },
  slider: {
    '.slick-list': {
      // mx: [null, null, null, null, -2, 0],
    },
    '.slick-slide': {
      // mr: [null, null, null, null, 4, 0],
    },
    '.slick-dots': {
      display: 'flex !important',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: [3, null, null, 13],
      li: {
        mx: 1,
        display: 'flex',
      },
      button: {
        backgroundColor: rgba('#2D3D50', 0.15),
        borderRadius: 50,
        border: 0,
        cursor: 'pointer',
        padding: 0,
        overflow: 'hidden',
        textIndent: '-9999em',
        width: 10,
        height: 6,
        outline: 0,
        transition: 'all 0.3s ease-in-out 0s',
      },
      '.slick-active button': {
        backgroundColor: rgba('#2D3D50', 0.4),
        width: 20,
      },
    },
  },
};
