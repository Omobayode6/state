import React, {Component} from 'react';
import './App.css';


class App extends Component {
  state = { 
    fullName: "Omobayode Festus",
    bio: "A web developer with a very strong visual perception of design, ❤ simplicity, and white spaces.",
    imgSrc: 'https://www.pngitem.com/pimgs/m/146-1468281_profile-icon-png-transparent-profile-picture-icon-png.png',
    profession: "Full Stack Engineer",
    isShow: true,
   }

   toggleShow = ()=>{
    //changing the isShow state to true
    this.setState({ isShow: !this.state.isShow});
   }


  render() { 
    return (
      <div className="App">
        {this.state.isShow && 
        <div>
          <img src= {this.state.imgSrc} alt={this.state.fullName} />
          <h2>{this.state.fullName}</h2>
          <h4>{this.state.profession}</h4>
          <p> {this.state.bio} </p>
        </div>
        }
        
        <button onClick = {this.toggleShow}> {this.state.isShow ? "Click to hide" : "Click to show" }</button>
     </div>
    );
  }
}
 

export default App;
