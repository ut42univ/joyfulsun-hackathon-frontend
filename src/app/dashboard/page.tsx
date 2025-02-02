"use client";

import { ChartTest } from "@/components/elements/chart";
import { CustomBreadcrumb } from "@/components/layouts/CustomBreadcrumb";
import { useVersion } from "@/contexts/VersionContext";

export default function DashboardHomePage() {
  const { selectedVersion } = useVersion();
  return (
    <div>
      <CustomBreadcrumb selectedVersion={selectedVersion} pageName="店舗概要" />
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">店舗概要</h1>
        <p className="mt-2">
          ここに店舗概要の情報が入ります。ここに店舗概要の情報が入ります。
          ここに店舗概要の情報が入ります。ここに店舗概要の情報が入ります。
          ここに店舗概要の情報が入ります。ここに店舗概要の情報が入ります。
          ここに店舗概要の情報が入ります。ここに店舗概要の情報が入ります。
          ここに店舗概要の情報が入ります。ここに店舗概要の情報が入ります。
          ここに店舗概要の情報が入ります。ここに店舗概要の情報が入ります。
          ここに店舗概要の情報が入ります。ここに店舗概要の情報が入ります。
        </p>
      </div>
      <ChartTest />
    </div>
  );
}
