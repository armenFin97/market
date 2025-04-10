import {Link, useParams} from "react-router";
import {useAppSelector} from "../store/store.ts";
import {useState} from "react";
import "./singleProduct.style.scss"
import {FaCircleArrowLeft, FaCircleArrowRight} from "react-icons/fa6";


const SingleProduct = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const products = useAppSelector(({products}) => products)
    const {id} = useParams()
    if (!id) return <h1>No such product!</h1>

    const prod = products.find(p => p.id === +id)
    if (!prod) return <h1>No such product!</h1>

    const nextImage = () => {
        setCurrentImage(prev => (prev + 1) % prod.images.length);
    };

    const prevImage = () => {
        setCurrentImage(prev => (prev - 1 + prod.images.length) % prod.images.length);
    };

    console.log(prod)
    return <section className="single-product-page">
        <article>
            <div className="back-wrapper">
                <Link to=".." relative="path" className="back-btn">Go Back</Link>
            </div>
            <div className="productInfo">
                <div>
                    <h3>{prod.title}</h3>
                </div>

                <div className="img-wrapper">
                    <img className="img" src={prod.images[currentImage]} alt={prod.description}/>
                    <div className={"img-class-wrapper"}>
                        <button onClick={prevImage} className="img-nav prev"><FaCircleArrowLeft/></button>
                        <button onClick={nextImage} className="img-nav next"><FaCircleArrowRight/></button>
                    </div>
                </div>
                <div className={"txt-wrapper"}>
                    <p className={"txt"}>{prod.description}</p>
                </div>
                <div className={"txt-wrapper"}>
                    <p className={"price"}>The item cost is: <b>{prod.price} $</b></p>
                </div>
            </div>
        </article>
    </section>

}
export default SingleProduct;