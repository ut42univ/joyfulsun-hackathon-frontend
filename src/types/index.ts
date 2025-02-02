export type ResPos = {
  store_id: number;
  store_name: string;
  receipt_id: number;
  date: Date;
  time: Date;
  section_id: number;
  section_name: string;
  subcategory_id: number;
  subcategory_name: string;
  class_id: number;
  class_name: string;
  product_id: number;
  product_name: string;
  price: number;
  quantity: number;
  total_price: number;
  card_id: number | null;
  address: number | null;
  age: number | null;
  gender: string | null;
};

export type ResABC = {
  category: string;
  price: number;
  sales: number;
  cumulative_percentage: number;
  classed_as: string;
};

export type ResRFM = {
  recency: number;
  frequency: number;
  monetary: number;
  r_score: number;
  f_score: number;
  m_score: number;
};
