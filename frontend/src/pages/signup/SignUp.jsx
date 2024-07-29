import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

    return (
        <div className='flex flex-col items-center justify-center w-full max-w-md mx-auto p-4'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-2xl sm:text-3xl font-semibold text-center text-gray-300'>
                    Sign Up <span className='text-red-500'> ShortCake😉</span>
                </h1>

                <form onSubmit={handleSubmit} className="mt-4">
                    {['fullName', 'username', 'password', 'confirmPassword'].map((field) => (
                        <div key={field} className="mb-4">
                            <label className='block text-sm font-medium text-gray-300 mb-1' htmlFor={field}>
                                {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                            </label>
                            <input
                                id={field}
                                type={field.includes('password') ? 'password' : 'text'}
                                placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').trim().toLowerCase()}`}
                                className='w-full px-3 py-2 rounded-md'
                                value={inputs[field]}
                                onChange={(e) => setInputs({ ...inputs, [field]: e.target.value })}
                            />
                        </div>
                    ))}

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link
                        to={"/login"}
                        className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
                    >
                        Already have an account?
                    </Link>

                    <div className="mt-6">
                        <button className='w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition duration-300' disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default SignUp;

