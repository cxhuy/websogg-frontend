import React from 'react'
import Noticebar from '../../components/global/noticebar';
import PlatformInfo from "../../components/platform/PlatformInfo";
import Heatmap from '../../components/platform/Heatmap';
import GenreTable from '../../components/platform/GenreTable';
import MonopolyTable from '../../components/platform/MonopolyTable';
import UploadPeriodTable from '../../components/platform/UploadPeriodTable';
import PricingTable from '../../components/platform/PricingTable';
import KeywordsTagsTable from '../../components/platform/KeywordsTagsTable';

import NovelpiaData from "../../jsondata/novelpia.json";

function Novelpia() {
  return (
    <>
        <Noticebar noticeMsg="19금 작품은 제외한 정보입니다."/>
        <PlatformInfo platformInfoData={NovelpiaData.platformInfoData}/>
        <Heatmap heatmapData={NovelpiaData.heatmapData} platformGenres={NovelpiaData.platformInfoData.platformGenres}/>
        <GenreTable genreData={NovelpiaData.genreData}/>
        <MonopolyTable monopolyData={NovelpiaData.monopolyData}/>
        <UploadPeriodTable uploadPeriodData={NovelpiaData.weeklyUploadCountData}/>
        <PricingTable pricingData={NovelpiaData.pricingData}/>
        <KeywordsTagsTable keywordsTagsData={NovelpiaData.keywordsTagsData}/>
    </>
  )
}

export default Novelpia