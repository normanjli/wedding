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
            options to stay for the weekend! Listed below are some fantastic
            hotels and resorts.
            <br></br>
            We also recommend{' '}
            <a href="https://www.airbnb.com/s/Crestline--California--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&price_filter_input_type=0&price_filter_num_nights=5&date_picker_type=calendar&source=structured_search_input_header&search_type=autocomplete_click&query=Crestline%2C%20CA&place_id=ChIJI2bbPJdQw4ARDDba8iKtntg">
              Airbnb
            </a>{' '}
            and{' '}
            <a href="https://www.vrbo.com/search/keywords:crestline-california-united-states-of-america?petIncluded=false">
              Vrbo
            </a>{' '}
            as options.
          </Text>
        </article>
        {/* <CenteredHeader>Check back soon for information!</CenteredHeader> */}

        <h2 style={{ marginTop: '32px' }}>Crestline</h2>
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
        </Grid>
        <h2 style={{ marginTop: '32px' }}>Other</h2>
        <hr style={{ borderTop: `2px groove` + Colors.primary }} />
        <Grid>
          <section>
            <Flex>
              <Grid>
                <NextLink href="https://pinerose.com/" passHref>
                  <Link target="_blank">Arrowhead Pine Rose Cabins</Link>
                </NextLink>
                <ul>
                  <li>25994 CA-189, Twin Peaks, CA 92391</li>
                  <li> Distance 4.0 miles </li>
                  <li>Phone: 1-909-337-2341</li>
                </ul>
              </Grid>
              <GmapIframe src="https://www.google.com/maps/embed?pb=!4v1667947987095!6m8!1m7!1s4xayI8MSjASErW7UW1mKuA!2m2!1d34.23803552743374!2d-117.2363904789565!3f219.18047473396015!4f6.555139658054756!5f0.8626202902251251" />
            </Flex>
          </section>
          <section>
            <Flex>
              <Grid>
                <NextLink href="https://www.lakearrowheadresort.com/" passHref>
                  <Link target="_blank">Lake Arrowhead Resort and Spa</Link>
                </NextLink>
                <ul>
                  <li>27984 CA-189, Lake Arrowhead, CA 92352</li>
                  <li> Distance 7.9 miles </li>
                  <li>Phone: 1-909-336-1511</li>
                </ul>
              </Grid>
              <GmapIframe src="https://www.google.com/maps/embed?pb=!4v1667948307680!6m8!1m7!1s-rsg5qTBjLedpKDLMvZARA!2m2!1d34.25161074442756!2d-117.1923926593649!3f27.915284073469632!4f6.261021215598944!5f0.7820865974627469" />
            </Flex>
          </section>
        </Grid>
      </MainContainer>
    </div>
  );
};

export default Stay;
