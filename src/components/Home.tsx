import "./home.style.scss"
import Monitor from "../icons/Monitor";


const Home = () => {
	return <section className="home">
		<div className={"home-svg-wrapper"} >
			<Monitor width={1440} height={500} />
			<div className="home-description">

				<h1 className="home-title">
					<span className="fade delay-1">Welcome to</span><br />
					<span className="fade delay-2">Velour & Co</span>
				</h1>
				<p className="home-text fade delay-3">
					Discover a curated collection of products made to inspire, elevate, and simplify your everyday life.
					Whether you're shopping for yourself or looking for the perfect gift, we’ve got something special just for you.
				</p>


			</div>
		</div>
	</section>
}
export default Home;