"use client";

import { ChartABC } from "@/components/elements/ChartACB";
import { Combobox } from "@/components/elements/ComboBox";
import { TopChartABC } from "@/components/elements/TopChartABC";
import { CustomBreadcrumb } from "@/components/layouts/CustomBreadcrumb";
import { useVersion } from "@/contexts/VersionContext";
import { Month, StoreName, tableName } from "@/lib/dictTable";
import { ResABC } from "@/types";
import { getABCData } from "@/utils/apiUtils";
import { useEffect, useState } from "react";

const ABCAnalysisPage = () => {
  const { selectedVersion, anotherVariable } = useVersion();

  const [resABC, setResABC] = useState<ResABC[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const table: string = tableName(
        selectedVersion as StoreName,
        anotherVariable as Month
      );
      const resABC: ResABC[] = await getABCData(table);
      console.log(resABC);
      setResABC(resABC);
    };
    fetchData();
  }, [selectedVersion, anotherVariable]);

  const totalPrice = resABC.reduce((acc, cur) => acc + cur.sales, 0);
  return (
    <div>
      <CustomBreadcrumb selectedVersion={selectedVersion} pageName="ABC分析" />
      <div className="flex justify-between">
        <div className="p-4 space-y-2">
          <h1 className="font-semibold text-4xl items-center justify-center">
            ABC分析
          </h1>
          <p className="text-sm text-gray-500">
            ABC分析は、商品の売上高や利益率などの指標をもとに、商品をA、B、Cの3つのグループに分類する手法です。
          </p>
        </div>
        <div className="p-4 my-auto">
          <Combobox />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 p-4">
        <TopChartABC totalPrice={totalPrice} chartData={resABC} />
        <div className="col-span-2">
          <ChartABC
            chartData={resABC}
            title="パレート図"
            description="パレート図は、商品の売上高を可視化したものです。"
          />
        </div>
      </div>
    </div>
  );
};

export default ABCAnalysisPage;
