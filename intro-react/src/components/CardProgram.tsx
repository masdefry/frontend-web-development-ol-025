function CardProgram() {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '10px',
        borderRadius: '10px',
      }}
    >
      <div style={{ backgroundColor: 'red', height: '200px' }}>
        <img
          src='https://unair.ac.id/wp-content/uploads/2022/08/kucing.jpg'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <h3>Nama Program</h3>
      <span>Online</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quod
        accusantium perferendis, veritatis ut qui consequuntur enim eius error
        quo ea, culpa facilis earum vitae dolorum sunt vel voluptate eligendi.
      </p>
      <button>Hubungi Kami</button>
    </div>
  );
}

export default CardProgram; 