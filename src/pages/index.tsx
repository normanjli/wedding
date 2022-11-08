import type { NextPage } from 'next';
import Image from 'next/image';
import Header from '../components/header/Header';
import { MainContainer } from '../components/main/MainContainer.styles';
import { Text } from '../components/main/Text.styles';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <MainContainer>
        <Image
          alt="norman and kaitlin"
          src="/Kaitlinandnorman.jpg"
          height={600}
          width={800}
          layout="responsive"
          style={{
            borderRadius: '16px',
          }}
        />
        <br />
        <br />
        <Text>
          Kaitlin Krumwiede and Norman Li, soon to be Kaitlin Miao and Norman
          Miao (more on that later), are some California transplants to Salt
          Lake City, Utah.
        </Text>
        <Text>
          They attended the same highschool, Class of 2013 at Rim of the World
          High School. While Kaitlin and Norman aren&apos;t highschool
          sweet-hearts, they reconnected as adults. Their relationship weathered
          covid and a move to SLC, UT. They decided to spend the rest of their
          lives together and got two cats and bought a house in April, 2022.
        </Text>
        <h3>Why Miao?</h3>
        <Text>
          Miao is pronounced mi&apos;aʊ, like meow. While they do own some cats,
          the source of their new last name is from Norman&apos;s Mother&apos;s
          maiden name!
        </Text>
      </MainContainer>
    </div>
  );
};

export default Home;
