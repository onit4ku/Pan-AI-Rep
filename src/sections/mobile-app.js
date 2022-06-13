/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Image as Img } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import app from 'assets/images/app.png';
import appStore from 'assets/images/app-store.png';
import googlePlay from 'assets/images/google-play.png';

const MobileApp = () => {
  return (
    <section sx={styles.section}>
      <Container>
        <Box sx={styles.grid}>
          <Flex sx={styles.illustration}>
            <Image src={app} alt="privacy" />
          </Flex>
          <Box>
            <SectionHeading
              sx={styles.heading}
              title="Beyond on limitation with our android and iOS mobile application"
              description="Manage your business communications even when you're away from your desk. Native mobile apps for Mail, Mail Admin, and Streams make staying in touch on the go easier and effortless. e-Discovery helps discover such retained emails quickly."
            />
            <Flex sx={styles.buttonGroup}>
              <Img src={appStore} alt="appStore" />
              <Img src={googlePlay} sx={{ ml: 3 }} alt="googlePlay" />
            </Flex>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default MobileApp;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [6, null, null, 8, 10, 11],
  },
  grid: {
    display: ['flex', null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'unset'],
    alignItems: 'center',
    gap: [null, null, null, 6, null, 14],
    gridTemplateColumns: ['1fr', null, null, 'repeat(2, 1fr)', '445px 500px'],
    justifyContent: 'center',
  },
  illustration: {
    alignItems: 'center',
    mt: [8, null, null, 0],
  },
  heading: {
    textAlign: ['center', null, null, 'left'],
    h3: {
      fontSize: [3, null, null, 6, 10, 11],
      lineHeight: 1.53,
    },
  },
  buttonGroup: {
    alignItems: 'center',
    justifyContent: ['center', null, null, 'unset'],
    mt: [4, null, null, 10],
    img: {
      maxWidth: ['120px', null, null, 'none'],
    },
  },
};
