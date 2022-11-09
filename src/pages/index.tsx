import type { NextPage } from 'next';
import Image from 'next/image';
import { MainContainer } from '../components/main/MainContainer.styles';
import { Text } from '../components/main/Text.styles';

const Home: NextPage = () => {
  return (
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
        Kaitlin Krumwiede and Norman Li, soon to be Kaitlin Miao and Norman Miao
        (more on that later) became good friends while attending the Rim of the
        World High School. While Kaitlin and Norman weren&apos;t High School
        sweet-hearts, they reconnected when they both returned to their
        hometowns after college and their enduring friendship quickly became
        more.
      </Text>
      <Text style={{ paddingTop: '30px' }}>
        Norman came with Kaitlin to Utah amid the uncertainty of 2020, where
        they now live in their first house with their two adorable cats. Just as
        Norman supported Kaitlin&apos;s career move that brought her to Utah,
        Kaitlin supported Norman in becoming the successful software engineer he
        is now. They share a large group of friends, hobbies they are passionate
        about, and love the life they are building together.
      </Text>
      <Text>
        They look forward to seeing you in April to celebrate their union and
        lifelong commitment to each other.
      </Text>
      <h3>Why Miao?</h3>
      <Text>
        Miao is pronounced mi&apos;aʊ, like meow. While they do own some cats,
        the source of their new last name is from Norman&apos;s Mother&apos;s
        maiden name!
      </Text>
    </MainContainer>
  );
};

export default Home;
