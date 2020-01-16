import React from 'react';
import PropTypes from 'prop-types';

function Book({ book }) {
  return (
    <tr>
      <th scope="col">{ book.id }</th>
      <th scope="col">{ book.title }</th>
      <th scope="col">{ book.category }</th>
    </tr>
  );
}
Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
