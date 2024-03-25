import { useState } from "react";
import { Cell } from './';

export const Square = () => {

  const [ valueCell, setValueCell ] = useState( new Array(9).fill('') );
  const [ player, setPlayer ] = useState('X');
  const [ winner, setWinner ] = useState(false);

  const changePlayer = (currentPlayer, number) =>{

    if(valueCell[number]){
      alert('Cell not available');
      return;
    }

    valueCell[number]=currentPlayer;
    currentPlayer === 'X' ? setPlayer('O') : setPlayer('X');

  }

  const resetGame = () =>{ 
    setValueCell( new Array(9).fill('') );
    setPlayer('X');
    setWinner(false);
  }

  const checkWinner = () =>{
    setWinner(true);
  }


  return (
    <div className='squareStyles' > 
      <h1 style={{textAlign:'center'}} > Player turn: {player} </h1>
      <table>
        <tbody>
          <tr>
            <Cell number={0} player={player} cell = {valueCell} handlePlayer = { changePlayer } playerWinner= { checkWinner }  />
            <Cell number={1} player={player} cell = {valueCell} handlePlayer = { changePlayer } playerWinner= { checkWinner }  />
            <Cell number={2} player={player} cell = {valueCell} handlePlayer = { changePlayer } playerWinner= { checkWinner }  />
          </tr>
          <tr>
            <Cell  number={3} player={player} cell = {valueCell} handlePlayer = { changePlayer } playerWinner= { checkWinner }  />
            <Cell  number={4} player={player} cell = {valueCell} handlePlayer = { changePlayer } playerWinner= { checkWinner }  />
            <Cell  number={5} player={player} cell = {valueCell} handlePlayer = { changePlayer } playerWinner= { checkWinner }  />
          </tr>
          <tr>
            <Cell  number={6} player={player} cell = {valueCell} handlePlayer = { changePlayer } playerWinner= { checkWinner }  />
            <Cell  number={7} player={player} cell = {valueCell} handlePlayer = { changePlayer } playerWinner= { checkWinner }  />
            <Cell  number={8} player={player} cell = {valueCell} handlePlayer = { changePlayer } playerWinner= { checkWinner }  />
          </tr>
        </tbody>
      </table>
      <div className="button-container">
        { winner && <button onClick={ resetGame } > Play again </button> }
      </div>
    </div>
  )
}
