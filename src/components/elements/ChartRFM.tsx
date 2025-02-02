"use client";

import { useMemo } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ResRFM } from "@/types";

const chartConfig = {
  x: {
    label: "X Axis",
    color: "hsl(var(--chart-1))",
  },
  y: {
    label: "Y Axis",
    color: "hsl(var(--chart-2))",
  },
};

type ChartRFMProps = {
  title: string;
  description: string;
  xLabel: string;
  yLabel: string;
  data: ResRFM[];
  color: string;
};

export function ChartRFM(props: ChartRFMProps) {
  // ダウンサンプリング処理: 件数が多い場合は上限200件にする
  const processedData = useMemo(() => {
    const limit = 200;
    if (props.data.length > limit) {
      const step = Math.ceil(props.data.length / limit);
      return props.data.filter((_, index) => index % step === 0);
    }
    return props.data;
  }, [props.data]);

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                type="number"
                dataKey={props.xLabel}
                name={props.xLabel}
                label={{ value: props.xLabel, position: "bottom" }}
                tickFormatter={(value) => Number(value).toLocaleString()}
              />
              <YAxis
                type="number"
                dataKey={props.yLabel}
                name={props.yLabel}
                label={{ value: props.yLabel, angle: -90, position: "left" }}
                tickFormatter={(value) => Number(value).toLocaleString()}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Scatter
                name="Data Points"
                data={processedData}
                fill={props.color}
                fillOpacity={0.7}
                animationDuration={200}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
