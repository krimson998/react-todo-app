import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
  render() {
    const { addNote } = this.props;

    return (
      <div className="item-add-form">
        <button
          onClick={() => {
            addNote('Some text');
          }}
          className="btn btn-outline-secondary"
        >
          Add a note
        </button>
      </div>
    );
  }
}
