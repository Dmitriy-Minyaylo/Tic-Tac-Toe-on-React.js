import React from 'react';
import './MainBoard.css'

class MainBoard extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         squares: Array(9).fill(null),
         count: 0
      }
      // вложенный массив с победными комбинациями
      this.winnerLine = [
         [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6]
      ]
   }

   default = () => {
      this.setState({ squares: Array(9).fill(null) });
      this.setState({ count: 0 })
      document.querySelector('#GameOver').style.display = "none";
   }

   isWinner = () => {
      let winLine = (this.state.count % 2 === 0) ? 'X' : 'O';
      // цикл для перебора победных комбинаций
      for (let i = 0; i < 8; i++) {
         let line = this.winnerLine[i];
         // проверка на ничью
         if (!this.state.squares.includes(null)) {
            alert(' Ходов больше нет - НИЧЬЯ :`( ');
            setTimeout(() => {
               document.querySelector('#GameOver').style.display = "block";
            }, 500);
            break;
         }
         // победа одного
         if (this.state.squares[line[0]] === winLine
            && this.state.squares[line[1]] === winLine
            && this.state.squares[line[2]] === winLine) {
            alert(winLine + ' Победил');
            setTimeout(() => {
               document.querySelector('#GameOver').style.display = "block";
            }, 1500);
            break;
         }
      }
   }

   clickHandler = event => {
      // data - номер квадрата по которому мы кликнули
      let data = event.target.getAttribute('data');
      // игровое поле
      let currentSquares = this.state.squares;
      // проверка на клик по одной ячейке
      if (currentSquares[data] === null) {
         // чередование ходов X, следом O
         currentSquares[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
         // кол-во ходов увеличиваем при клике
         this.setState({ count: this.state.count + 1 });
         // задаем новое значение в state
         this.setState({ squares: currentSquares });
      } else {
         alert('Выбери пустую ячейку!!!')
      }
      this.isWinner();
   }

   render() {
      return (
         <div className="MainBoard">
            <div>
               <div className="game-grid" onClick={this.clickHandler} data="0">{this.state.squares[0]}</div>
               <div className="game-grid" onClick={this.clickHandler} data="1">{this.state.squares[1]}</div>
               <div className="game-grid" onClick={this.clickHandler} data="2">{this.state.squares[2]}</div>
               <div className="game-grid" onClick={this.clickHandler} data="3">{this.state.squares[3]}</div>
               <div className="game-grid" onClick={this.clickHandler} data="4">{this.state.squares[4]}</div>
               <div className="game-grid" onClick={this.clickHandler} data="5">{this.state.squares[5]}</div>
               <div className="game-grid" onClick={this.clickHandler} data="6">{this.state.squares[6]}</div>
               <div className="game-grid" onClick={this.clickHandler} data="7">{this.state.squares[7]}</div>
               <div className="game-grid" onClick={this.clickHandler} data="8">{this.state.squares[8]}</div>
            </div>
            <div>
               <button id="GameOver" onClick={this.default}>
                  Eще?
               </button>
            </div>
         </div>
      )
   }
}

export default MainBoard;

