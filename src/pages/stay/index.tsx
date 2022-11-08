import type { NextPage } from 'next';
import NextLink from 'next/link';
import { Grid, Flex } from '../../components/flex.stories';
import GmapIframe from '../../components/iframes/GmapIframe';
import { Link } from '../../components/link/Link.style';
import { MainContainer } from '../../components/main/MainContainer.styles';
import { Text } from '../../components/main/Text.styles';
import { Colors } from '../../styles/Colors';

const Stay: NextPage = () => {
  return (
    <div>
      <MainContainer>
        <article>
          <Text>
            The San Bernardino Mountains are a wonderful place in Spring.
            <br></br>
            <br></br>
            Due to the resort nature of the mountains, there are plenty of great
            options to stay for the weekend!
          </Text>
        </article>
        {/* <CenteredHeader>Check back soon for information!</CenteredHeader> */}

        <h2>Crestline</h2>
        <hr style={{ borderTop: `2px solid` + Colors.primary }} />
        <Grid>
          <section>
            <Flex>
              <Grid>
                <NextLink href="https://www.thenorthshoreinn.com" passHref>
                  <Link target="_blank">The North Shore Inn</Link>
                </NextLink>
                <ul>
                  <li>24202 Lake Dr, Crestline, CA 92325</li>
                  <li> Distance 2.7 miles </li>
                  <li>Phone: 1-800-300-5230</li>
                </ul>
              </Grid>
              <GmapIframe src="https://www.google.com/maps/embed?pb=!4v1667932620851!6m8!1m7!1s0m1s7dPeHV-LCv7u-ix5RQ!2m2!1d34.24347728583719!2d-117.275135072565!3f0.5368098131080483!4f16.87492311526752!5f0.7820865974627469"></GmapIframe>
            </Flex>
          </section>
          <section>
            <Flex>
              <Grid>
                <NextLink href="https://theplacetorelax.com/" passHref>
                  <Link target="_blank">Sleepy Hollow Cabins</Link>
                </NextLink>
                <ul>
                  <li>24202 Lake Dr, Crestline, CA 92325</li>
                  <li> Distance 2.9 miles </li>
                  <li>Phone: 1-909-338-2718</li>
                </ul>
              </Grid>
              <GmapIframe src="https://www.google.com/maps/embed?pb=!4v1667932787302!6m8!1m7!1srinzzEo_QqJnGvMzsNnVcQ!2m2!1d34.24347542380253!2d-117.2791168816011!3f125.41703008436204!4f4.858234982215464!5f2.4345861343997486" />
            </Flex>
          </section>
          <section>
            <Flex>
              <Grid></Grid>
            </Flex>
          </section>
        </Grid>
      </MainContainer>
    </div>
  );
};

export default Stay;
