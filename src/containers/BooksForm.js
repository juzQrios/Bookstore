import React from 'react';

function BooksForm() {
  const bookCategory = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div className="container">
      <div className="col-5 mx-auto">
        <form className="form">
          <div className="form-group">
            <label htmlFor="title">
              Title
              <input type="text" className="form-control" name="title" id="title" />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="category">
             Category
              <select className="form-control">
                {bookCategory.map(val => <option key={val}>{val}</option>)}
              </select>
            </label>
          </div>
          <button type="submit" className="btn btn-secondary">submit</button>
        </form>
      </div>
    </div>
  );
}

export default BooksForm;
