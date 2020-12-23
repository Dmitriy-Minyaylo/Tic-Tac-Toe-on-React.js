import React from 'react';
import './font/fa.5/css/all.css';
import './StartScreen.css'

export default class StartScreen extends React.Component {
   constructor(props) {
      super(props);
      this.hideStartScreen = this.hideStartScreen.bind(this);
   }
   hideStartScreen() {
      console.log("work");
      document.querySelector('#StartScreen').style.display = "none";
      document.querySelector('#GameOver').style.display = "none";
      document.querySelector('.MainBoard').style.display = "block";
   }
   render() {
      return (
         <div id="StartScreen">
            <div id="button" >
               <button id="startButton" onClick={this.hideStartScreen}>
                  <i className="fab fa-xbox"></i>
               </button>
            </div>
         </div >
      )
   }
}
