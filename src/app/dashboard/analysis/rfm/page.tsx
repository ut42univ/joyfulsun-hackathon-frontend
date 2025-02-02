"use client";

import { CustomBreadcrumb } from "@/components/layouts/CustomBreadcrumb";
import { useVersion } from "@/contexts/VersionContext";
import { Month, StoreName, tableName } from "@/lib/dictTable";
import { ResRFM } from "@/types";
import { getRFMData } from "@/utils/apiUtils";
import { useEffect } from "react";

const RFMAnalysisPage = () => {
  const { selectedVersion } = useVersion();

  useEffect(() => {
    const fetchData = async () => {
      const table: string = tableName(selectedVersion as StoreName, 7 as Month);
      const resRFM: ResRFM[] = await getRFMData(table);
      console.log(resRFM);
    };
    fetchData();
  }, [selectedVersion]);
  return (
    <div>
      <CustomBreadcrumb selectedVersion={selectedVersion} pageName="RFM分析" />
    </div>
  );
};

export default RFMAnalysisPage;
