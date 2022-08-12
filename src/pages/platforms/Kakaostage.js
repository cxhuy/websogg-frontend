import React from "react";
import PlatformInfo from "../../components/platform/PlatformInfo";
import Heatmap from "../../components/platform/Heatmap";
import GenreTable from "../../components/platform/GenreTable";
// import MonopolyTable from '../../components/platform/MonopolyTable';
import UploadPeriodTable from "../../components/platform/UploadPeriodTable";
import KeywordsTagsTable from "../../components/platform/KeywordsTagsTable";

import KakaostageData from "../../jsondata/kakaostage.json";

function Kakaostage() {
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
