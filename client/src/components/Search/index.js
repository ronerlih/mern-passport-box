import React from "react";

function Search({ q, handleInputChange, handleFormSubmit }) {
    return (
    <form>
        <div className="form-group">
        <label htmlFor="Query">
            <strong>Recommendation</strong>
        </label>
        <input
            className="form-control"
            id="reco"
            type="text"
            value={q}
            placeholder="Enter keywords"
            name="q"
            onChange={handleInputChange}
            required
        />
        </div>
        <div className="pull-right">
        <button
            onClick={handleFormSubmit}
            type="submit"
            className="btn btn-lg btn-danger float-right"
        >
            Search
        </button>
        </div>
    </form>
    );
}

export default Search;