import Head from "next/head";
import Link from "next/link";
import { FormEvent, useState } from "react";
import Navbar from "../components/navbar";
// import { ProposalList } from "../components/proposalList";
// import { useData } from "../contexts/dataContext";
import styles from "../styles/Home.module.css";
import { Row, Col } from 'antd';


export default function Home() {

    interface DAOBriefInterface {
        logoURL: string;
        name: string;
        introduction: string;
        treasuryAddress: string;
        access: string;
    }

    interface UserInfoInterface {
        userAddress: string;
        profileList: Array<DAOBriefInterface>;
        // subAdminList: Array<DAOBriefInterface>;
        // memberList: Array<DAOBriefInterface>;
    }

    const daoTestData: UserInfoInterface = {
        userAddress: "0x18928391",
        profileList: [
            {
                // logoURL: "htp://.,..,.",
                logoURL: "https://bobbyhadz.com/images/blog/react-display-image-from-url/banner.webp",
                name: "THUBA DAO",
                introduction: "introduction here",
                treasuryAddress: "0xjasiejif",
                access: "admin"
            },
            {
                // logoURL: "htp://.,..,.",
                logoURL: "https://images.unsplash.com/photo-1598124146163-36819847286d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                name: "BIT DAO",
                introduction: "introduction here",
                treasuryAddress: "0xjasiejif",
                access: "admin"
            },
            {
                logoURL: "https://bobbyhadz.com/images/blog/react-display-image-from-url/banner.webp",
                name: "Something DAO",
                introduction: "introduction here",
                treasuryAddress: "0xjasiejif",
                access: "subadmin"
            },
            {
                logoURL: "https://bobbyhadz.com/images/blog/react-display-image-from-url/banner.webp",
                name: "Brian DAO",
                introduction: "introduction here",
                treasuryAddress: "0xjasiejif",
                access: "member"
            }
        ]
    }
    console.log("daotest data", daoTestData.profileList)
    const DAONum = Object.keys(daoTestData.profileList).length;
    // const { isMember, isStakeholder, loading } = useData();
    // if (loading) return <div>Loading...</div>;
    return (
        <div className={styles.container}>
            <Head>
                <title>DAOmocles</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar
                isCreate={true}
            />
            {/* for no Dao */}
            {!DAONum && (
                <main className="w-full flex flex-col justify-center py-4 flex-grow max-w-8xl items-center">
                    <div className={styles.noDAO} >

                        <button
                            className=" flex flex-col justify-center" id="table"
                            onClick={() => {
                                console.log("clicked create");
                            }}
                        >
                            Create Your Space
                        </button>
                    </div>
                </main>
            )}
            {/* for one or more dao */}
            {DAONum && (
                <div className={styles.DAOlist} style={{ marginBottom: "50px" }}>
                    {daoTestData.profileList.map((item) => {
                        return (
                            <Link href={'/overview?DAO=' + item.name + '?permission=' + item.access} passHref >
                                <div className={styles.DAOinstance}>

                                    <div>
                                        <span style={{ height: "125px", display: "block", textAlign: "center" }}>
                                            <img src={item.logoURL} style={{ height: "125px", borderRadius: "15px", margin: "auto" }} />
                                        </span>

                                        <div style={{ float: "left", marginLeft: "28%", textAlign: "center", verticalAlign: "middle" }}>
                                            {item.name}
                                            {item.access == "admin" ? (<div className={styles.DAOaccess} style={{ backgroundColor: "#CBAB8D", verticalAlign: "middle" }}>{item.access}</div>)
                                                : item.access == "subadmin" ? (<div className={styles.DAOaccess} style={{ backgroundColor: "#84384a" }}>{item.access}</div>)
                                                    : (<div className={styles.DAOaccess} style={{ backgroundColor: "#517F57" }}>{item.access}</div>)}
                                        </div>

                                    </div>

                                </div>
                            </Link>
                        )
                    })}
                    <Link href={'/create'} passHref >
                        <button
                            className={styles.addDAO} id="table"
                            onClick={() => {
                                console.log("clicked create for yes dao");
                            }}
                        >
                            +
                        </button>
                    </Link>
                </div>
            )
            }
        </div >
    );
}
