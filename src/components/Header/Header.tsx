import { Link } from "react-router-dom";
import "../Css/Header.css/style.css";
import ProjectButton from "./ProjectBtn";
export default function Header() {
	return (
		<>
			<header className="header">
				<nav className="flex items-center justify-around ">
					<img className="w-3/12" src="./src/assets/images/logo.png" alt="" />
					<ul className="navLink">
						<Link to={"/"}>HomePage</Link>
						<ProjectButton />
					</ul>
				</nav>
			</header>
		</>
	);
}
