import React, { useState, useEffect} from "react";
import PlatformInfo from "../../components/platform/PlatformInfo";
import Heatmap from "../../components/platform/Heatmap";
import GenreTable from "../../components/platform/GenreTable";
import MonopolyTable from "../../components/platform/MonopolyTable";
import UploadPeriodTable from "../../components/platform/UploadPeriodTable";
import PricingTable from "../../components/platform/PricingTable";
import KeywordsTagsTable from "../../components/platform/KeywordsTagsTable";

function Munpia() {
    const [MunpiaData, setMunpiaData] = useState(null);

    const getData = async () => {
        const response = await fetch("../jsondata/munpia.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const data = await response.json();
        setMunpiaData(data);
    };

    useEffect(() => {
        getData();
    }, []);

    if (!MunpiaData) return <div className="bg-gray-900 w-screen h-screen"></div>;

    return (
        <>
            <PlatformInfo platformInfoData={MunpiaData.platformInfoData} />
            <Heatmap
                heatmapData={MunpiaData.heatmapData}
                platformGenres={MunpiaData.platformInfoData.platformGenres}
            />
            <GenreTable genreData={MunpiaData.genreData} />
            <MonopolyTable monopolyData={MunpiaData.monopolyData} />
            <UploadPeriodTable
                uploadPeriodData={MunpiaData.weeklyUploadCountData}
            />
            <PricingTable pricingData={MunpiaData.pricingData} />
            <KeywordsTagsTable keywordsTagsData={MunpiaData.keywordsTagsData} />
        </>
    );
}

export default Munpia;
