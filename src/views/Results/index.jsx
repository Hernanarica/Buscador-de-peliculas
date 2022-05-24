import { useParams } from "react-router-dom";
import getImagePath from "../../helpers/getImagePath";
import { useGetMovieByTitleQuery } from "../../redux/services/moviesApi";

function Results() {
	const { title } = useParams();
	const rtk       = useGetMovieByTitleQuery(title);
	console.log(rtk);
	
	return (
		<div className="flex h-screen overflow-hidden">
			<div className="w-3/5"></div>
			<div className="w-2/5">
				<img src={ getImagePath('butacas-2.png') } alt="Butacas" />
			</div>
		</div>
	);
}

export default Results;