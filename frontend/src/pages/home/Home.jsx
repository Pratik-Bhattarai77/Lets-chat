import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex flex-col sm:flex-row h-[100vh] sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<div className="w-full sm:w-auto h-1/3 sm:h-auto">
				<Sidebar />
			</div>
			<div className="w-full h-2/3 sm:h-auto sm:flex-grow">
				<MessageContainer />
			</div>
		</div>
	);
};
export default Home;
