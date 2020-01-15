const initialState = {
  books: [
    {
      id: Math.random,
      title: "Harry Potter",
      category: "Kids"
    }
  ]
};

const bookReducer = (state = initialState, action) => {
  switch(action.type) {
    case "CREATE_BOOK": return {
      ...state,
      books: [
        ...state.books,
        {
          id: Math.random(),
          title: action.title,
          category: action.category
        }
      ]
    };
    case "REMOVE_BOOK": return {
      ...state,
      books: state.books.filter( book=> book.id!==action.id )
    };
    default: return state;
  }
}

export default bookReducer;
