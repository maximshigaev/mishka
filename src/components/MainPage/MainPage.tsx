import { FC } from 'react';

// Components
import {
  Header,
  Intro,
  TopOffer,
} from '../';

export const MainPage: FC = () => (
  <>
    <Header />
    <main>
      <Intro />
      <TopOffer />
    </main>
  </>
);
