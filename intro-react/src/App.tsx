import CardProgram from './components/CardProgram';

function HomePage() {
  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          width: '100vw',
          gap: '10px',
        }}
      >
        <CardProgram />
        <CardProgram />
        <CardProgram />
        <CardProgram />
      </div>
    </>
  );
}

export default HomePage;
