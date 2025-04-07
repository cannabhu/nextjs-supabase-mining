"use client"

import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from "recharts"

const data = [
  { month: "Jan", value: 40000000, projected: 40000000 },
  { month: "Feb", value: 41500000, projected: 41000000 },
  { month: "Mar", value: 43200000, projected: 42000000 },
  { month: "Apr", value: 45231890, projected: 43000000 },
  { month: "May", value: null, projected: 44000000 },
  { month: "Jun", value: null, projected: 45000000 },
  { month: "Jul", value: null, projected: 46000000 },
  { month: "Aug", value: null, projected: 47000000 },
  { month: "Sep", value: null, projected: 48000000 },
  { month: "Oct", value: null, projected: 49000000 },
  { month: "Nov", value: null, projected: 50000000 },
  { month: "Dec", value: null, projected: 51000000 },
]

export function InvestmentDetailChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
          <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, undefined]} />
          <Legend />
          <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} name="Actual Value" />
          <Area
            type="monotone"
            dataKey="projected"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.3}
            strokeDasharray="5 5"
            name="Projected Value"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

