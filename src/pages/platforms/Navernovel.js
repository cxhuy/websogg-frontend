import React, { useState, useEffect} from "react";
import Noticebar from "../../components/global/noticebar";
import PlatformInfo from "../../components/platform/PlatformInfo";
import Heatmap from "../../components/platform/Heatmap";
import GenreTable from "../../components/platform/GenreTable";
import UploadPeriodTable from "../../components/platform/UploadPeriodTable";

function Navernovel() {
    const [NavernovelData, setNavernovelData] = useState(null);

    const getData = async () => {
        const response = await fetch("../jsondata/navernovel.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        const data = await response.json();
        setNavernovelData(data);
    };

    useEffect(() => {
        getData();
    }, []);

    if (!NavernovelData) return <div className="bg-gray-900 w-screen h-screen"></div>;

    return (
        <>
            <Noticebar noticeMsg="네이버 웹소설은 최신화 조회수만 제공되고 있습니다." />
            <PlatformInfo platformInfoData={NavernovelData.platformInfoData} />
            <Heatmap
                heatmapData={NavernovelData.heatmapData}
                platformGenres={NavernovelData.platformInfoData.platformGenres}
            />
            <GenreTable genreData={NavernovelData.genreData} />
            <UploadPeriodTable
                uploadPeriodData={NavernovelData.weeklyUploadCountData}
            />
        </>
    );
}

export default Navernovel;
