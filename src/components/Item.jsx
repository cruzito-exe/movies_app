import defaultImage from '/defaultImage.png';
import {Link} from 'react-router-dom';

const Item = ({id, title, type, year, poster}) => {

 let image = poster === 'N/A' ? defaultImage : poster ;
 
 return (
  <Link to={`/movies/${id}`} style={{color: 'inherit', textDecoration: 'none'}}>
   <article>
    <div className="item" style={{backgroundImage: `url(${image})`}}>
     <div className="info">
      <h5> <strong> {title} </strong> </h5>
      <p className='row-info'> <span> {type} </span> <span> {year} </span> </p>
     </div>
    </div>
  </article>
  </Link>
 );
}

export default Item;