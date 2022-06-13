/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Heading, Text } from 'theme-ui';

const Testimonial = ({ data }) => {
  return (
    <Box sx={styles.testimonial}>
      <Box as="figure" sx={styles.avatar}>
        <Image src={data.author} alt={data.authorName} />
      </Box>
      <Box sx={styles.content}>
        <Image src={data.logo} alt={data.authorName} />
        <Text as="p">{data.text}</Text>
        <Heading as="h4">{data.authorName}</Heading>
        <Text as="span">{data.designation}</Text>
      </Box>
    </Box>
  );
};

export default Testimonial;

const styles = {
  testimonial: {
    display: [null, null, null, 'flex'],
    textAlign: ['center', null, null, 'left'],
    px: [null, null, null, 10, 0],
    mr: [null, null, null, null, 4, 0],
    img: {
      mx: ['auto', null, null, 'unset'],
    },
  },
  avatar: {
    minWidth: 60,
    margin: ['0 0 15px 0', null, null, '55px 30px 0 0'],
    img: {
      borderRadius: '50%',
    },
  },
  content: {
    img: {
      mb: 2,
    },
    p: {
      fontSize: [2, null, null, 3],
      lineHeight: 1.94,
      letterSpacing: 'heading',
      color: 'heading',
    },
    h4: {
      color: 'heading',
      mt: 4,
    },
    span: {
      display: 'inline-flex',
      mt: '8px',
    },
  },
};
