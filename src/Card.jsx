function Card({ country, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', textAlign: 'center', width: '200px' }}>
      <img src={country.flagUrl} alt={country.name} style={{ width: '100%', borderRadius: '4px' }} />
      <h3>{country.name}</h3>
    </div>
  );
}

export default Card;