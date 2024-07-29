import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
    return (
        <div className='flex flex-col sm:flex-row w-full max-w-7xl mx-auto h-[90vh] sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <div className="w-full sm:w-1/3 md:w-1/4">
                <Sidebar />
            </div>
            <div className="w-full sm:w-2/3 md:w-3/4">
                <MessageContainer />
            </div>
        </div>
    );
};
export default Home;
