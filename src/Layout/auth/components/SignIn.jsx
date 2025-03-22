import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setDoc, doc } from 'firebase/firestore';
import { auth, db, signInWithGooglePopUp } from '../../../firebase/firestoreConfig';
import { toast, ToastContainer } from 'react-toastify';
import { getDoc } from 'firebase/firestore';

const SignIn = () => {

    const [isactive, setIsactive] = useState(false)
    const handleChangeform = () => {
        setIsactive(!isactive)
    }
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        userName: '',
        lastName: ''
    })
    let navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;

            // Retrieve user role from Firestore
            const userDoc = await getDoc(doc(db, "users_data", user.uid));
            if (userDoc.exists()) {
                const userData = userDoc.data();
                const userRole = userData.role;

                // toast.success("User Login Successfully", { position: "top-center" });
                
                // navigate route based on role
                if (userRole === "admin") {
                    // navigate('/admin');
                    toast.success("User Login Successfully", { position: "top-center" });
                    setTimeout(() => {
                        navigate('/admin');
                    }, 2000);
                } else {
                    toast.success("User Login Successfully", { position: "top-center" });
                    setTimeout(() => {
                        navigate('/jobs');
                    }, 2000);
                }
            }
        } catch (error) {
            toast.error("User Login Failed", { position: "top-center" });
        }
    };

    const handleSignUp = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;

            let role = "user";

            // assign admin role to a specific email
            if (formData.email === "admin@example.com") {
                role = "admin";
            }

            // Save user details & role in Firestore
            await setDoc(doc(db, "users_data", user.uid), {
                userName: formData.userName,
                lastName: formData.lastName,
                email: formData.email,
                role: role
            });

            toast.success("User Registered Successfully!", { position: "top-center" });
        } catch (error) {
            toast.error("User Registration Failed", { position: "top-center" });
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGooglePopUp()
            toast.success("User Login Successfully")
            setTimeout(() => {
                navigate('/Jobs')

            }, 1000)
        } catch (error) {
            toast.error("User Login Failed", { position: "top-center" })

        }
    }


    return (
        <><section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    {isactive ? 'Sign Up' : 'Sign In'}
                </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                    {isactive && (
                        <>
                            <div className="p-2 w-full">
                                <label htmlFor="userName" className="leading-7 text-sm text-gray-600">First Name</label>
                                <input type="text" id="userName" name="userName" value={formData.userName} onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="p-2 w-full">
                                <label htmlFor="lastName" className="leading-7 text-sm text-gray-600">Last Name</label>
                                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                        </>
                    )}
                    <div className="p-2 w-full">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="p-2 w-full">
                        <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className='flex flex-wrap justify-center'>
                        {isactive ? (
                            <div className="p-2">
                                <button className="mx-2 text-white bg-buttonPrimary border-0 py-1 sm:py-2 px-2 sm:px-8 focus:outline-none hover:bg-blue-700 rounded text-sm sm:text-lg" onClick={handleSignUp}>Sign Up</button>
                                <button className="mx-2 text-gray-800 bg-gray-300 border-0 py-1 sm:py-2 px-2 sm:px-8 focus:outline-none hover:bg-gray-400 rounded text-sm sm:text-lg" onClick={handleGoogleSignIn}>Sign In with Google</button>
                            </div>
                        ) : (
                            <div className="p-2">
                                <button className="mx-2 text-white bg-buttonPrimary border-0 py-1 sm:py-2 px-2 sm:px-8 focus:outline-none hover:bg-blue-700 rounded text-sm sm:text-lg" onClick={handleSubmit}>Sign In</button>
                                <button className="mx-2 text-gray-800 bg-gray-300 border-0 py-1 sm:py-2 px-2 sm:px-8 focus:outline-none hover:bg-gray-400 rounded text-sm sm:text-lg" onClick={handleGoogleSignIn}>Sign In with Google</button>
                            </div>
                        )}
                        <div className="text-center pt-5">
                            {isactive ? (
                                <div>
                                    <span>Already have an account? </span><span onClick={handleChangeform} className='text-buttonPrimary cursor-pointer'>Sign In</span>
                                </div>
                            ) : (
                                <div>
                                    <span>Not Registered? </span><span onClick={handleChangeform} className='text-buttonPrimary cursor-pointer'>Sign Up</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />
    </section>
</>
    )
}

export default SignIn