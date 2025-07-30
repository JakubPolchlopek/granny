const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      <pre className="text-6xl select-none mb-6" aria-hidden="true">
        {`
  (╯°□°）╯︵ ┻━┻
`}
      </pre>
      <h1 className="text-4xl font-extrabold text-red-600 mb-4">
        Ups! Coś poszło nie tak...
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-md">
        Strona, której szukasz, chyba się obraziła i postanowiła się schować.
        Ale spoko, nie gniewaj się! Możesz wrócić do&nbsp;
        <a href="/" className="text-indigo-600 hover:underline">
          strony głównej
        </a>{" "}
        albo spróbować jeszcze raz.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
        Odśwież stronę
      </button>
    </div>
  );
};

export default ErrorPage;
