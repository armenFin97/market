import Nav from "./components/Nav.tsx";
import {Outlet} from "react-router";

const App = () => {
	return <section className="main-section">
		<Nav/>
		<Outlet/>
	</section>
}
export default App;