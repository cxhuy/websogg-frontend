import React, { useState, useEffect} from "react";

// import MunpiaData from "../jsondata/munpia.json";
// import NovelpiaData from "../jsondata/novelpia.json";
// import KakaopageData from "../jsondata/kakaopage.json";
// import KakaostageData from "../jsondata/kakaostage.json";
// import NavernovelData from "../jsondata/navernovel.json";

import MainPlatformInfo from "../components/platform/MainPlatformInfo";

function Home() {
    const [MunpiaData, setMunpiaData] = useState(null);
    const [NovelpiaData, setNovelpiaData] = useState(null);
    const [KakaopageData, setKakaopageData] = useState(null);
    const [KakaostageData, setKakaostageData] = useState(null);
    const [NavernovelData, setNavernovelData] = useState(null);

    const getData = async () => {
        const response = await fetch("../jsondata/munpia.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const data = await response.json();
        setMunpiaData(data);

        const response2 = await fetch("../jsondata/novelpia.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });

        const data2 = await response2.json();
        setNovelpiaData(data2);

        const response3 = await fetch("../jsondata/kakaopage.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const data3 = await response3.json();
        setKakaopageData(data3);

        const response4 = await fetch("../jsondata/kakaostage.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const data4 = await response4.json();
        setKakaostageData(data4);

        const response5 = await fetch("../jsondata/navernovel.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const data5 = await response5.json();
        setNavernovelData(data5);
    };

    useEffect(() => {
        getData();
    }, []);

    if (!MunpiaData || !NovelpiaData || !KakaopageData || !KakaostageData || !NavernovelData) return <div className="bg-gray-900 w-screen h-screen"></div>;

    return (
        <div className="container px-3 py-2.5 mt-6 flex flex-col">
            <div className="mx-auto dark:text-gray-200 text-6xl">웹소지지</div>
            <div className="mx-auto my-2 text-gray-600 dark:text-gray-400">
                웹소지지는 최근 1주일 내에 연재 기록이 있는 작품들을 기준으로
                데이터를 제공합니다.
            </div>
            <MainPlatformInfo
                platformInfo={MunpiaData.platformInfoData}
                platformPageName="munpia"
            />
            <MainPlatformInfo
                platformInfo={NovelpiaData.platformInfoData}
                platformPageName="novelpia"
            />
            <MainPlatformInfo
                platformInfo={KakaopageData.platformInfoData}
                platformPageName="kakaopage"
            />
            <MainPlatformInfo
                platformInfo={KakaostageData.platformInfoData}
                platformPageName="kakaostage"
            />
            <MainPlatformInfo
                platformInfo={NavernovelData.platformInfoData}
                platformPageName="navernovel"
            />
        </div>
    );
}

export default Home;
