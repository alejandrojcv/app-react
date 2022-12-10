import { useEffect, useState } from 'react';
import ProductsList from '../ProductsList/ProductsList';
import { GetProducts } from '../../services/products';
import { useParams } from 'react-router-dom';

export default function ItemListContainer(){
  
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect (()=>{
        setProducts([]);
        GetProducts(category)
            .then((prod) => setProducts(prod))
            .catch((error)=>{
                console.error('[Products Service] error - ', error);
                setProducts([]);
            })
    },[category]);
    

    const isProductsEmpty = products.length === 0;
    
    return(
        <div className="products__Container">
            {isProductsEmpty ? (
                <span className="loading">Loading..</span>
            ) : (

                <ProductsList data={products} />
            )}

        </div>
    )
}