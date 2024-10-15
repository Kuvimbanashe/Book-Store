import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
const BackButton = () => {
	return (
		<div className="flex">
			<Link to='/home' className=" px-4 py-1 rounded-md bg-sky-800 text-white w-fit flex items-center gap-x-2">
				<BsArrowLeft className="text-2xl"/> 
			</Link> 
		</div>
	);
};

export default BackButton;