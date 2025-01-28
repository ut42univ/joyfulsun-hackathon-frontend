"use client";

import { checkConnection } from "@/utils/apiUtils";
import { useState } from "react";

export const Connection = () => {
  const [connected, setConnected] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  checkConnection().then((res) => {
    setConnected(res);
    setLoading(false);
  });

  return (
    <div className="text-sm flex gap-2">
      <h1>バックエンド接続状況:</h1>
      {loading ? (
        <p>Trying...</p>
      ) : connected ? (
        <p className="text-green-400">接続成功</p>
      ) : (
        <p className="text-red-400">接続失敗</p>
      )}
    </div>
  );
};
