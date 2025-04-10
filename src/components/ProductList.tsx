import "./productlist.style.scss"
import {useState} from "react"

import ProductCard from "./ProductCard.tsx";
import {Link} from "react-router";
import {useAppSelector} from "../store/store.ts";

const ProductList = () => {

    const [showFavourites, setShowFavourites] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);

    const products = useAppSelector(state => {
        return showFavourites ? state.products.filter(prod => prod.fav) : state.products
    })

    const paginationCount = 6;
    const totalPages = Math.ceil(products.length / paginationCount);

    const startIndex = (currentPage - 1) * paginationCount;
    const paginatedRecord = products.slice(startIndex, startIndex + paginationCount);

    const paginationBtns = Array.from({length: totalPages}, (_, i) => i + 1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const toggleFavourites = () => {
        setShowFavourites(prev => !prev);
        setCurrentPage(1);
    };


    return <section>
        <nav className="productlistnav">
            <div onClick={toggleFavourites} className={`toggle${showFavourites ? " active" : ""}`}>
            </div>
        </nav>
        <section className="productlist">
            {paginatedRecord.map(product => <Link to={String(product.id)} key={product.id}>
                <ProductCard  {...product} />
            </Link>)}
        </section>
        <div className="pagination-wrapper">
            {paginationBtns.map(page => (
                <button
                    key={page}
                    className={`pagination-btn${currentPage === page ? " active" : ""}`}
                    onClick={() => handlePageChange(page)}>
                    {page}
                </button>
            ))}
        </div>
    </section>
}
export default ProductList;