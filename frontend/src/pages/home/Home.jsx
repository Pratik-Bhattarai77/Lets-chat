import { useState } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import useConversation from "../../zustand/useConversation";

const Home = () => {
	const { selectedConversation } = useConversation();
	const [showSidebar, setShowSidebar] = useState(true);

	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<div className={`${showSidebar ? 'flex' : 'hidden'} sm:flex flex-col w-full sm:w-auto`}>
				<Sidebar />
			</div>
			<div className={`flex-1 ${showSidebar ? 'hidden' : 'flex'} sm:flex flex-col`}>
				{selectedConversation && (
					<div className="bg-slate-500 px-4 py-2 mb-2 flex justify-between items-center sm:hidden">
						<button 
							onClick={() => setShowSidebar(true)} 
							className="text-white"
						>
							Back
						</button>
						<span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
					</div>
				)}
				<MessageContainer setShowSidebar={setShowSidebar} />
			</div>
		</div>
	);
};

export default Home;
