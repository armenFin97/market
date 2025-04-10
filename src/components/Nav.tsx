import "./nav.style.scss"

import {Link} from "react-router";

const Nav = () => {
	return <nav>
		<menu>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/products">Products</Link></li>
			<li><Link to="/create-product">Create Product</Link></li>
		</menu>
	</nav>
}
export default Nav;