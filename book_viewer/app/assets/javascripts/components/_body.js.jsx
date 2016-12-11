var Body = React.createClass({
  getInitialState() {
    return { books: [] }
  },

  componentDidMount() {
    console.log('Component mounted');
    $.getJSON('/api/v1/books.json',
      (response) => { this.setState({ books: response }) }
    );
  },

  removeBookClient(id) {
    var newBooks = this.state.books.filter((book) => {
      return book.id != id;
    });
    this.setState({ books: newBooks });
  },

  updateBooks(book) {
    var books = this.state.books.filter((b)=> { return b.id != book.id});
    books.push(book);

    this.setState({books: books});
  },

  handleSubmit(book) {
    var newState = this.state.books.concat(book);
    this.setState({ books: newState })
  },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/books/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeBookClient(id);
      }
    });
  },

  handleUpdate(book) {
    $.ajax({
      url: `/api/v1/books/${book.id}`,
      type: 'PUT',
      data: { book: book },
      success: () => {
        this.updateBooks(book);
      }
    });
  },

  render() {
    return (
      <div>
        <NewBook handleSubmit={this.handleSubmit} />
        <AllBooks  books={ this.state.books} handleDelete={this.handleDelete} onUpdate={this.handleUpdate} />
        <ViewBook />
      </div>
    )
  }
});

