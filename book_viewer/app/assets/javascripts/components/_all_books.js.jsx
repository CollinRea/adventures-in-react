var AllBooks = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  onUpdate(book) {
    this.props.onUpdate(book);
  },

  render() {
    var books= this.props.books.map((book) => {
      return (
        <div key={book.id}>
          <Book book={book}
                handleDelete={this.handleDelete.bind(this, book.id)}
                handleUpdate={this.onUpdate} />
        </div>
      )
    });
    return (
      <div>
        {books}
      </div>
    )
  }
});