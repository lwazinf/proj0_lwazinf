/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Layout.module.css";
import Head from "next/head";
import { AppContext } from "../components/Context";
import React, { useContext, useState } from "react";

import { db } from "../firebase";
import { collection, addDoc } from "@firebase/firestore";

const Layout = ({ children }) => {
    const { x } = useContext(AppContext);
    return (
        <div className={styles.container}>
            <Head>
                <title>LwaziNF - Proj0 • Music</title>
                <meta name="" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {children}

        </div>
    );
};

export default Layout;

