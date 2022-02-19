const Quotes = [
  {
    phrase: 'A mathematician who is not also something of a poet will never be a complete mathematician.',
    author: 'Karl Weierstrass, German mathematician',
  },

  {
    phrase: 'Mathematics compares the most diverse phenomena and discovers the secret analogies that unite them.',
    author: 'Joseph Fourier, French mathematician and physicist',
  },

  {
    phrase: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
    author: 'William Paul Thurston, American mathematician',
  },

  {
    phrase: 'Somehow it’s okay for people to chuckle about not being good at math. Yet, if I said “I never learned to read,” they’d say I was an illiterate dolt.',
    author: 'Neil deGrasse Tyson, American astrophysicist and author',
  },

  {
    phrase: 'In mathematics the art of proposing a question must be held of higher value than solving it.',
    author: 'Georg Cantor, German mathematician',
  },

  {
    phrase: 'It is clear that the chief end of mathematical study must be to make the students think.',
    author: 'John Wesley Young, American mathematician',
  },

  {
    phrase: 'Go down deep enough into anything and you will find mathematics.',
    author: 'Dean Schlicter',
  },

  {
    phrase: 'Nature is written in mathematical language.',
    author: 'Galileo Galilei, Italian astronomer, physicist and engineer',
  },

  {
    phrase: 'Mathematics is a language.',
    author: 'Josiah Willard Gibbs, American scientist',
  },

  {
    phrase: 'Pure mathematics is, in its way, the poetry of logical ideas.',
    author: 'Albert Einstein, German theoretical physicist',
  },

];

const CurrentQuote = () => {
  const i = Math.floor(Math.random() * Quotes.length);
  return (
    <div>
      <p className="phrase">
        {Quotes[i].phrase}
      </p>
      <p className="author">
        {Quotes[i].author}
      </p>
    </div>
  );
};
export default CurrentQuote;
