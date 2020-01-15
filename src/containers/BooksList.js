import React from 'react'
import {connect} from 'react-redux'
import Book from '../components/Book'

function BooksList({books}) {
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
            {console.log(books)}
            {books.map(book =>
              <Book key={book.id} book={book}></Book>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}
export default connect(mapStateToProps)(BooksList);
