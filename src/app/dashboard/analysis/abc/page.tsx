"use client";

import { ChartABC } from "@/components/elements/ChartACB";
import { CustomBreadcrumb } from "@/components/layouts/CustomBreadcrumb";
import { useVersion } from "@/contexts/VersionContext";
import { Month, StoreName, tableName } from "@/lib/dictTable";
import { ResABC } from "@/types";
import { getABCData } from "@/utils/apiUtils";
import { useEffect } from "react";

const ABCAnalysisPage = () => {
  const { selectedVersion } = useVersion();

  useEffect(() => {
    const fetchData = async () => {
      const table: string = tableName(selectedVersion as StoreName, 7 as Month);
      const resABC: ResABC[] = await getABCData(table);
      console.log(resABC);
    };
    fetchData();
  }, [selectedVersion]);

  return (
    <div>
      <CustomBreadcrumb selectedVersion={selectedVersion} pageName="ABC分析" />
      <ChartABC />
    </div>
  );
};

export default ABCAnalysisPage;
