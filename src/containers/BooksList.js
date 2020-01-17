import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter '


function BooksList({ books, removeBook }) {
  const handleRemoveBook = (id) => {
    removeBook(id);
  };
  return (
    <div className="container BooksList">
      <div className="mx-auto col-8 shadow-lg mt-3">
        <div className="p-4"><CategoryFilter /></div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Book-id</th>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => <Book clickDelete={handleRemoveBook} key={book.id} book={book} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
}
const mapStateToProps = state => ({
  books: state.books,
});
const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
});
BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
