import React from "react";

class BooksComponent extends React.Component {
    render() {
        return (
          <div>
              <ol>
                {this.props.books.map(book =>
                    <li key={book.id}>
                        <div>
                            Id : {book.id}
                        </div>
                        <div>
                            Title : {book.title}
                        </div>
                        <div>
                            Author : {book.author}
                        </div>
                    </li>
                )}
              </ol>
          </div>
        );
    }
}

export default BooksComponent;