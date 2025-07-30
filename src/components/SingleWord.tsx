import type { DictionaryWord } from '../types';

type Props = {
  singleWord: DictionaryWord;
};

const SingleWord = ({ singleWord }: Props) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-2">
        {singleWord.word}
      </h2>
      <p className="text-gray-800 mb-2">{singleWord.description}</p>
      <p className="text-sm italic text-gray-500">Przykład: {singleWord.example}</p>
    </div>
  );
};

export default SingleWord;
