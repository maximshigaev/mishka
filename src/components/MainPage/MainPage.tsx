import { FC } from 'react';

// Components
import {
  Header,
  Intro,
  TopOffer,
  Advantages,
  Reviews,
  Contacts,
  Footer,
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
      <Footer />
    </main>
  </>
);
