import { BiBorderRadius } from "react-icons/bi";
import "./ActivityFeed.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  {
    day: "Mon",
    value1: 5,
    value2_base: 2,
    value2_visible: 2,
    value3_base: 1,
    value3_visible1: 0.95,
    value3_between: 0.1,
    value3_visible2: 0.95,
    value4: 2,
  },
  {
    day: "Tues",
    value_a: 2.45,
    value_b: 0.1,
    value_c: 2.45,
    value2_base: 2,
    value2_visible: 2,
    value3_base: 1,
    value3_visible1: 0.95,
    value3_between: 0.1,
    value3_visible2: 0.95,
    value4: 2,
  },
  {
    day: "Wed",
    value1: 5,
    value2_base: 2,
    value2_visible: 2,
    value3_base: 1,
    value3_visible1: 0.95,
    value3_between: 0.1,
    value3_visible2: 0.95,
    value4: 2,
  },
  {
    day: "Thurs",
    value_a: 2.45,
    value_b: 0.1,
    value_c: 2.45,
    value2_base: 2,
    value2_visible: 2,
    value3_base: 1,
    value3_visible1: 0.95,
    value3_between: 0.1,
    value3_visible2: 0.95,
    value4: 2,
  },
  {
    day: "Fri",
    value1: 5,
    value2_base: 2,
    value2_visible: 2,
    value3_base: 1,
    value3_visible1: 0.95,
    value3_between: 0.1,
    value3_visible2: 0.95,
    value4: 2,
  },
  {
    day: "Sat",
    value_a: 2.45,
    value_b: 0.1,
    value_c: 2.45,
    value2_base: 2,
    value2_visible: 2,
    value3_base: 1,
    value3_visible1: 0.95,
    value3_between: 0.1,
    value3_visible2: 0.95,
    value4: 2,
  },
  {
    day: "Sun",
    value1: 5,
    value2_base: 2,
    value2_visible: 2,
    value3_base: 1,
    value3_visible1: 0.95,
    value3_between: 0.1,
    value3_visible2: 0.95,
    value4: 2,
  },
];

export default function ActivityFeed() {
  return (
    <>
      <h2 className="activity">Activity</h2>
      <div className="a12s">
        <ResponsiveContainer width={500} height={200}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, bottom: 5, left: 0 }}
            style={{ fill: "#a3a1ca;", BorderRadius: "1.5rem" }}
          >
            <XAxis
              dataKey="day"
              type="category"
              axisLine={false}
              tickLine={false}
              tick={{ fontFamily: "Nunito", dx: 10 }}
            />
            <YAxis
              width={0}
              axisLine={false}
              tickline={false}
              tick={false}
              domain={[0, "dataMax"]}
            />
            <Tooltip />
            <Bar
              dataKey="value1"
              stackId="a"
              fill="#cccccc"
              radius={[10, 10, 10, 10]}
            ></Bar>
            <Bar
              dataKey="value_a"
              stackId="a"
              fill="#800080"
              radius={[10, 10, 10, 10]}
            />
            <Bar dataKey="value_b" stackId="a" fill="transparent" />
            <Bar
              dataKey="value_c"
              stackId="a"
              fill="#0000ff"
              radius={[10, 10, 10, 10]}
            />
            <Bar dataKey="value2_base" stackId="b" fill="transparent" />
            <Bar dataKey="value2_visible" stackId="b" radius={[10, 10, 10, 10]}>
              {data.map((entry, index) => (
                <Cell
                  key={`value2_base-${index}`}
                  fill={
                    entry.day === "Mon"
                      ? "#0000ff"
                      : entry.day === "Tues"
                      ? "#800080"
                      : entry.day === "Thurs"
                      ? "#0000ff"
                      : entry.day === "Fri"
                      ? "#800080"
                      : entry.day === "Sat"
                      ? "#0000ff"
                      : "#cccccc"
                  }
                ></Cell>
              ))}
            </Bar>
            <Bar dataKey="value3_base" stackId="c" fill="transparent" />
            <Bar
              dataKey="value3_visible1"
              stackId="c"
              radius={[10, 10, 10, 10]}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`value3_visible1-${index}`}
                  fill={
                    entry.day === "Wen"
                      ? "#0000ff"
                      : entry.day === "Thrus"
                      ? "#0000ff"
                      : entry.day === "Sun"
                      ? "#0000ff"
                      : "#cccccc"
                  }
                ></Cell>
              ))}
            </Bar>
            <Bar dataKey="value3_between" stackId="c" fill="transparent" />
            <Bar
              dataKey="value3_visible2"
              stackId="c"
              radius={[10, 10, 10, 10]}
            >
              {" "}
              {data.map((entry, index) => (
                <Cell
                  key={`value3_visible1-${index}`}
                  fill={
                    entry.day === "Wen"
                      ? "#800080"
                      : entry.day === "Thrus"
                      ? "#800080"
                      : entry.day === "Sun"
                      ? "#800080"
                      : "#cccccc"
                  }
                ></Cell>
              ))}
            </Bar>
            <Bar
              dataKey="value4"
              stackId="d"
              fill="#8884d8"
              radius={[10, 10, 10, 10]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
