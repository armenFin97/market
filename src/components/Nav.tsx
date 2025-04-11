import "./nav.style.scss"

import { NavLink } from "react-router-dom";

const Nav = () => {
	return <nav>
		<menu>
			<li><NavLink to="/" end>Home</NavLink></li>
			<li><NavLink to="/products">Products</NavLink></li>
			<li><NavLink to="/create-product">Create Product</NavLink></li>
		</menu>
	</nav>
}
export default Nav;