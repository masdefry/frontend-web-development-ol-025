function CardProgram(props: any) {
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
          src={props?.imageUrl}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <h1>{props?.programName}</h1>
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