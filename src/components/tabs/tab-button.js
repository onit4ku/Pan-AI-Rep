/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

const TabButton = ({ tab }) => {
  return (
    <Box sx={styles.tabButton} className="tab-button">
      {tab.icon}
      {tab.title}
    </Box>
  );
};

export default TabButton;

const styles = {
  tabButton: {
    display: 'flex',
    alignItems: 'center',
    fontSize: [1, null, null, null, 2],
    lineHeight: 1,
    svg: {
      mr: ['7px', , null, null, '12px'],
      height: 20,
      width: 20,
    },
  },
};
