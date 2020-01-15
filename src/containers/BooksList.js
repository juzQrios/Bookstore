import React from 'react'
import Book from '../components/Book'

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
            <Book book={
              {
                id: 1,
                title: "Harry Potter",
                category: "I have no idea"
              }
            } />
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BooksList;
