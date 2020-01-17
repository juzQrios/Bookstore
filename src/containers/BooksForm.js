import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.bookCategory = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    
    this.titleInput = React.createRef();
    this.categoryInput = React.createRef();
    const [categoryOne] = this.bookCategory
    this.state = {
      title: '',
      category: categoryOne,
      titleError: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({
      title: this.titleInput.current.value,
      category: this.categoryInput.current.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, category } = this.state;
    if (!/\S/.test(title)) {
      this.setState({ titleError: "Title must not contain only whitespaces" })
      return
    }
    const { createBook } = this.props;
    createBook({ title, category });
    this.setState({
      title: '',
      category: 'Action',
      titleError: ''
    })
  }

  render() {
    const { title,titleError}=this.state
    return (
      <div className="container">
        <div className="col-5 mx-auto">
          <form className="form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">
                Title <span>{titleError}</span>
                <input ref={this.titleInput} type="text" className="form-control" name="title" id="title" value={title} required />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="category">
                Category
                <select ref={this.categoryInput} className="form-control" value={this.state.category}>
                  {this.bookCategory.map(val => <option key={val}>{val}</option>)}
                </select>
              </label>
            </div>
            <button type="submit" className="btn btn-secondary">submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createBook: (book) => {
    dispatch(createBook(book));
  },
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
