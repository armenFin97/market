import {IoMdHeart, IoMdHeartEmpty} from "react-icons/io";

import {useState} from "react";
import DeleteIcon from "../icons/DeleteIcon.tsx";
import {del, like} from "../store/prod-slice.ts"
import {useAppDispatch} from "../store/store.ts";

export type Product = {
	id: number,
	creationAt: string,
	description: string,
	images: string[],
	price: number,
	slug: string,
	title: string,
	updatedAt: string,
	fav: boolean,
	category: {
		id: number,
		creationAt: string,
		slug: string,
		updatedAt: string,
		name: string,
	}
}

const ProductCard = ({description, images, price, title, id, fav}: Product) => {

	const [err, setErr] = useState(false);

	const dispatch = useAppDispatch()

	if (err) return null
	return <article className="product-card">

		<h2>{title}</h2>
		<div className="image-container">

			<div className="image-crop">
				<img onError={() => setErr(true)} src={images[0]} alt={description}/>
			</div>
		</div>
		<div className="padding-container">
			<p className="product-card-description">{description}</p>
			<b><span className="controls">
				<span className="heart-icon" onClick={e => {
					e.preventDefault()
					e.stopPropagation()
					dispatch(like(id))
				}}>
					{fav ? <IoMdHeart color="red" width="24" height="24"/> :
						<IoMdHeartEmpty color="red" width="24" height="24"/>}
				</span>
				<span className="delete-icon" onClick={e => {
					e.preventDefault()
					e.stopPropagation()
					dispatch(del(id))
				}}>

				<DeleteIcon width={24}/>
				</span>

			</span>${price}</b>
		</div>
	</article>
}
export default ProductCard;