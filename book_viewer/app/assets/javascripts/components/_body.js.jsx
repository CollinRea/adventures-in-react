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


  render() {
    return (
      <div>
        <NewBook handleSubmit={this.handleSubmit} />
        <AllBooks books={ this.state.books} handleDelete={this.handleDelete} />
      </div>
    )
  }
});

