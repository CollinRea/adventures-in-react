var ViewBook = React.createClass ({
  render() {
    return (
      <div>
        <button id="full-screen">Enhance!</button>
        <iframe
          id="pdf-viewer"
          src="http://www.epconcommunities.com/assets/upload/youdontknowjsupandgoing.pdf"
          width="600" 
          height="780" 
          frameBorder='0' 
          allowFullScreen > 
        </iframe>
      </div>
    )
  }
}); 