import { Layout } from "../../components/Layout/Layout.jsx";
import "./Info.css";

const Info = () => {
  return (
    <Layout>
      <div className="info-container text-center mt-5">
        <h1>Información sobre el Mundo Mágico</h1>
        <p>
          Sumérgete en los secretos del universo de Harry Potter. Aprende sobre las casas de 
          Hogwarts, las criaturas mágicas, los hechizos más poderosos y mucho más.
        </p>
        <img
          src="https://www.unpause.asia/wp-content/uploads/Hogwarts-Legacy-Portkey-Games-Avalanche-Studios-Houses-Gryffindor-Slytherin-Ravenclaw-Hufflepuff.jpg"
          alt="Casas de Hogwarts"
          className="img-fluid rounded shadow-lg mt-4"
          width="600"
        />
        <div className="mt-4">
          <p>Explora y descubre datos fascinantes sobre este increíble mundo de magia.</p>
          <a 
            href="https://www.harrypotter.com/news/discover-your-hogwarts-house-on-wizarding-world" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary mt-3"
          >
            Más información en Wikipedia
          </a>
        </div>
      </div>
    </Layout>
  );
};

export { Info };

