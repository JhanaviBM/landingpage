import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        Copyright © 2023 by Whiteboard Technologies Pvt. Ltd. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    padding: '15px 0',
    position: 'relative',
    width: '100vw',
  },
  text: {
    margin: 0,
    fontSize: '14px',
  },
};

export default Footer;
