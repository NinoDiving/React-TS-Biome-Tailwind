export default function Footer() {
	const socials = [
		{
			id: 1,
			url: "https://www.linkedin.com/in/nino-jautee-aa2723321/",
			imgSrc: "./src/assets/images/iconeLinkdIn.png",
		},
		{
			id: 2,
			url: "https://www.instagram.com/ninodiving/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3F__coig_login%3D1",
			imgSrc: "./src/assets/images/iconeInsta.png",
		},
		{
			id: 3,
			url: "https://github.com/NinoDiving",
			imgSrc: "./src/assets/images/iconeGitHub.png",
		},
	];
	return (
		<>
			<footer>
				<article className="socialLink">
					{socials.map((social) => (
						<a key={social.id} href={social.url}>
							<img src={social.imgSrc} alt="" />
						</a>
					))}
				</article>
				{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
				<a href="#">
					<p>Retour en haut de page</p>
				</a>
			</footer>
		</>
	);
}
