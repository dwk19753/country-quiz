import { useEffect, useState } from 'react';

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

  return (
    // Fetch 2 countries
    // Comment to test adding stuff
    <div>
      <Card>{countries[0]}</Card>
      <Card>{countries[1]}</Card>
    </div>
  );
}

export default App;
