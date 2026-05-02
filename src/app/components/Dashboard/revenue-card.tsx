"use client";

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  ComposedChart,
} from "recharts";
import { cn } from "@/lib/utils";
import { DATA } from "../../../../public/Mock_Data/data";

type ViewState = "booking" | "revenue" | "both";

export function RevenueChart() {
  const [view, setView] = useState<ViewState>("both");

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 leading-tight">
            Bookings & Revenue
          </h3>
          <p className="text-sm font-medium text-slate-400 mt-0.5">
            Daily volume — last 14 days
          </p>
        </div>

        <div className="flex p-1 bg-slate-50 rounded-lg border border-slate-100">
          {(["booking", "revenue", "both"] as ViewState[]).map((type) => (
            <button
              key={type}
              onClick={() => setView(type)}
              className={cn(
                "px-4 py-1.5 text-xs font-bold capitalize transition-all rounded-md",
                view === type
                  ? "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200"
                  : "text-slate-500 hover:text-slate-700",
              )}
            >
              {type === "both" ? "Both" : type}
            </button>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mb-6">
        {(view === "both" || view === "booking") && (
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-6 bg-[#0a192f]" />
            <span className="text-xs font-bold text-slate-500">Bookings</span>
          </div>
        )}
        {(view === "both" || view === "revenue") && (
          <div className="flex items-center gap-2">
            <div className="h-0.5 w-6 border-t-2 border-dashed border-[#D99A29]" />
            <span className="text-xs font-bold text-slate-500">Revenue</span>
          </div>
        )}
      </div>

      {/* Chart Area */}
      <div className="h-100 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={DATA}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0a192f" stopOpacity={0.05} />
                <stop offset="95%" stopColor="#0a192f" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fontWeight: 500, fill: "#94a3b8" }}
              dy={10}
            />

            {/* Left Y-Axis for Bookings */}
            <YAxis
              yAxisId="left"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fontWeight: 500, fill: "#94a3b8" }}
              label={{
                value: "Bookings",
                angle: -90,
                position: "insideLeft",
                fontSize: 10,
                fill: "#94a3b8",
                dx: -10,
              }}
            />

            {/* Right Y-Axis for Revenue */}
            <YAxis
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fontWeight: 500, fill: "#D99A29" }}
              tickFormatter={(val) => `$${val / 1000}k`}
              label={{
                value: "Revenue",
                angle: 90,
                position: "insideRight",
                fontSize: 10,
                fill: "#D99A29",
                dx: 10,
              }}
            />

            <Tooltip content={<CustomTooltip />} />

            {/* Booking Line & Area */}
            {(view === "both" || view === "booking") && (
              <>
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="bookings"
                  stroke="none"
                  fillOpacity={1}
                  fill="url(#colorBookings)"
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="bookings"
                  stroke="#0a192f"
                  strokeWidth={2.5}
                  dot={{
                    r: 3,
                    fill: "#0a192f",
                    strokeWidth: 2,
                    stroke: "#fff",
                  }}
                  activeDot={{ r: 5, strokeWidth: 0 }}
                />
              </>
            )}

            {/* Revenue Line */}
            {(view === "both" || view === "revenue") && (
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="revenue"
                stroke="#D99A29"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ r: 3, fill: "#D99A29", strokeWidth: 2, stroke: "#fff" }}
                activeDot={{ r: 5, strokeWidth: 0 }}
              />
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 p-3 rounded-lg shadow-lg">
        <p className="text-xs font-bold text-slate-500 mb-2">{label}</p>
        <div className="space-y-1.5">
          {payload.map((entry: any) => (
            <div
              key={entry.name}
              className="flex items-center gap-4 justify-between"
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-[11px] font-medium text-slate-600 capitalize">
                  {entry.name}
                </span>
              </div>
              <span className="text-xs font-bold text-slate-900">
                {entry.name === "revenue"
                  ? `$${entry.value.toLocaleString()}`
                  : entry.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
}
