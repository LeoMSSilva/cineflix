import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const Home = () => {
  return (
    <div className="flex h-screen w-full flex-col justify-between">
      <header className="4xl:w-[2150px] mt-20 flex w-[90vw] flex-col items-center justify-around xl:w-[1200px]">
        <Header />
      </header>
      <footer className="4xl:w-[2150px] flex w-[90vw] flex-col items-center justify-around xl:w-[1200px] ">
        <Footer />
      </footer>
    </div>
  );
};
