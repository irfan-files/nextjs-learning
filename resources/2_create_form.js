import { useState, useEffect } from "react";

const MovieCreateform = (props) => {
  const [isinitialDataLoaded, setIsInitialDataLoaded] = useState(false);
  const defaultData = {
    name: "",
    description: "",
    longdescription: "",
    raing: "",
    cover: "",
    image: "",
  };

  const formData = props.initialData ? { ...props.initialData } : defaultData;

  const [form, setForm] = useState(formData);

  useEffect(() => {
    if (props.initialData) {
      setForm(props.initialData);
      setIsInitialDataLoaded(true);
    }
  }, [isinitialDataLoaded]);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;

    setForm({
      ...form,
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

    setForm({
      ...form,
      genre: value.toString(),
    });
  };

  const submitForm = () => {
    props.handleFormSubmit({ ...form });
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          value={form.name}
          type="text"
          name="name"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Lord of the Rings"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          onChange={handleChange}
          value={form.description}
          type="text"
          name="description"
          className="form-control"
          id="description"
          placeholder="Somewhere in Middle-earth..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input
          onChange={handleChange}
          form={form.rating}
          type="number"
          max="5"
          name="rating"
          min="0"
          className="form-control"
          id="rating"
          placeholder="3"
        />
        <small id="emailHelp" className="form-text text-muted">
          Max: 5, Min: 0{" "}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          onChange={handleChange}
          value={form.image}
          type="text"
          name="image"
          className="form-control"
          id="image"
          placeholder="http://....."
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          onChange={handleChange}
          value={form.cover}
          type="text"
          name="cover"
          className="form-control"
          id="cover"
          placeholder="http://......"
        />
      </div>
      <div className="form-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea
          onChange={handleChange}
          name="longdescription"
          className="form-control"
          id="longDesc"
          rows="3"
          value={form.longdescription}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          onChange={handleGenreChange}
          multiple
          className="form-control"
          id="genre"
        >
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>

      <button onClick={submitForm} className="btn btn-primary">
        {props.submitButton || "Create"}
      </button>
    </form>
  );
};

export default MovieCreateform;
