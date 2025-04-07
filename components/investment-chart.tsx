"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", actual: 4000, projected: 4400 },
  { month: "Feb", actual: 5000, projected: 5200 },
  { month: "Mar", actual: 6000, projected: 6100 },
  { month: "Apr", actual: 7000, projected: 7300 },
  { month: "May", actual: 8500, projected: 8200 },
  { month: "Jun", actual: 9800, projected: 9500 },
  { month: "Jul", actual: 11000, projected: 10800 },
  { month: "Aug", actual: 12500, projected: 12000 },
  { month: "Sep", actual: 14000, projected: 13500 },
  { month: "Oct", actual: null, projected: 15000 },
  { month: "Nov", actual: null, projected: 16500 },
  { month: "Dec", actual: null, projected: 18000 },
]

export function InvestmentChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
          <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, undefined]} />
          <Legend />
          <Line
            type="monotone"
            dataKey="actual"
            stroke="#8884d8"
            strokeWidth={2}
            activeDot={{ r: 8 }}
            name="Actual ROI"
          />
          <Line
            type="monotone"
            dataKey="projected"
            stroke="#82ca9d"
            strokeWidth={2}
            strokeDasharray="5 5"
            name="Projected ROI"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

