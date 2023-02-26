import type { NextPage } from 'next';
import Script from 'next/script';
import { Button } from '../../components/button/Button.style';
import { MainContainer } from '../../components/main/MainContainer.styles';
import { Text } from '../../components/main/Text.styles';
// import { CenteredHeader } from '../../components/main/Text.styles';

const Registry: NextPage = () => {
  return (
    <MainContainer>
      {/* <CenteredHeader>Check back soon for information!</CenteredHeader> */}
      <Text>
        At this time, we do not wish for anything other than your continued love
        and support. If you would like to give us a gift, we would appreciate
        contributions towards our honeymoon & new home renovation costs. Thank
        you for celebrating with us. <br></br>If you&apos;d prefer to purchase
        us a gift, please see our Zola registry below.
        <br></br>
        <b>
          Please send any physical gifts directly to our home in Salt Lake, We
          will be travelling directly after our wedding and will have limited
          car space on our trip.
        </b>
      </Text>
      <Button as="a" href="https://account.venmo.com/u/normanjli">
        <h3 style={{ fontWeight: 'normal', fontSize: '18px' }}>{'Venmo'}</h3>
      </Button>
      <Button
        as="a"
        href="https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiTk9STUFOIiwiYWN0aW9uIjoicGF5bWVudCIsInRva2VuIjoibm9ybWFuamxpQGdtYWlsLmNvbSJ9"
      >
        <h3 style={{ fontWeight: 'normal', fontSize: '18px' }}>{'Zelle'}</h3>
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
