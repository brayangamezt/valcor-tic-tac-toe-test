import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content';

export const Cell = ({handlePlayer, number, player, cell, playerWinner}) =>{

    const checkWinner = () =>{
        let results = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
    
        for(let result of results){
          const [first, second, third] = result;
    
          if(cell[first] && cell[second] && cell[third]){
            if( cell[first] === cell[second] && cell[second] === cell[third] ){
                Swal.fire({
                    title: "Congratulations",
                    text: `The player ${player} has won`,
                    icon: "success"
                });
                playerWinner();
                return;
            }
          }
    
        }
    }
  
    const handleTurn = () =>{
        handlePlayer(player,number);
        checkWinner();
    }
  
    return(
      <td className='cell' onClick={ handleTurn } > { cell[number] } </td>
    )
  
}