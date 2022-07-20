import React, {useEffect, useState} from 'react';

import Modal from "./Modal";
import OrderForm from "./orderForm";

const Card = (props) => {
    const [content, setContent] = useState(null);
    const [title, setTitle] = useState(null);
    const [wallet, setWallet] = useState();

    // console.log(wallet)

    const handleOrderForm = () => {
        setWallet(props.wallet)
        setContent(<OrderForm closeModal={handleCloseModal} wallet={wallet}/>);
        setTitle("Place an order");
    }
    // console.log({wallet});
    // debugger
    const handleCloseModal = () => {
        setContent(null);
        // console.log("Ceva");
    }

    return (
        <div className="bg-slate-100 rounded-b-xl shadow-md mx-10">
            <div className="flex flex-col">
                <img
                    className="w-full rounded-t-xl lg:rounded-xl shadow-md lg:h-60 lg:w-60 lg:mx-auto lg:my-3"
                    src={props.src}
                />
                <h1 className="font-semibold mx-4 pt-4 font-sans">
                    {props.name}
                </h1>
                <h2 className="font-bold mx-4 pb-5 font-sans text-xl">◎{props.price}</h2>
                <h3 className="font-normal mx-4 pb-5 font-sans text-sm">
                    {props.description}
                </h3>
                {props.wallet != null ?
                    <button
                        className="rounded-md bg-[#28b082] text-white mx-4 mb-3 shadow-sm px-4 py-2 font-bold text-sm lg:px-5 lg:py-3
              lg:text-base lg:hover:-translate-y-1 lg:hover:duration-300 lg:hover:scale-105 lg:hover:shadow-[#26795d]"
                        onClick={() => handleOrderForm()}
                    >
                        Mint
                    </button>
                    :
                    <button
                        className="rounded-md bg-slate-300 text-white mx-4 mb-3 shadow-sm px-4 py-2 font-bold text-sm lg:px-5 lg:py-3
              lg:text-base"
                        disabled
                    >
                        Mint
                    </button>
                }
            </div>
            {/*Componenta modal care se va incarca doar daca exista continut*/}
            <div>
                <Modal content={content} setContent={setContent} title={title}/>
            </div>
        </div>
    )
}

export default Card;