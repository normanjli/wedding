import type { NextPage } from 'next';
import Script from 'next/script';
import { MainContainer } from '../../components/main/MainContainer.styles';
// import { CenteredHeader } from '../../components/main/Text.styles';

const Registry: NextPage = () => {
  return (
    <MainContainer>
      {/* <CenteredHeader>Check back soon for information!</CenteredHeader> */}
      <a
        className="zola-registry-embed"
        href="www.zola.com/registry/kaitlinandnorman"
        data-registry-key="kaitlinandnorman"
        style={{ display: 'none' }}
      >
        Our Zola Wedding Registry
      </a>
      <Script
        id="registryScript"
        dangerouslySetInnerHTML={{
          __html: `!function(e,t,n){var s,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(s=e.createElement(t),s.id=n,s.async=!0,s.src="https://widget.zola.com/js/widget.js",a.parentNode.insertBefore(s,a))}(document,"script","zola-wjs");`,
        }}
      />
    </MainContainer>
  );
};

export default Registry;
