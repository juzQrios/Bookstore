import React from 'react';
import PropTypes from 'prop-types';

function Book({ book, clickDelete }) {
  return (
    <tr>
      <th scope="col">{ book.id }</th>
      <th scope="col">{ book.title }</th>
      <th scope="col">{book.category}</th>
      <th scope="col"><button type="button" className="btn btn-danger" onClick={() => clickDelete(book.id)}>delete</button></th>
    </tr>
  );
}
Book.propTypes = {
  book: PropTypes.object.isRequired,
  clickDelete: PropTypes.func.isRequired,
};

export default Book;
