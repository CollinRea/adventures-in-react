var AllBooks = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  render() {
    var books= this.props.books.map((book) => {
      return (
        <div key={book.id}>
          <h3>{book.name}</h3>
          <p>{book.content}</p>
          <button onClick={this.handleDelete.bind(this, book.id)}>Delete</button>
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