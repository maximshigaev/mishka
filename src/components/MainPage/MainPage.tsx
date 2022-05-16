import { FC } from 'react';

// Components
import {
  Header,
  Intro,
  TopOffer,
  Advantages,
} from '../';

export const MainPage: FC = () => (
  <>
    <Header />
    <main>
      <Intro />
      <TopOffer />
      <Advantages />
    </main>
  </>
);
