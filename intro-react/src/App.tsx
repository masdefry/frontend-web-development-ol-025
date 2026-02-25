import CardProgram from './components/CardProgram';
import styles from './App.module.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <h1 className={styles.hello}>Home Page</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          width: '100vw',
          gap: '10px',
        }}
      >
        <CardProgram
          programName='Web Development'
          imageUrl='https://thumb.viva.id/vivajabar/665x374/2025/08/04/6890103dbae05-kucing-lucu_jabar.jpg'
        />
        <CardProgram programName='Data Science' imageUrl='' />
        <CardProgram programName='Digital Marketing' imageUrl='' />
        <CardProgram programName='Visual Design' imageUrl='' />
      </div>
      <nav>
        <Link to={'/profile'}><p>Go to Profile</p></Link>
      </nav>
    </>
  );
}

export default HomePage;
