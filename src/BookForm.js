import React, { Component } from "react";
import { connect } from 'react-redux';

import * as actionCreators from "./store/actions/index"

class BookForm extends Component {
  state = {
    title: "",
    color: ""
  }


  textChangeBookHandler = event => this.setState({ [event.target.name]: event.target.value })




  submitBook = event => {
    event.preventDefault();
    this.props.postBook(this.state, this.props.author, this.props.closeModal);
  };



  render() {
    const errors = this.props.errors;

    return (

      <div className="mt-5 p-2">
        <form onSubmit={this.submitBook}>
          {!!errors.length && (
            <div className="alert alert-danger" role="alert">
              {errors.map(error => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Title</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={this.textChangeBookHandler}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Color</span>
            </div>
            <select
              name="color"
              className="form-control"
              onChange={this.textChangeBookHandler}
            >
              <option value="">----</option>
              <option value="white">White</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="black">Black</option>
              <option value="grey">Grey</option>
              <option value="purple">Purple</option>
            </select>
          </div>
          <input type="submit" />
        </form>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    errors: state.rootErrors.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postBook: (newBook, author, closeModal) =>
      dispatch(actionCreators.postBook(newBook, author, closeModal)),
    resetErrors: () => dispatch(actionCreators.resetErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookForm);