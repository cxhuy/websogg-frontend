import React, { useState, useEffect} from "react";
import Noticebar from "../../components/global/noticebar";
import PlatformInfo from "../../components/platform/PlatformInfo";
import Heatmap from "../../components/platform/Heatmap";
import GenreTable from "../../components/platform/GenreTable";
import MonopolyTable from "../../components/platform/MonopolyTable";
import UploadPeriodTable from "../../components/platform/UploadPeriodTable";
import KeywordsTagsTable from "../../components/platform/KeywordsTagsTable";

function Kakaopage() {
    const [KakaopageData, setKakaopageData] = useState(null);

    const getData = async () => {
        const response = await fetch("../jsondata/kakaopage.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const data = await response.json();
        setKakaopageData(data);
    };

    useEffect(() => {
        getData();
    }, []);

    if (!KakaopageData) return <div className="bg-gray-900 w-screen h-screen"></div>;

    return (
        <>
            <Noticebar noticeMsg="판드, BL 장르는 제외한 정보입니다." />
            <PlatformInfo platformInfoData={KakaopageData.platformInfoData} />
            <Heatmap
                heatmapData={KakaopageData.heatmapData}
                platformGenres={KakaopageData.platformInfoData.platformGenres}
            />
            <GenreTable genreData={KakaopageData.genreData} />
            <MonopolyTable monopolyData={KakaopageData.monopolyData} />
            <UploadPeriodTable
                uploadPeriodData={KakaopageData.weeklyUploadCountData}
            />
            <KeywordsTagsTable
                keywordsTagsData={KakaopageData.keywordsTagsData}
            />
        </>
    );
}

export default Kakaopage;
