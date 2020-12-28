import React from 'react';
import './MainBoard.css'

class MainBoard extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         squares: Array(9).fill(null),
         count: 0,
         showButton: false,
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
         [2, 4, 6],
      ]
   }

   reset = () => {
      this.setState({ squares: Array(9).fill(null) });
      this.setState({ count: 0 });
      this.setState({ showButton: false });
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
               this.setState({ showButton: true });
            }, 500);
            break;
         }
         // победа одного
         if (this.state.squares[line[0]] === winLine
            && this.state.squares[line[1]] === winLine
            && this.state.squares[line[2]] === winLine) {
            alert(winLine + ' Победил');
            setTimeout(() => {
               this.setState({ showButton: true });
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

   renderSquares = () => {
      return this.state.squares.map((item, index) => {
         return (
            <div
               className="game-grid"
               onClick={this.clickHandler}
               data={index}
               key={index}
            >
               {this.state.squares[index]}
            </div>
         )
      })
   }

   render() {
      return (
         <div className="MainBoard">
            <div>
               {this.renderSquares()}
            </div>
            {this.state.showButton && (
               <div>
                  <button id="GameOver" onClick={this.reset}>
                     Eще?
               </button>
               </div>
            )}
         </div>
      )
   }
}

export default MainBoard;

