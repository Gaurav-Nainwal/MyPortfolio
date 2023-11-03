import React from 'react'
import  Shoppingcart from "..//assets/ShoppingCart.png";
import Weather from "..//assets/Weather.png";
import DevDetective from "..//assets/DevDetective.png";

const PortFolio = () => {
    const portfolios =[
        {
            id:1,
            src:Shoppingcart
        },
        {
            id: 2,
            src: DevDetective

        },
        {
            id: 3,
            src: Weather

        },
    ];
    return (
        <div name = "portfolio" 
            className ="bg-gradient-to-b from-black to-gray-800 w-full portfolio-section text-white md:h-screen">
        
            <div className = "max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full">
                <div className = "">
                    <p className = "text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className = "py-6"> Check Out Some Of My Work Right here</p>
                </div>
                <div className = "grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12  sm:px-0">

                    {
                        portfolios.map(({id, src})=>(

                                <div className ="shadow-md shadow-gray-600 rounded-lg">
                                    <img src = {src} alt = ""
                                        className="rounded-md duration-200 hover:scale-105"
                                    />
                     
                                    <div className = "flex items-center justify-center">
                                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                                    </div>
                  
            
                                </div>
                        
                            ))
                    }
                </div>
            </div>

        </div>
    )
}

export default PortFolio
