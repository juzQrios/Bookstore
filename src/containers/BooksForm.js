import React from 'react'

function BooksForm() {
  const bookCategory = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]
  return (
    <div className="container">
      <div className="col-5 mx-auto">
        <form className="form">
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" name="title" id="title"></input>
          </div>
          <div className="form-group">
            <label>Category</label>
            <select className="form-control">
              {bookCategory.map((val, ind) => <option key={ind}>{val}</option>)}
            </select>
          </div>
          <button type="submit" className="btn btn-secondary">submit</button>
        </form>
      </div>
    </div>
  )
}

export default BooksForm;
