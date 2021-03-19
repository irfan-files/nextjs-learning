import { useRouter } from "next/router";
import Link from "next/router";
import { getMovieById, deleteMovie } from "../../../actions";

const Movie = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const { movie } = props;

  const handleDeleteMovie = () => {
    deleteMovie(id).then(() => {});
    router.push("/");
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <img
          src={movie.image}
          className="img-fluid"
          alt="Responsive image"
        ></img>
        <hr className="my-4" />
        <p>{movie.description}</p>
        <p>{movie.longdescription}</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
        <a
          onClick={() => handleDeleteMovie(id)}
          className="btn btn-danger btn-lg mr-1"
          href="#"
          role="button"
        >
          Delete
        </a>
        <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
          <button className="btn btn-warning btn-lg" role="button">
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};

Movie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id);

  return { movie };
};

export default Movie;
