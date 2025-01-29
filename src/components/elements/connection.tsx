"use client";

import { checkConnection } from "@/utils/apiUtils";
import { useEffect, useState } from "react";

export const Connection = () => {
  const [connected, setConnected] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    checkConnection().then((res: boolean) => {
      setConnected(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="text-sm flex gap-2">
      <h1>バックエンド接続状況:</h1>
      {loading ? (
        <p className="text-yellow-400 animate-pulse">接続中...</p>
      ) : connected ? (
        <p className="text-green-400">接続成功</p>
      ) : (
        <p className="text-red-400">接続失敗</p>
      )}
    </div>
  );
};
