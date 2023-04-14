import {useState} from "react";
import {Link} from "react-router-dom";
import {ProfileComponent} from "../lib/Bandung" ;
import Layout from "./Layout";

export default function Profile () {
    return (
        <Layout>
            <div className="login-page-wrapper w-full py-10">
                <div className="container-x mx-auto">
                    <ProfileComponent/>
                </div>
            </div>
        </Layout>
    ) ;
}
