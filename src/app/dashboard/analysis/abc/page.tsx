"use client";

import { CustomBreadcrumb } from "@/components/layouts/CustomBreadcrumb";
import { useVersion } from "@/contexts/VersionContext";

const ABCAnalysisPage = () => {
  const { selectedVersion } = useVersion();
  return (
    <div>
      <CustomBreadcrumb selectedVersion={selectedVersion} pageName="ABC分析" />
    </div>
  );
};

export default ABCAnalysisPage;
