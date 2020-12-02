import React, { Component } from "react";
import "./App.css";
// import axios from "axios";
class App extends Component {
  state = {
    selectedfile: null,
  };
  fileselecteHandler(e) {
    console.log(e.target.files[0]);

    // this.setState({
    //   selectedfile: e.target.files[0],
    // });
  }
  imgLoaded(e) {
    alert(e);
  }
  fileUpload = () => {
    document.querySelector("#myImg").addEventListener("change", function () {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        localStorage.setItem("recent-image", reader.result);
      });
      reader.readAsDataURL(this.files[0]);
    });
    // window.addEventListener("load", function () {
    //   document
    //     .querySelector('input[type="file"]')
    //     .addEventListener("change", function () {
    //       if (this.files[0] && this.files[0]) {
    //         var img = document.getElementById("myImg");
    //         img.src = URL.createObjectURL(this.files[0]);
    //         // img.onload = imgLoaded;
    //       }
    //     });
    // });
  };
  render() {
    return (
      <div className="App">
        <input type="file" id="myImg" onChange={this.fileUpload} />
        <button onClick={this.fileUpload}>Upload</button>
        <br />
        <img src="" width="250" height="250" alt="imgpreview" id="imgPreview" />
      </div>
    );
  }
}
export default App;
