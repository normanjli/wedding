import type { NextPage } from 'next';
import Script from 'next/script';
import { Button } from '../../components/button/Button.style';
import { MainContainer } from '../../components/main/MainContainer.styles';
// import { CenteredHeader } from '../../components/main/Text.styles';

const Registry: NextPage = () => {
  return (
    <MainContainer>
      {/* <CenteredHeader>Check back soon for information!</CenteredHeader> */}
      <Button as="a" href="https://account.venmo.com/u/normanjli">
        <h3 style={{ fontWeight: 'normal' }}>
          {'We accept cash through Venmo!'}
        </h3>
      </Button>
      <a
        className="zola-registry-embed"
        href="www.zola.com/registry/kaitlinandnorman"
        data-registry-key="kaitlinandnorman"
        style={{ display: 'none' }}
      >
        Our Zola Wedding Registry
      </a>
      <Script
        id="zola-wjs"
        src="https://widget.zola.com/js/widget.js"
        onReady={() => {
          let s,
            a = document.getElementById('zola-wjs');
          // eslint-disable-next-line no-unused-expressions
          s ||
            ((s = document.createElement('script')),
            (s.id = 'zola-wjs'),
            (s.async = !0),
            (s.src = 'https://widget.zola.com/js/widget.js'),
            a?.parentNode?.insertBefore(s, a));
        }}
      />
    </MainContainer>
  );
};

export default Registry;
