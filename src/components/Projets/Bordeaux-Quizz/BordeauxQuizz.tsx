import "/src/App.css";
import useIntersectionObserver from "../../../Service/AnimationScroll/AnimationScroll";
import "./bordeaux.css";
export default function BordeauxQuizz() {
	const { ref: sectionRef, isVisible } = useIntersectionObserver(0.1);
	return (
		<>
			<main>
				<section
					ref={sectionRef}
					className={`bordeaux_header ${isVisible ? "active" : ""}`}
				>
					<h1>Projet Bordeaux-Quizz</h1>
					<img
						src="./src/assets/images/BordeauxQuizz.png"
						alt="Bordeaux-Quizz"
					/>
					<p>
						Testez vos connaissances sur Bordeaux avec notre{" "}
						<strong>quiz</strong> ! Défiez vos amis et votre famille avec des
						questions sur l'histoire, la culture, et les anecdotes les plus
						insolites de la ville. Devenez un véritable expert bordelais !
					</p>
					<img src="./src/assets/images/BordeauxQuizzQuestion.png" alt="" />
					<p>
						Ce projet a été une expérience enrichissante qui nous a permis de
						développer de nombreuses compétences. Nous avons appris à travailler
						en binome de manière efficace, à communiquer de façon claire et
						constructive, et à résoudre des problèmes complexes en trouvant des
						solutions innovantes. Ces compétences seront précieuses pour mes
						futurs projets.
					</p>
				</section>
				<section className="bordeaux_stack">
					<h2>
						Pour réaliser ce projet, j'ai mis en œuvre les technologies
						suivantes :
					</h2>
					<div className="stack_container">
						<img src="/src/assets/images/iconeJs.png" alt="JavaScript" />
						<img src="/src/assets/images/iconeCss.png" alt="Css" />
						<img src="/src/assets/images/iconeHtml.png" alt="" />
					</div>
				</section>
			</main>
		</>
	);
}
