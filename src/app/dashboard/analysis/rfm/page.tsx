"use client";

import { CustomBreadcrumb } from "@/components/layouts/CustomBreadcrumb";
import { useVersion } from "@/contexts/VersionContext";

const RFMAnalysisPage = () => {
  const { selectedVersion } = useVersion();
  return (
    <div>
      <CustomBreadcrumb selectedVersion={selectedVersion} pageName="RFM分析" />
    </div>
  );
};

export default RFMAnalysisPage;
