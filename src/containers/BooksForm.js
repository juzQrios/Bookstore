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

    this.state = {
      title: '',
      category: this.bookCategory[0],
    };
  }

  handleChange = () => {
    this.setState({
      title: this.titleInput.current.value,
      category: this.categoryInput.current.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    createBook({ title, category });
    this.titleInput.current.value = '';
    this.categoryInput.current.value = this.bookCategory[0];
  }

  render() {
    return (
      <div className="container">
        <div className="col-5 mx-auto">
          <form className="form" onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">
                Title
                <input ref={this.titleInput} type="text" className="form-control" name="title" id="title" />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="category">
               Category
                <select ref={this.categoryInput} className="form-control">
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
  createBook: book => {
    dispatch(createBook(book));
  },
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
