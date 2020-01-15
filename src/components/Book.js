import React from 'react'

function Book({ book }) {
  return (
    <tr>
      <th scope="col">{ book.id }</th>
      <th scope="col">{ book.title }</th>
      <th scope="col">{ book.category }</th>
    </tr>
  )
}

export default Book;
