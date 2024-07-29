import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<div className='flex flex-col w-full sm:w-auto sm:flex-shrink-0'>
				<Sidebar />
			</div>
			<div className='hidden sm:flex flex-col flex-1'>
				<MessageContainer />
			</div>
		</div>
	);
};
export default Home;
