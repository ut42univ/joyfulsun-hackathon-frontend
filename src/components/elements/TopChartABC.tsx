"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ResABC } from "@/types";
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "hsl(var(--chart-0))", // Add a default color
  },
  日配: {
    label: "日配",
    color: "hsl(var(--chart-1))",
  },
  惣菜: {
    label: "惣菜",
    color: "hsl(var(--chart-2))",
  },
  食品: {
    label: "食品",
    color: "hsl(var(--chart-3))",
  },
  精肉: {
    label: "精肉",
    color: "hsl(var(--chart-4))",
  },
  菓子: {
    label: "菓子",
    color: "hsl(var(--chart-5))",
  },
  酒販: {
    label: "酒販",
    color: "hsl(var(--chart-6))",
  },
} satisfies ChartConfig;

type TopChartABCProps = {
  totalPrice: number;
  chartData: ResABC[];
};

// renderBar 関数を Tooltip を使わずに title 属性を追加する形に変更
const renderBar = (props: any) => {
  const { x, y, width, height, payload } = props;
  const key =
    payload && payload.category ? payload.category.toLowerCase() : "visitors";
  const config = chartConfig[key as keyof typeof chartConfig];
  const fill = config?.color || "#AAAAAA";
  const labelText = config?.label || payload.category;
  const sales = payload.sales;
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={5}
      fill={fill}
      data-title={`${labelText} : ${sales}`}
    />
  );
};

export function TopChartABC(props: TopChartABCProps) {
  const topCategory = [...props.chartData]
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 4);

  return (
    <Card>
      <CardHeader>
        <CardTitle>売上高概要</CardTitle>
        <CardDescription className="flex items-center">
          <TrendingUp className="h-6 w-6 mr-2" />
          売上貢献度トップの商品を表示しています。
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <h2>合計売上高</h2>
          <p className="font-semibold text-2xl">
            ¥{Number(props.totalPrice).toLocaleString()}
          </p>
        </div>
      </CardContent>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={[...props.chartData]
              .sort((a, b) => b.sales - a.sales)
              .slice(0, 4)}
            layout="vertical"
            margin={{ left: 0 }}
          >
            <YAxis
              dataKey="category"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tick={{ fontSize: 16, fill: "#333" }} // 変更箇所: フォントサイズと文字色を変更
            />
            <XAxis dataKey="sales" type="number" hide />
            <Bar
              dataKey="sales"
              layout="vertical"
              radius={5}
              shape={renderBar}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
