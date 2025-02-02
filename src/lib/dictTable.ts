// キーを厳密に限定したい場合は、型定義を追加する方法もあります
export type StoreName =
  | "江川本店"
  | "城栄店"
  | "本原店"
  | "大浦店"
  | "新大工町ファンスクエア店"
  | "住吉店"
  | "宝町店"
  | "時津店"
  | "山里店";

// 辞書をRecordを使って定義する方法
const storeDict: Record<StoreName, string> = {
  江川本店: "egawa",
  城栄店: "jouei",
  本原店: "motohara",
  大浦店: "oura",
  新大工町ファンスクエア店: "shindaiku",
  住吉店: "sumiyoshi",
  宝町店: "takara",
  時津店: "togitsu",
  山里店: "yamazato",
};

export type Month = 7 | 8 | 9;

const schemaDict: Record<Month, string> = {
  7: "store_07",
  8: "store_08",
  9: "store_09",
};

export const tableName = (store: StoreName, month: Month): string => {
  return `${schemaDict[month]}.${storeDict[store]}`;
};
