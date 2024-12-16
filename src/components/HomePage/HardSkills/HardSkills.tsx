import useIntersectionObserver from "../../../Service/AnimationScroll/AnimationScroll";
export default function HardSkills() {
	const { ref: sectionRef, isVisible } = useIntersectionObserver(0.1);

	return (
		<>
			<section
				ref={sectionRef}
				className={`hardSkills ${isVisible ? "active" : ""}`}
			>
				<article className="frontEndSkills">
					<h3>Front-end</h3>
					<ul>
						<li>
							{" "}
							<img
								className="iconeSkills"
								src="./src/assets/images/iconeHtml.png"
								alt="Html icone"
							/>
							HTML
						</li>
						<li>
							{" "}
							<img
								className="iconeSkills"
								src="./src/assets/images/iconeCss.png"
								alt="Css icone"
							/>
							CSS
						</li>
						<li>
							{" "}
							<img
								className="iconeSkills"
								src="./src/assets/images/iconeJs.png"
								alt="Js icone"
							/>
							JavaScript
						</li>
					</ul>
				</article>
				<article className="backEndSkills">
					<h3>Back-end</h3>
					<ul>
						<li>
							{" "}
							<img
								className="iconeSkills"
								src="./src/assets/images/iconeNode.png"
								alt="Node icone"
							/>
							Node.js
						</li>
						<li>
							{" "}
							<img
								className="iconeSkills"
								src="./src/assets/images/iconeExpress.png"
								alt="Express icone"
							/>
							Express.js
						</li>
					</ul>
				</article>
				<article className="frameWork">
					<h3>Framework</h3>
					<ul>
						<li>
							{" "}
							<img
								className="iconeSkills"
								src="./src/assets/images/iconeTypeScript.png"
								alt="TypeScript icone"
							/>
							TypeScript
						</li>
						<li>
							{" "}
							<img
								className="iconeSkills reactSpin"
								src="./src/assets/images/iconeReact.png"
								alt=""
							/>
							React
						</li>
						<li>
							{" "}
							<img
								className="iconeSkills tailwindWave"
								src="./src/assets/images/iconeTailwind.png"
								alt="Tailwind icone"
							/>
							Tailwind
						</li>
					</ul>
				</article>
			</section>
		</>
	);
}
