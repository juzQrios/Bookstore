const initialState = {
  books: [
    {
      id: 0,
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
          id: state.books.length,
          title: action.title,
          category: action.category
        }
      ]
    };
    case "REMOVE_BOOK": return {
      ...state,
      books: [
        ...state.books.slice(0, action.id),
        ...state.books.slice(action.id + 1)
      ]
    };
    default: return state;
  }
}

export default bookReducer;
