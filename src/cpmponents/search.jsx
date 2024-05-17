import React, { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useGlobalContext } from "./context/context"


const Search = () => {
    const {data, query, setQuery} = useGlobalContext()

    return (
        <div className="h-screen">
            <div className="flex justify-center items-center ">
                <h2 className="text-2xl text-center mt-16 mb-16 p-2 font-medium">Capsule Web development Test</h2>
            </div>

            <div className=" px-10 flex justify-center items-center w-[60%] p-2 m-auto bg-white rounded-3xl shadow-xl shadow-gray-700/40 ">
                <FaSearch className="text-2xl flex text-gray-500 font-normal " />
                <input type="text" placeholder="Enter Your Medicien" className="w-full outline-none p-3 rounded-xl border-none ml-4" value={query} onChange={Event => setQuery(Event.target.value.toLowerCase())} />
                <button type="click" className="flex text-blue-600 font-semibold">Search</button>

            </div>

            <div className=" w-[70%] m-auto items-center flex justify-center text-center h-[0.30px] bg-gray-400 mt-10  " />

            {query === '' &&
            
                <div className=" flex justify-center items-center">
                    <h1 className="text-2xl font-semibold text-gray-500 mt-[14%]"><i>"</i> Find Medicine with amazing discount " </h1>
                </div>
            }
            {query === '' &&
                <h2 className="flex items-center justify-center text-center mt-36 text-slate-400">Developed By Anuj Tiwari</h2>
            }
            <div className="px-8 flex items-center justify-center mt-4">
                <div className="flex-cols w-2/3 ">
                    {data.saltSuggestions.map((item, i) => {
                        return (
                            <div key={i} className="flex shadow-md w-full p-4 gap-8 shadow-purple-300 flex-shrink-0 rounded-xl px-7 mb-6 GradientSec  ">
                                <div className="flex flex-col w-1/2 ">
                                    <p className="p-2">Form: <button  className="text-black  border border-blue-700  focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm px-6 ml-9 p-2 text-center dark:border-blue-500 dark:text-black ">{item.most_common.Form}</button></p>
                                    <p className="p-2 ">Strength: <button className="text-black  border border-blue-700  focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm px-6 ml-3 p-2 text-center dark:border-blue-500 dark:text-black ">{item.most_common.Strength}</button> </p>
                                    <p className="p-2 ">Packaging: <button  className="text-black border border-blue-700 focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-6 ml-1 p-2 text-center dark:border-blue-500 dark:text-black">{item.most_common.Packing}</button> </p>
                                    
                                </div>
                                <div className="flex flex-col justify-center w-1/2 ">
                                    <h1 className="text-center m-auto p-2 text-lg font-semibold">{item.salt}</h1>
                                </div>
                                <div className="flex flex-col w-1/2 justify-center items-center">
                                    <h2 className="text-2xl text-center font-semibold">Price: {item ? `${item.selling_price} INR` : 'Not available'}</h2>
                                    
                                </div>
                            
                                
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Search
