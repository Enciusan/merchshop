import React, {useEffect, useState} from "react";

import Card from "./cards";
import Wallet from "./wallet";
import axios from "axios";
import Particle from "./Particle";

const Marketplace = (props) => {
    const [produse, setProduse] = useState([]);
    const [filter, setFilter] = useState("");


    // Axios method pentru get date card
    async function fetchData() {
        const resp = await axios.get(
            "https://nnfc-merch-default-rtdb.firebaseio.com/product.json"
        );
        const temp = Object.keys(resp.data).map((k) => resp.data[k]);
        setProduse(temp);
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="flex h-screen flex-col font-sans lg:grid lg:grid-cols-10">
            {/* Left side */}
            <div className="lg:col-span-3 bg-gradient-to-br from-[#34e89e] to-[#0f3443]">
                <Particle/>
                <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
                    <div className="bg-gradient-to-br from-[#FFEFBA] to-[#FFFFFF] p-2 rounded-xl">
                        <img
                            className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
                            src="../img/cover1.jpg"
                        />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFEFBA] to-[#FFFFFF]  mt-5">
                            NoName FoxesClub
                        </h1>
                        <p className="text-3xl text-center text-transparent bg-clip-text bg-gradient-to-t from-[#FFEFBA] to-[#FFFFFF]">
                            Merch marketplace
                        </p>
                    </div>
                </div>
            </div>

            {/* Right side */}
            <div className="flex flex-1 flex-col p-8 lg:min-h-screen bg-slate-200/80 lg:col-span-7 ">
                {/* HEADER */}
                <header className="flex items-center justify-between">
                    <img
                        className="w-20 lg:flex hidden rounded-xl object-cover lg:h-28 lg:w-28"
                        src="../img/negru.png"
                    />
                    <img
                        className="w-24 lg:hidden rounded-xl object-cover lg:h-24 lg:w-24"
                        src="../img/negru.png"
                    />
                    <Wallet/>
                </header>

                <hr className="my-2 border-slate-200"/>

                {/* CARDS CONTENT */}
                <div className="flex ml-9 mt-3 focus:border-0 focus:border-white">
                    <label className="px-2">Filter </label>
                    <input type="text" className="shadow-md mb-4 w-40" value={filter}
                           onChange={(e) => setFilter((e.target.value).toString().toLowerCase())}/>
                </div>
                <div className="grid grid-cols-2 gap-7 lg:grid-cols-3 lg:gap-10 overflow-y-scroll py-5">
                    {produse.filter(cards => {
                        if (filter === "") {
                            return cards;
                        } else if (cards.name.toLowerCase().includes(filter.toLowerCase())) {
                            return cards;
                        }
                    })
                        .map((cards, index) => {
                            return (
                                // <>
                                //     {filter == (cards.name).toLowerCase() &&
                                <Card
                                    wallet={index}
                                    key={index}
                                    name={cards.name}
                                    price={cards.price}
                                    description={cards.description}
                                    src={cards.src}/>
                            )
                        })}
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
