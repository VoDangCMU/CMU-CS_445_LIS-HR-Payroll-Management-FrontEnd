import React from "react";
import {AppProps} from "next/app";
import "@/styles/globals.css";
import {Header} from "@/components/custom/content/layout/header";
import {Footer} from "@/components/custom/content/layout/footer";


function App({Component, pageProps}: AppProps) {

    return (

        <>


            <Header companyName={"Vo Dang"}
                    logoSrc={"https://allamerican.com.ph/cdn/shop/products/CLASSIC-PEPPERONI_grande.jpg"}/>


                <Component {...pageProps} />


            <Footer  companyName={"Vo Dang"} logoSrc={"https://allamerican.com.ph/cdn/shop/products/CLASSIC-PEPPERONI_grande.jpg"} companyAddress={"Truong Chinh Da Nang"} companyEmail={"12345@gmail.com"} companyPhone={"0905XXXX"}/>

        </>

    )
        ;
}
export default App;