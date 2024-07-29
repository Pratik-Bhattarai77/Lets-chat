/* eslint-disable no-mixed-spaces-and-tabs */
import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

    return (
        <div className='flex flex-col items-center justify-center w-full max-w-md mx-auto p-4'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-2xl sm:text-3xl font-semibold text-center text-gray-300'>
                    Login
                    <span className='text-red-500'> ShortCake😘</span>
                </h1>

                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label className='block text-sm font-medium text-gray-300 mb-1' htmlFor="username">
                            Username
                        </label>
                        <input
                            id="username"
                            type='text'
                            placeholder='Enter username'
                            className='w-full px-3 py-2 rounded-md'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className='block text-sm font-medium text-gray-300 mb-1' htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            type='password'
                            placeholder='Enter Password'
                            className='w-full px-3 py-2 rounded-md'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                        {"Don't"} have an account?
                    </Link>

					<div className="mt-6">
  							  <button className='w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition duration-300 mt-2' disabled={loading}>
   							     {loading ? <span className='loading loading-spinner'></span> : "Login"}
 						   </button>
						</div>

                </form>
            </div>
        </div>
    );
};
export default Login;

