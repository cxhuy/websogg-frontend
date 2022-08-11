import React from 'react'
import PlatformInfo from "../../components/platform/PlatformInfo";
import Heatmap from '../../components/platform/Heatmap';
import GenreTable from '../../components/platform/GenreTable';
import MonopolyTable from '../../components/platform/MonopolyTable';
import UploadPeriodTable from '../../components/platform/UploadPeriodTable';
// import PricingTable from "../../components/platform/pricingTable.svelte";
// import KeywordsTagsTable from "../../components/platform/keywordsTagsTable.svelte";

import MunpiaData from "../../jsondata/munpia.json";

function Munpia() {
  return (
    <>
        <PlatformInfo platformInfoData={MunpiaData.platformInfoData}/>
        <Heatmap heatmapData={MunpiaData.heatmapData} platformGenres={MunpiaData.platformInfoData.platformGenres}/>
        <GenreTable genreData={MunpiaData.genreData}/>
        <MonopolyTable monopolyData={MunpiaData.monopolyData}/>
        <UploadPeriodTable uploadPeriodData={MunpiaData.weeklyUploadCountData}/>
        {/* <PricingTable pricingData={MunpiaData.pricingData}/> */}
        {/* <KeywordsTagsTable keywordsTagsData={MunpiaData.keywordsTagsData}/> */}
    </>
  )
}

export default Munpia