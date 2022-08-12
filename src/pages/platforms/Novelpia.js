import React, { useState, useEffect} from "react";
import Noticebar from "../../components/global/noticebar";
import PlatformInfo from "../../components/platform/PlatformInfo";
import Heatmap from "../../components/platform/Heatmap";
import GenreTable from "../../components/platform/GenreTable";
import MonopolyTable from "../../components/platform/MonopolyTable";
import UploadPeriodTable from "../../components/platform/UploadPeriodTable";
import PricingTable from "../../components/platform/PricingTable";
import KeywordsTagsTable from "../../components/platform/KeywordsTagsTable";

function Novelpia() {
    const [NovelpiaData, setNovelpiaData] = useState(null);

    const getData = async () => {
        const response = await fetch("../jsondata/novelpia.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const data = await response.json();
        setNovelpiaData(data);
    };

    useEffect(() => {
        getData();
    }, []);

    if (!NovelpiaData) return <div className="bg-gray-900 w-screen h-screen"></div>;

    return (
        <>
            <Noticebar noticeMsg="19금 작품은 제외한 정보입니다." />
            <PlatformInfo platformInfoData={NovelpiaData.platformInfoData} />
            <Heatmap
                heatmapData={NovelpiaData.heatmapData}
                platformGenres={NovelpiaData.platformInfoData.platformGenres}
            />
            <GenreTable genreData={NovelpiaData.genreData} />
            <MonopolyTable monopolyData={NovelpiaData.monopolyData} />
            <UploadPeriodTable
                uploadPeriodData={NovelpiaData.weeklyUploadCountData}
            />
            <PricingTable pricingData={NovelpiaData.pricingData} />
            <KeywordsTagsTable
                keywordsTagsData={NovelpiaData.keywordsTagsData}
            />
        </>
    );
}

export default Novelpia;
