import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {BiError} from "react-icons/bi";

import {MdArrowRightAlt} from "react-icons/md";
import axios from "axios";

export default function OrderForm(props) {
    const [wallet, setWallet] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [country, setCountry] = useState("");
    const [town, setTown] = useState("");
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const {
        register,
        handleSubmit,
        formState: {errors},
        getValues
    } = useForm();

    const defWallet = () => {
        setWallet(props.wallet);
    }
    useEffect(() =>{
        defWallet();
    }, [])

    const onSubmit = async (data) => {
        const resp = await axios.post('https://nnfc-merch-default-rtdb.firebaseio.com/order', ({
            'address': data.address,
            'country': data.country,
            'firstName': data.firstName,
            'lastName': data.lastName,
            'town': data.town,
            'wallet': data.wallet,
            'zipCode': data.zipCode
        }), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            console.log("Status: ", response.status);
            console.log("Data: ", response.data);
        }).catch(error => {
            console.error('Something went wrong!', error);
        })
        alert('Crearea de comenzi nu este disponibila pe varianta demo');
        props.closeModal();
        //4HhvqSWXVhkrTN8UhyTtyUp6b4doK15gkDPHMkad67uie6wKNJp7JN6PfYsctm51AHMuFeNsPBrrSRoDNi2f5oy4
    }; // your form submit function which will invoke after successful validation


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* WALLET */}
                <label className="block text-gray-700 text-sm font-bold py-3 pl-3">
                    Wallet
                </label>
                <input
                    defaultValue={wallet}
                    {...register("wallet", {
                        required: true,
                        maxLength: 50,
                    })}
                    className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors?.wallet?.type === "required" && (
                    <p className="flex flex-row text-red-400 font-roboto">
                        <BiError className="h-5 w-6"/>
                        This field can't be empty!
                    </p>
                )}

                {/* FIRST NAME */}
                <label className="block text-gray-700 text-sm font-bold py-3 pl-3">
                    First Name
                </label>
                <input
                    {...register("firstName", {
                        required: true,
                        pattern: /^[a-zA-Z0-9_.-]*$/i,
                    })}
                    onInput={(e) => setFirstName(e.target.value)}
                    className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors?.firstName?.type === "required" && (
                    <p className="flex flex-row text-red-400 font-roboto">
                        <BiError className="h-5 w-6"/>
                        This field can't be empty!
                    </p>
                )}

                {/* LAST NAME */}
                <label className="block text-gray-700 text-sm font-bold py-3 pl-3">
                    Last Name
                </label>
                <input
                    {...register("setLastName", {
                        required: true,
                        pattern: /^[a-zA-Z0-9_.-]*$/i,
                    })}
                    onInput={(e) => setLastName(e.target.value)}
                    className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors?.setLastName?.type === "required" && (
                    <p className="flex flex-row text-red-400 font-roboto">
                        <BiError className="h-5 w-6"/>
                        This field can't be empty!
                    </p>
                )}

                {/* COUNTRY */}
                <label className="block text-gray-700 text-sm font-bold py-3 pl-3">
                    Country
                </label>
                <input
                    {...register("setCountry", {
                        required: true,
                        pattern: /^[a-zA-Z0-9_.-]*$/i,
                    })}
                    onInput={(e) => setCountry(e.target.value)}
                    className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors?.setCountry?.type === "required" && (
                    <p className="flex flex-row text-red-400 font-roboto">
                        <BiError className="h-5 w-6"/>
                        This field can't be empty!
                    </p>
                )}

                {/* TOWN */}
                <label className="block text-gray-700 text-sm font-bold py-3 pl-3">
                    Town
                </label>
                <input
                    {...register("setTown", {
                        required: true,
                        pattern: /^[a-zA-Z0-9_.-]*$/i,
                    })}
                    onInput={(e) => setTown(e.target.value)}
                    className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors?.setTown?.type === "required" && (
                    <p className="flex flex-row text-red-400 font-roboto">
                        <BiError className="h-5 w-6"/>
                        This field can't be empty!
                    </p>
                )}

                {/* ADDRESS */}
                <label className="block text-gray-700 text-sm font-bold py-3 pl-3">
                    Address
                </label>
                <input
                    {...register("setAddress", {
                        required: true,
                    })}
                    onInput={(e) => setAddress(e.target.value)}
                    className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors?.setAddress?.type === "required" && (
                    <p className="flex flex-row text-red-400 font-roboto">
                        <BiError className="h-5 w-6"/>
                        This field can't be empty!
                    </p>
                )}

                {/* ZIP CODE */}
                <label className="block text-gray-700 text-sm font-bold py-3 pl-3">
                    Zipcode
                </label>
                <input
                    {...register("setZipCode", {
                        required: true,
                        pattern: /^[a-zA-Z0-9_.-]*$/i,
                    })}
                    onInput={(e) => setZipCode(e.target.value)}
                    className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors?.setZipCode?.type === "required" && (
                    <p className="flex flex-row text-red-400 font-roboto">
                        <BiError className="h-5 w-6"/>
                        This field can't be empty!
                    </p>
                )}

                <button
                    type="submit"
                    className="absolute right-8 bottom-6 flex-row justify-center px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md hover:bg-green-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                    // onClick={() => {
                    //     setFirstName("firstName")
                    //     setLastName("lastName")
                    //     setCountry("country")
                    // }}
                >
                    <p className="flex"> Order
                        <MdArrowRightAlt className="w-4 h-4 mt-1 ml-1"/>
                    </p>
                </button>
            </form>
        </>
    );
}
