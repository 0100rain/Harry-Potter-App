import { Layout } from "../../components/Layout/Layout.jsx";
import "./Home.css";
const Home = () => {
  return (
    <Layout>
      <div className="home-container text-center mt-5">
        <h1>Bienvenido al Mundo Mágico de Harry Potter</h1>
        <p>
          Explora el universo de Harry Potter, descubre información sobre tus personajes favoritos,
          aprende sobre las casas de Hogwarts y revive los mejores momentos de la saga.
        </p>
        <img
          src="https://th.bing.com/th/id/R.c604283ab42d6394b39bd164dfb1c059?rik=u%2fXy82akIia4jQ&riu=http%3a%2f%2forig02.deviantart.net%2f3a85%2ff%2f2013%2f217%2f4%2f4%2f44e5f47e6158f9b7d3479ebed2ec663d-d6guoeq.jpg&ehk=rgXHtxqANqHHI4NdL3QuYempnl94FtHxCDqb78hwy2I%3d&risl=&pid=ImgRaw&r=0"
          alt="Hogwarts"
          className="img-fluid rounded shadow-lg mt-4"
          width="600"
        />
        <div className="mt-4">
          <p>¡Empieza tu aventura explorando las secciones de la web!</p>
        </div>
      </div>
    </Layout>
  );
};

export { Home };

