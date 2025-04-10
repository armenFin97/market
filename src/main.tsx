import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux"
import store from "./store/store.ts";




import {createBrowserRouter, RouterProvider} from "react-router";
import {Home, ProductList, SingleProduct, Create} from "./components"
import App from "./App.tsx";

const router = createBrowserRouter([{
	path: "/",
	element: <App/>,
	children: [
		{
			index: true,
			element: <Home/>
		},
		{
			path: "products",
			element: <ProductList/>
		},{
			path: "products/:id",
			element: <SingleProduct/>
		},{
			path: "create-product",
			element: <Create/>
		},

	]

}
	])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
		<RouterProvider router={router}/>
		</Provider>
	</StrictMode>,
)
