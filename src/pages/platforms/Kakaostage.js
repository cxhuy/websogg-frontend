import React, { useState, useEffect} from "react";
import PlatformInfo from "../../components/platform/PlatformInfo";
import Heatmap from "../../components/platform/Heatmap";
import GenreTable from "../../components/platform/GenreTable";
// import MonopolyTable from '../../components/platform/MonopolyTable';
import UploadPeriodTable from "../../components/platform/UploadPeriodTable";
import KeywordsTagsTable from "../../components/platform/KeywordsTagsTable";

function Kakaostage() {
    const [KakaostageData, setKakaostageData] = useState(null);

    const getData = async () => {
        const response = await fetch("../jsondata/kakaostage.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const data = await response.json();
        setKakaostageData(data);
    };

    useEffect(() => {
        getData();
    }, []);

    if (!KakaostageData) return <div className="bg-gray-900 w-screen h-screen"></div>;

    return (
        <>
            <PlatformInfo platformInfoData={KakaostageData.platformInfoData} />
            <Heatmap
                heatmapData={KakaostageData.heatmapData}
                platformGenres={KakaostageData.platformInfoData.platformGenres}
            />
            <GenreTable genreData={KakaostageData.genreData} />
            {/* <MonopolyTable monopolyData={KakaostageData.monopolyData}/> */}
            <UploadPeriodTable
                uploadPeriodData={KakaostageData.weeklyUploadCountData}
            />
            <KeywordsTagsTable
                keywordsTagsData={KakaostageData.keywordsTagsData}
            />
        </>
    );
}

export default Kakaostage;
