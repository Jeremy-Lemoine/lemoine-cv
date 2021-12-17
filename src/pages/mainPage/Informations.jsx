import photoPro from "../../images/photoPro.jpg";

function Informations() {
	return (
		<div className='informations-container'>
			<div className='image-container'>
				<img
					src={photoPro}
					width='302px'
					height='403px'
					style={{ borderRadius: "50%", boxShadow: "0 0 15px black" }}
					alt=''
				/>
			</div>
			<div className='text-container'>
				<p className='left'>Je suis un passionné d'informatique et de mathématiques.</p>
				<br />
				<br />
				<br />
				<p className='left'>
					Adresse mail : <span className='orange'>jeremy.lemoinezemmour@gmail.com</span>
				</p>
				<br />
				<p className='left'>
					Téléphone : <span className='orange'>06 86 83 67 35</span>
				</p>
				<br />
				<div className='left inline'>
					Adresse postale :&nbsp;
					<div className='orange'>
						<p>4 Rue Du Chemin Blanc</p>
						<p>28190</p>
						<p>Landelles</p>
						<p>France</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Informations;
