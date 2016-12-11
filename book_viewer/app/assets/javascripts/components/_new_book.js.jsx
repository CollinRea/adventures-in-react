var NewBook = React.createClass ({
  handleClick() {
    var name = this.refs.name.value;
    var content = this.refs.content.value;
    $.ajax({
      url: '/api/v1/books',
      type: 'POST',
      data: {book: { name: name, content: content }},
      success: (response) => {
        this.props.handleSubmit(response)
        $('button').blur();
      }
    });
  },

  render() {
    return (
      <div id="top-bar">
        <input ref='name' placeholder='Enter the name of the book'/>
        <input ref='content' placeholder='Enter the content' />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});