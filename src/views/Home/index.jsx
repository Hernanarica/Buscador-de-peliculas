import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import getImagePath from "../../helpers/getImagePath";

function Home() {
	const navigate              = useNavigate();
	const [ search, setSearch ] = useState('');
	
	const handleInputChange = ({ target: { value } }) => {
		setSearch(value);
	};
	
	const handleSearchClick = () => {
		navigate(`/results/${ search.trim() }`)
	};
	
	const handleCleanClick = () => {
	
	};
	
	return (
		<div className="flex h-screen overflow-hidden">
			<div className="w-2/5">
				<img src={ getImagePath('butacas.png') } alt="Butacas de cine" />
			</div>
			<div className="w-3/5 flex justify-center items-center flex-col p-9 space-y-8">
				<h2 className="text-3xl font-bold font-lato">Busca tu película</h2>
				<input type="text"
				       value={ search }
				       name="name"
				       onChange={ handleInputChange }
				       className="w-full w-1/2 h-9 p-1 bg-special-gray font-lato border focus:outline-none focus:ring-2 focus:ring-gray-500 rounded"
				/>
				<div className="flex w-full justify-between gap-6">
					<button onClick={ handleSearchClick } className="bg-red-400 hover:bg-red-500 text-white font-lato w-full shadow-lg h-9">Buscar</button>
					<button onClick={ handleCleanClick } className="bg-red-400 hover:bg-red-500 text-white font-lato w-full shadow-lg h-9">Limpiar</button>
				</div>
			</div>
		</div>
	);
}

export default Home;