import {useState} from "react";
import {Link} from "react-router-dom";
import Axios from "axios" ;
import {SigninComponent} from "../lib/Bandung" ;
import InputCom from "./Helpers/InputCom";
import Layout from "./Layout";

var errorMessage = "" ;

export default function Signin () {
    return (
        <Layout>
            <div className="login-page-wrapper w-full py-10">
                <div className="container-x mx-auto">
                    <SigninComponent/>
                </div>
            </div>
        </Layout>
    );
}
