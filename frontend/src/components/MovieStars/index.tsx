import { ReactComponent as StarFull } from 'assets/starfull.svg';
import { ReactComponent as StarHalf } from 'assets/starhalf.svg';
import { ReactComponent as StarEmpty } from 'assets/starempty.svg';
import Star from 'components/Star';

type Props = {
     score: number;
}

//EX:
//getFills(3.5) => [1,1,1,0.5,0]
function getFills(score: number) {
     const fills = [0, 0, 0, 0, 0];
     const integerPart = Math.floor(score);

     for(let i=0; i < integerPart; i++){
          fills[i] = 1;
     }

     const diff = score - integerPart;
     if (diff > 0){
          fills[integerPart] = 0.5;
     }

     return fills;
}

function MovieStars( {score} : Props) {

     const fills = getFills(score);

     return (
          <div className="dsmovie-stars-container">
               <Star star={fills[0]} />
               <Star star={fills[1]} />
               <Star star={fills[2]} />
               <Star star={fills[3]} />
               <Star star={fills[4]} />
          </div>
     );
}

export default MovieStars;