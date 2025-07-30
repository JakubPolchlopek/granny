import { Link } from 'react-router-dom';
import granny from '../assets/granny.png';

const Hero = () => {
  return (
    <section className="w-full bg-white py-24 px-6 sm:px-12 lg:px-32">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-center gap-16">

        <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left md:pl-16">
          <h1 className="text-6xl font-extrabold leading-tight text-gray-900 mb-6 select-none max-w-[520px]">
            Czujesz zagubienie we{' '}
            <span className="text-indigo-600">współczesnym świecie?</span>
          </h1>
          <p className="text-2xl text-gray-700 mb-10 max-w-md leading-relaxed">
            Spokojnie — mamy poradniki, narzędzia i wsparcie dla każdego pokolenia.{' '}
            <strong>Tak, babciu, dla Ciebie też.</strong>
          </p>
          <Link to="/courses" className="bg-indigo-600 hover:bg-indigo-700 transition-transform transform hover:scale-105 px-5 py-3 rounded-3xl text-white font-semibold focus:outline-none focus:ring-4 focus:ring-indigo-300 ">
            Przeglądaj kursy
          </Link>
        </div>

        <div className="md:w-1/2 flex justify-center lg:justify-end hidden md:flex">
          <img
            src={granny}
            alt="Babcia używa technologii"
            className="w-72 sm:w-96 rounded-3xl"
            loading="lazy"
            draggable={false}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
