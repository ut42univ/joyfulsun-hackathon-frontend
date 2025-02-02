"use client";

import { ChartRFM } from "@/components/elements/ChartRFM";
import { Combobox } from "@/components/elements/ComboBox";
import { CustomBreadcrumb } from "@/components/layouts/CustomBreadcrumb";
import { useVersion } from "@/contexts/VersionContext";
import { Month, StoreName, tableName } from "@/lib/dictTable";
import { ResRFM } from "@/types";
import { getRFMData } from "@/utils/apiUtils";
import { useEffect, useState } from "react";

const RFMAnalysisPage = () => {
  const { selectedVersion, anotherVariable } = useVersion();

  const [resRFM, setResRFM] = useState<ResRFM[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const table: string = tableName(
        selectedVersion as StoreName,
        anotherVariable as Month
      );
      const resRFM: ResRFM[] = await getRFMData(table);
      console.log(resRFM);
      setResRFM(resRFM);
    };
    fetchData();
  }, [selectedVersion, anotherVariable]);
  return (
    <div>
      <CustomBreadcrumb selectedVersion={selectedVersion} pageName="RFM分析" />
      <div className="flex justify-between">
        <div className="p-4 space-y-2">
          <h1 className="font-semibold text-4xl items-center justify-center">
            RFM分析
          </h1>
          <p className="text-sm text-gray-500">
            RFM分析は、リテンションマーケティングにおいて、顧客の購買履歴を分析し、
            顧客の購買履歴を分析し、顧客を分類する手法です。
          </p>
        </div>
        <div className="p-4 my-auto ">
          <Combobox />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4">
        <ChartRFM
          title="Recency vs Frequency"
          description="Recencyは最終購入日からの経過日数、Frequencyは購入回数を表します。"
          data={resRFM}
          xLabel="recency"
          yLabel="frequency"
          color="hsl(var(--chart-1))"
        />

        <ChartRFM
          title="Recency vs Monetary"
          description="Recencyは最終購入日からの経過日数、Monetaryは購入金額を表します。"
          data={resRFM}
          xLabel="recency"
          yLabel="monetary"
          color="hsl(var(--chart-2))"
        />

        <ChartRFM
          title="Frequency vs Monetary"
          description="Frequencyは購入回数、Monetaryは購入金額を表します。"
          data={resRFM}
          xLabel="frequency"
          yLabel="monetary"
          color="hsl(var(--chart-4))"
        />
      </div>
    </div>
  );
};

export default RFMAnalysisPage;
