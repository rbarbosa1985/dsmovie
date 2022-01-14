import { ReactComponent as StarFull } from 'assets/starfull.svg';
import { ReactComponent as StarHalf } from 'assets/starhalf.svg';
import { ReactComponent as StarEmpty } from 'assets/starempty.svg';

type Props = {
    star: number;
}

function Star( {star} : Props) {
    if (star === 0){
        return (
            <StarEmpty />
        );
    } else if (star === 1){
        return (
            <StarFull />
        );
    }else {
        return (
            <StarHalf />
        );
    }
}

export default Star;