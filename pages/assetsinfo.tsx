import Head from "next/head";
import { FormEvent, useState } from "react";
import Navbar from "../components/navbar";
import SettingNavbar from "../components/settingnavbar";
// import { ProposalList } from "../components/proposalList";
// import { useData } from "../contexts/dataContext";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>DAOmocles</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <SettingNavbar />
            <div className={styles.settings} style={{ height: "500px" }}>
                <div className={styles.settingsgrid}>
                    <div className={styles.one}> Network</div>
                    <div className={styles.two}>
                        <select name="Networks" id="networks">
                            <option value="Ethereum">Ethereum</option>
                            <option value="Polygon">Polygon</option>
                            <option value="Mantle">Mantle</option>
                        </select>
                    </div>
                    <div className={styles.three}>Contract Address</div>
                    <input className={styles.four}></input>
                    <div className={styles.five}>Token Name</div>
                    <div className={styles.six}>USDT</div>
                    <div className={styles.seven}>+ Add Another Token</div>
                    <div className={styles.eight}>Treasury Address</div>
                    <input className={styles.nine}></input>
                </div>
                <div>
                    <button className={styles.confirmbutton}>Confirm</button>
                </div>
            </div>
            {/* {true && (
                <main className="w-full flex flex-col py-4 flex-grow max-w-8xl items-center">
                    <div className="w-3/4 border-2 border-blue-600 rounded-xl p-3 mt-10">
                        <div className="flex flex-col justify-center">
                            Assets Information

                        </div>
                    </div>
                </main>
            )} */}
        </div>
    );
}