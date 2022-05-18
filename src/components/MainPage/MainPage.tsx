import { FC } from 'react';

// Components
import {
  Header,
  Intro,
  TopOffer,
  Advantages,
  Reviews,
  Contacts,
} from '../';

export const MainPage: FC = () => (
  <>
    <Header />
    <main>
      <Intro />
      <TopOffer />
      <Advantages />
      <Reviews />
      <Contacts />
    </main>
  </>
);
