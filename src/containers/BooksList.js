import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter ';

function BooksList({
  books,
  filter,
  removeBook,
  changeFilter,
}) {
  const handleRemoveBook = (id) => {
    removeBook(id);
  };
  const handleFilterChange = (filter) => {
    changeFilter(filter);
  };
  const getVisibleBooks = (books, filter) => books.filter(book => book.category === filter || filter === 'All');

  const visible = getVisibleBooks(books, filter);
  return (
    <div className="container BooksList">
      <div className="mx-auto col-8 shadow-lg mt-3">
        <div className="p-4">
          <CategoryFilter onFilter={handleFilterChange} />
        </div>
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
            {
              visible.map(book => <Book clickDelete={handleRemoveBook} key={book.id} book={book} />)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});
const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});
BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
