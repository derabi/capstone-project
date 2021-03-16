import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import fussballImage1 from './fussballImage1.png';
import { IconContext } from 'react-icons'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillCalendar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'


//Funktion, um Details zu laden:
const ProductDetails = () => {
    const { id } = useParams();
    const { data:product, isPending } = useFetch('http://localhost:8000/products/' + id);
    const history = useHistory();


    //Funktionen, um Änderungen auf der Seite vorzunehmen:
    const handleClick = () => {
        fetch('http://localhost:8000/products/' + product.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }    
    
    return ( 
        <div className="product-details">
            {isPending && <div>Loading...</div>}
            {product && (
                <article className="">
                    <h3>{product.title}</h3>
                    <img src={fussballImage1} />
                    <h3>Preis: {product.price}€</h3>
                    <p>Ort: {product.city}</p>
                    <button>Buchen</button>
                    <div><p>Beschreibung: {product.body}</p></div>
                </article>
            )}
        </div>
     );

}


 
export default ProductDetails;