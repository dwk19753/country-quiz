import { useEffect, useState } from 'react';
import Card from './Card';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,population,flags')
      .then((res) => res.json())
      .then((data) => {
        const simplified = data.map(country => ({
          name: country.name.common,
          population: country.population,
          flagUrl: country.flags.png,
        }));
        setCountries(simplified);
      })
      .catch((error) => {
        console.error('Failed to fetch countries:', error);
      });
  }, []);

  const randomCountry = countries.length > 0 ? countries[0] : null;

  return (
    <div>
      {randomCountry && (
        <Card country={randomCountry} onClick={() => alert(`You clicked ${randomCountry.name}`)} />
      )}
    </div>
  );
}

export default App;
