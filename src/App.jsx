import { useEffect, useState } from 'react';
import Card from './Card';

function App() {
  const [country1, setCountry1] = useState(null);
  const [country2, setCountry2] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,population,flags')
      .then((res) => res.json())
      .then((data) => {
        const simplified = data.map(country => ({
          name: country.name.common,
          population: country.population,
          flagUrl: country.flags.png,
        }));

        // Once countries are loaded, pick two
        const randomPair = getTwoRandomCountries(simplified);
        setCountry1(randomPair[0]);
        setCountry2(randomPair[1]);
      })
      .catch((error) => {
        console.error('Failed to fetch countries:', error);
      });
  }, []);

  const getTwoRandomCountries = (list) => {
    const shuffled = [...list].sort(() => 0.5 - Math.random());
    return [shuffled[0], shuffled[1]];
  };

   return (
    <div>
      {country1 && country2 && (
        <>
          <Card
            country={country1}
            onClick={() => alert(`You clicked ${country1.name}`)}
          />
          <Card
            country={country2}
            onClick={() => alert(`You clicked ${country2.name}`)}
          />
        </>
      )}
    </div>
  );
}

export default App;
