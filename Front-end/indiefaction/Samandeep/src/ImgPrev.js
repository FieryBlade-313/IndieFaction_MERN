import React from "react";
import ReactDOM from "react-dom";

// import "./ImgPrev.css";

function ImgPrev() {
  return (
    <div className="ImgPrev">
      <h1>Hello INDIEFACTION</h1>
      <p className="mw400 center">
       
      </p>
      <img src="https://i.imgur.com/80Ec3GH.jpg" width="100" />
      <br />
      <em>
        <small>
          <a href="https://i.imgur.com/80Ec3GH.jpg">click to enlarge</a>
        </small>
      </em>
      <blockquote
        style={{
          backgroundColor: "#eee",
          borderRadius: "8px",
          padding: "8px 14px"
        }}
        className="mw400 center"
      >
       
      </blockquote>
      <p>Here's how I plan to do this project:</p>
      <ol className="mw400 center" style={{ textAlign: "left" }}>
        <li>
          Upload the Product - <UploadPreview />
        </li>
        <li>
          Optionally Remove the Background -{" "}
          <a href="https://cloudinary.com/blog/how_to_automatically_and_professionally_remove_photo_backgrounds?utm_source=DWB&utm_medium=Sponsored_Post&utm_term=Paid&utm_campaign=Remove_Background">
            Using Cloudinary
          </a>
        </li>
        <li></li>
        <li>
        </li>
        <li>Draw height lines</li>
      </ol>
    </div>
  );
}

class UploadPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: null };
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
  }
  onChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    });
  }

  resetFile(event) {
    event.preventDefault();
    this.setState({ file: null });
  }
  render() {
    return (
      <div>
        <input type="file" onChange={this.onChange} />
        {this.state.file && (
          <div style={{ textAlign: "center" }}>
            <button onClick={this.resetFile}>Remove File</button>
          </div>
        )}
        <img style={{ width: "100%" }} src={this.state.file} />
      </div>
    );
  }
}

export default ImgPrev;