import React from 'react'
// It should connect to the Redux store and fetch the books from the state.
function BooksList() {
  return (
    <div className="container BooksList">
      <div className="mx-auto col-8 shadow-lg mt-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Book-Id</th>
              <th scope="col">Title</th>
              <th scope="col">category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">1</th>
              <th scope="col">Harry Potter</th>
              <th scope="col">I Have no Idea</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BooksList;
