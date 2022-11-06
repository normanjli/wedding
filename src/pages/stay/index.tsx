import type { NextPage } from 'next';
import Link from 'next/link';
import { Flex, Grid } from '../../components/flex.stories';
import Header from '../../components/header/Header';
import GmapIframe from '../../components/iframes/GmapIframe';
import { MainContainer } from '../../components/main/MainContainer.styles';
import { Text } from '../../components/main/Text.styles';
import { Colors } from '../../styles/Colors';

const Stay: NextPage = () => {
  return (
    <div>
      <Header />
      <MainContainer>
        <article>
          <Text>
            The San Bernadino Mountains are a wonderful place in spring. Due to
            the resort nature of the mountains it means there are plenty of
            great options to stay for the weekend!
          </Text>
        </article>
        <h2>Crestline</h2>
        <hr style={{ borderTop: `2px solid` + Colors.primary }} />
        <Grid>
          <section>
            <Flex>
              <Grid>
                <Link href="https://www.thenorthshoreinn.com" passHref>
                  <a target="_blank">The North Shore Inn</a>
                </Link>
                <ul>
                  <li>24202 Lake Dr, Crestline, CA 92325</li>
                  <li> Distance 2.7 miles </li>
                  <li>Phone: 1-800-300-5230</li>
                </ul>
              </Grid>
              <GmapIframe src="https://maps.google.com/maps?q=24202%20Lake%20Dr,%20Crestline,%20CA%2092325&t=&z=13&ie=UTF8&iwloc=&output=embed" />
            </Flex>
          </section>
          <section>
            <Flex>
              <Grid>
                <Link href="https://theplacetorelax.com/" passHref>
                  <a target="_blank">Sleepy Hollow Cabins and Hotel</a>
                </Link>
                <ul>
                  <li>24202 Lake Dr, Crestline, CA 92325</li>
                  <li> Distance 2.9 miles </li>
                  <li>Phone: 1-909-338-2718</li>
                </ul>
              </Grid>
              <GmapIframe src="https://maps.google.com/maps?q=24033%20Lake%20Drive,%20Crestline,%20CA%2092325&t=&z=13&ie=UTF8&iwloc=&output=embed" />
            </Flex>
          </section>
        </Grid>
      </MainContainer>
    </div>
  );
};

export default Stay;
