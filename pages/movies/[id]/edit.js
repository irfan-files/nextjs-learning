import React from "react";
import router from "next/router";
import MovieCreateForm from "../../../resources/2_create_form";
import { getMovieById, updateMovie } from "../../../actions";
import { Router } from "express";
class EditMovie extends React.Component {
  static async getInitialProps({ query }) {
    const movie = await getMovieById(query.id);

    return { movie };
  }

  handleUpdateMovie = (movie) => {
    updateMovie(movie).then((updateMovie) => {
      // router.push("/");
      Router.push("/movies/[id]", `/movies/${movie.id}`);
    });
  };
  // static getInitialProps({ query }) {

  //   return { query };
  // }

  // state = {
  //   movie: {
  //     name: "",
  //     description: "",
  //     longdescription: "",
  //     raing: "",
  //     cover: "",
  //     image: "",
  //   },
  // };

  // componentDidMount() {
  //   const { id } = this.props.query;
  //   getMovieById(id).then((movie) => {
  //     this.setState({ movie });
  //   });
  // }

  render() {
    const { movie } = this.props;
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        <MovieCreateForm
          submitButton="Update"
          initialData={movie}
          handleFormSubmit={this.handleUpdateMovie}
        />
      </div>
    );
  }
}

export default EditMovie;
