import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit, formState, reset } = useForm();

    const { errors } = formState;

    const onSubmitForm = (value) => {
        console.log(value);
    }

    const[firstName,setFirstname]=useState('');
    const[lastName,setLastname]=useState('');

    const changeCaseOfFirstName = (event) => {
        event.preventDefault();
        const string = event.target.value;
        setFirstname(string.charAt(0).toUpperCase() + string.slice(1));
    }
    const changeCaseOfLastName = (event) => {
        event.preventDefault();
        const string = event.target.value;
        setLastname(string.charAt(0).toUpperCase() + string.slice(1));
    }

    return (
        <form onSubmit={handleSubmit(onSubmitForm)}>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="bg-white py-6 rounded-md px-10 max-w-lg shadow-md">

                    <h1 className="text-center text-lg font-bold text-gray-500">User Details</h1>

                    <div className="space-y-4 mt-6">

                        {/* First Name Input */}
                        <div className="w-full">
                            <input type="text" name="firstname" {...register("firstname", {
                                required: {
                                    value: true,
                                    message: "You must enter your firstname!",
                                },
                                maxLength: {
                                    value: 20,
                                    message: "Your first name should be less than 20 characters!",
                                },
                                pattern: {
                                    value: /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
                                    message: "Please Enter only characters!"
                                }
                            })} placeholder="Firstname" autoComplete="off"  className="px-4 py-2 bg-gray-50" 
                            onChange={changeCaseOfFirstName} value={firstName} />
                            <div className="text-red-400 text-sm py-2">
                                {errors?.firstname?.message}
                            </div>
                        </div>

                        {/* Last Name Input */}
                        <div className="w-full">
                            <input type="text" name="lastname" {...register("lastname", {
                                required: {
                                    value: true,
                                    message: "You must enter your Last Name!",
                                },
                                pattern: {
                                    value: /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/,
                                    message: "Please Enter only characters!"
                                },
                                maxLength: {
                                    value: 30,
                                    message: "Your last name should be less than 30 characters!",
                                }
                            })} placeholder="Lastname" autoComplete="off"  className="px-4 py-2 bg-gray-50" 
                            onChange={changeCaseOfLastName} value={lastName} />
                            <div className="text-red-400 text-sm py-2">
                                {errors?.lastname?.message}
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="w-full">
                            <input type="text" name="email" {...register("email", {
                                required: {
                                    value: true,
                                    message: "You must enter your email!",
                                },
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                },
                                minLength: {
                                    value: 8,
                                    message: "This is not long enough to be an email!",
                                },
                                maxLength: {
                                    value: 120,
                                    message: "This is too long to be an email!",
                                }
                            })} placeholder="Email Address" autoComplete="off" className="px-4 py-2 bg-gray-50" />
                            <div className="text-red-400 text-sm py-2">
                                {errors?.email?.message}
                            </div>
                        </div>

                        {/* Mobile Number Input */}
                        <div className="w-full">
                            <input type="number" placeholder="Mobile Number" {...register("mobNum", {
                                required: {
                                    value: true,
                                    message: "You must enter your mobile number!",
                                },
                                minLength: {
                                    value: 6,
                                    message: "Please Enter valid Mobile Number!",
                                },
                                validAsNumber: {
                                    value: true,
                                    message: "Please enter only mobile number!"
                                },
                                maxLength: {
                                    value: 12,
                                    message: "Please Enter valid Mobile Number!",
                                },
                            })} name="mobNum" autoComplete="off" className="px-4 py-2 bg-gray-50" />
                            <div className="text-red-400 text-sm py-2">
                                {errors?.mobNum?.message}
                            </div>
                        </div>

                        {/* Current Balance Input */}
                        <div className="w-full">
                            <input type="number" name="balance" {...register("balance", {
                                required: {
                                    value: true,
                                    message: "You must enter your current balance!",
                                },
                                validAsNumber: {
                                    value: true,
                                    message: "Please enter only amount!"
                                },
                                
                            })} placeholder="$ Current Balance" autoComplete="off" className="px-4 py-2 bg-gray-50" />
                            <div className="text-red-400 text-sm py-2">
                                {errors?.balance?.message}
                            </div>
                        </div>

                    </div>
                    <div className="flex">
                        <button type="submit" className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">Submit</button>
                        <button type="reset" className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight ml-5">Reset</button>
                    </div>

                </div>
            </div>
        </form>
    );

}

export default Form;