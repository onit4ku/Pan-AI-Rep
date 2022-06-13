/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Heading, Text, Link as A } from 'theme-ui';
import Link from 'next/link';
import Play from 'components/icons/play';

const Feature = ({ data, ...props }) => {
  return (
    <Box sx={styles.feature} {...props}>
      <Box as="figure">
        <Image src={data?.icon} alt={data?.title} />
      </Box>
      <Box>
        <Heading as="h4">{data?.title}</Heading>
        <Text as="p">{data?.description}</Text>
        <Link href={data.moreLink}>
          <A sx={styles.learnMore}>
            <span>Learn More</span> <Play width={14} height={14} />
          </A>
        </Link>
      </Box>
    </Box>
  );
};

export default Feature;

const styles = {
  feature: {
    display: [null, null, null, null, null, 'flex'],
    textAlign: ['center', null, null, null, null, 'left'],
    figure: {
      minWidth: [42, null, null, 70],
      mr: [null, null, null, null, null, 6],
      mb: [3, null, null, null, null, 0],
    },
    h4: {
      fontSize: [2, null, null, 3],
      fontWeight: 'bold',
      lineHeight: 1.68,
      color: 'heading',
      mb: 3,
    },
    p: {
      fontSize: [1, null, null, 2],
      lineHeight: 1.88,
      color: 'text',
    },
  },
  learnMore: {
    color: 'primary',
    cursor: 'pointer',
    fontSize: [1, null, null, '13px'],
    fontWeight: 700,
    display: 'inline-flex',
    alignItems: 'baseline',
    textDecoration: 'none',
    letterSpacing: 1,
    lineHeight: 1,
    textTransform: 'uppercase',
    mt: 4,
    svg: {
      ml: 2,
    },
  },
};
