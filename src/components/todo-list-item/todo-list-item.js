import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  state = {
    done: false,
  };

  onLabelClick = () => {
    this.setState({
      done: true,
    });
  };

  render() {
    const { label, important = false } = this.props;

    const { done } = this.state;

    let ClassName = 'todo-list-item';
    if (done) {
      ClassName += ' done';
    }
    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal',
    };

    return (
      <span className={ClassName}>
        <span
          className="todo-list-item-label"
          style={style}
          onClick={this.onLabelClick}
        >
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
