import React from 'react';

const GmapIframe = (props: any) => {
  return (
    <iframe
      style={{ borderRadius: '8px' }}
      width="300"
      height="200"
      frameBorder="0"
      scrolling="no"
      {...props}
    />
  );
};

export default GmapIframe;
