import './ProductsList.css'
import Detail from '../Detail/Detail'

export default function ProductsList(props){

    const {data: products} = props;
    
    

   
    return(
        <div className="product-list__container">

                {products.map((product) => (
                   <div key = {product.id} className="card tamaCard">
                        <img src={product.img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.price}</p>
                        <Detail  label= {product.detail}/>
                                        <p className="card-text"></p>
                                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
                ))}
  
        </div>

    )   
}