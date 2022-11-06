import React from 'react';

const GmapIframe = (props: any) => {
  return (
    <iframe
      width="300"
      height="200"
      id="gmap_canvas"
      frameBorder="0"
      scrolling="no"
      {...props}
    />
  );
};

export default GmapIframe;
