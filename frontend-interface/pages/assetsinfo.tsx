import Head from "next/head";
import { FormEvent, useState } from "react";
import Navbar from "../components/navbar";
import SettingNavbar from "../components/settingnavbar";
import AddToken from "../components/addToken";
// import { ProposalList } from "../components/proposalList";
// import { useData } from "../contexts/dataContext";
import styles from "../styles/Home.module.css";

export default function Home() {
    interface TokenAssets {
        network: string;
        contractAddress: string;
        tokenName: string;
    }
    interface TokenAssetsInterface {
        assets: Array<TokenAssets>;
    }
    let daoname = ""
    if (typeof window !== "undefined") {
      const queryParameters = new URLSearchParams(window.location.search)
      daoname = queryParameters.get("DAO")
    }

    const tokenAssets: TokenAssetsInterface = {
        assets: [{
            network: "Mantle",
            contractAddress: "0x28y349823948",
            tokenName: "USDT"
        },
        {
            network: "Mantle",
            contractAddress: "0x28y349823948",
            tokenName: "ETH"
        }]
    }
    const onAddToken = () => {
        console.log("before in  add token function")
        // return <div className={styles.settingsgrid}>
        //     <div > Network</div>
        //     <div > &nbsp;
        //         <select className="px-3 py-1 bg-gray-50 border border-black rounded-xl text-black" name="Networks" id="networks">
        //             <option value="Mantle">Mantle</option>
        //             <option value="Ethereum">Ethereum</option>
        //             <option value="Polygon">Polygon</option>
        //         </select>
        //         &emsp;
        //     </div>
        //     <div >Contract Address</div>
        //     <div >
        //         <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"></input>
        //     </div>
        //     <div >Token Name</div>
        //     <div >Type in address</div>
        //     <div >
        //         <div className="divider"></div>
        //     </div>
        // </div>
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>DAOmocles</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar
                daoname={daoname}
            />
            <SettingNavbar
                daoname={daoname}
            />
            <div className={styles.settings} style={{ height: "auto", marginBottom: "3rem" }}>
                <div className={styles.settingsgrid}>
                    {tokenAssets.assets.map((item) => {
                        return <>
                            <div > Network</div>
                            <div >{item.network}</div>
                            <div >Contract Address</div>
                            <div >{item.contractAddress}</div>
                            <div >Token Name</div>
                            <div >{item.tokenName}</div>
                            <div className="divider" style={{ color: "white" }}></div>
                            <div className="divider"></div>
                        </>
                    })}
                    <>
                        <div > Network</div>
                        <div > &nbsp;
                            <select className="px-3 py-2 h-3/1 bg-gray-50 border border-black rounded-xl text-black" name="Networks" id="networks">
                                <option value="Mantle">Mantle</option>
                                <option value="Ethereum">Ethereum</option>
                                <option value="Polygon">Polygon</option>
                            </select>
                            &emsp;
                        </div>
                        <div >Contract Address</div>
                        <div >
                            <input type="text" id="default-input" style={{marginLeft:"3px"}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"></input>
                        </div>
                        <div >Token Name</div>
                        <div style={{ color: "gray" }}>Type in address to see</div>
                        <div >
                            <div className="divider"></div>
                        </div>
                    </>

                    {/* <div >Treasury Address</div>
                    <div >
                        <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"></input>
                    </div> */}
                </div>
                <button
                    className={styles.confirmbutton}
                    style={{ width: "200px" }}
                    onClick={() => {
                        onAddToken()
                        console.log("button clicked")
                    }}
                >
                    + Add Another Token
                </button>
                {/* <div>
                    <button className={styles.confirmbutton}>Confirm</button>
                </div> */}
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