import React, { Component } from 'react'

class Counter extends Component {
    styles = {
        fontSize: 30,
        fontWeight: 'bold'
    };

    render() {
        const { counter, onIncrement, onDecrement, onDelete } = this.props;

        return (
            <div>
                <h1>#Counter {counter.id}</h1>
                <span
                    style={this.styles}
                    className={this.getBadgeClasses(counter)}
                >
                    {this.formatCount(counter)}
                </span>

                <button
                    onClick={() => onIncrement(counter)}
                    className='btn btn-secondary btn-sm'
                >
                    Increment
                </button>

                <button
                    onClick={() => onDecrement(counter)}
                    className="btn btn-warning btn-sm m-2"
                >
                    Decrement
                </button>

                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => onDelete(counter.id)}
                >
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses(counter) {
        let classes = 'badge m-2 badge-';
        const value = counter.value;
        if (value === 0) {
            classes += 'warning';
        }

        if (value > 0) {
            classes += 'primary'
        }

        if (value < 0) {
            classes += 'danger'
        }

        return classes;
    }

    formatCount(counter) {
        const { value } = counter;
        return value === 0 ? 'Zero' : value
    }
}

export default Counter;