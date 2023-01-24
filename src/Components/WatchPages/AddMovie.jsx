import React from "react";

const AddMovie = () => {
  return (
    <form>
      <div className="row text-white">
        <div className="col-12 text-center py-1 h4 text-success">
          Dodaj Film
        </div>
        <div className="col-8 offset-1">
          <input
            type="text"
            className="form-control"
            placeholder="Ime Filma..."
          ></input>
        </div>
        <div className="col-2">
          <button className="btn btn-success form-control">Dodaj</button>
        </div>
        <hr className="mt-3"></hr>
      </div>
    </form>
  );
};

export default AddMovie;
