import "./create.style.scss"

import {add} from "../store/prod-slice.js"
import {useAppSelector, useAppDispatch} from "../store/store.js";
import {useState} from "react";

const Create = () => {

  const [prod, setProd] = useState({
    title: "",
    description: "",
    price: "",
    category: {
      name: ""
    },
    images: []
  })
  const productCategories = Array.from(new Set(useAppSelector(state => state.products).map(prod => prod.category.name)))
  const dispatch = useAppDispatch();

  function handleChange(e:  React.BaseSyntheticEvent){

    switch(e.target.name){
      case "images":
        setProd({
          ...prod,
          images: e.target.files
        })
        break
      case "category":
        setProd({
          ...prod,
          category: {name: e.target.value}
        })
        break
      default:
        setProd({
          ...prod,
          [e.target.name]: e.target.value
        })

    }

  }

  function handleSubmit(e: React.BaseSyntheticEvent){
    e.preventDefault()
    const date = new Date().toISOString()
    const id = Math.floor(Math.random() * 10000000000)
    const newProd = Object.assign({...prod}, {
        id,
        creationAt: date,
        updatedAt: date,
        fav: false,
        slug: id,
        category: {
          ...prod.category,
          slug: prod.category.name.toLowerCase(),
          creationAt: "2025-03-28T14:47:07.000Z",
          updatedAt: "2025-03-28T14:47:07.000Z"
        }

      }
    )

    const p = Object.values(newProd.images).map((img) => new Promise(res => {
      const fReader = new FileReader()
      fReader.readAsDataURL(img)
      fReader.onload = () => res(fReader.result)
    }))

    Promise.all(p).then(imageData => {

      // @ts-ignore
      newProd.images = imageData
      dispatch(add(newProd))

    })
    console.log(newProd)
  }

  return <section>
    <form onSubmit={handleSubmit} onChange={handleChange} action="" className="create-product">
      <input name="title" type="text" placeholder="Title"/>
      <textarea name="description" placeholder="Description"></textarea>
      <input name="price" type="number" placeholder="Price"/>

      <div className="input-container">
        <input type="file" name="images" multiple/>

        <select name="category">
          {productCategories.map(prod => <option key={prod} value={prod.toLowerCase()}>{prod}</option>)}
        </select>
      </div>
      <input type="submit" value="Add Product"/>
    </form>
  </section>
}
export default Create;