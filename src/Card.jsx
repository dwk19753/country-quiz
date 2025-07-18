function Card({ imageUrl, onClick }) {
  return (
    <div>
      <img
        src={imageUrl}
        alt="Country Card"
        onClick={onClick}
        style={{ cursor: 'pointer', width: '200px', borderRadius: '8px' }}
      />
    </div>
  );
}

export default Card;