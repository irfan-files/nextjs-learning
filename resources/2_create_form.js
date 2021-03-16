import { useState } from "react";

const MovieCreatehtmlform = (props) => {
  const [htmlform, sethtmlform] = useState({
    name: "",
    description: "",
    longdescription: "",
    raing: "",
    cover: "",
    image: "",
  });

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;

    sethtmlform({
      ...htmlform,
      [name]: target.value,
    });
  };

  const handleGenreChange = (event) => {
    const { options } = event.target;
    const optionLength = options.length;
    let value = [];

    for (let i = 0; i < optionLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    sethtmlform({
      ...htmlform,
      genre: value.toString(),
    });
  };

  const submithtmlform = () => {
    props.handleFormSubmit({ ...htmlform });
  };

  return (
    <form>
      {JSON.stringify(htmlform)}
      <div className="htmlform-group">
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          value={htmlform.name}
          type="text"
          name="name"
          className="htmlform-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Lord of the Rings"
        />
      </div>
      <div className="htmlform-group">
        <label htmlFor="description">Description</label>
        <input
          onChange={handleChange}
          value={htmlform.description}
          type="text"
          name="description"
          className="htmlform-control"
          id="description"
          placeholder="Somewhere in Middle-earth..."
        />
      </div>
      <div className="htmlform-group">
        <label htmlFor="description">Rating</label>
        <input
          onChange={handleChange}
          htmlform={htmlform.rating}
          type="number"
          max="5"
          name="rating"
          min="0"
          className="htmlform-control"
          id="rating"
          placeholder="3"
        />
        <small id="emailHelp" className="htmlform-text text-muted">
          Max: 5, Min: 0{" "}
        </small>
      </div>
      <div className="htmlform-group">
        <label htmlFor="image">Image</label>
        <input
          onChange={handleChange}
          value={htmlform.image}
          type="text"
          name="image"
          className="htmlform-control"
          id="image"
          placeholder="http://....."
        />
      </div>
      <div className="htmlform-group">
        <label htmlFor="cover">Cover</label>
        <input
          onChange={handleChange}
          value={htmlform.cover}
          type="text"
          name="cover"
          className="htmlform-control"
          id="cover"
          placeholder="http://......"
        />
      </div>
      <div className="htmlform-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea
          onChange={handleChange}
          name="longdescription"
          className="htmlform-control"
          id="longDesc"
          rows="3"
          value={htmlform.longdescription}
        ></textarea>
      </div>
      <div className="htmlform-group">
        <label htmlFor="genre">Genre</label>
        <select
          onChange={handleGenreChange}
          multiple
          className="htmlform-control"
          id="genre"
        >
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>

      <button onClick={submithtmlform} className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default MovieCreatehtmlform;
