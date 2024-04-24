import React from "react";
import { Grid, Box } from "@mui/material";
import { BarChart, LineChart, PieChart, SparkLineChart } from "@mui/x-charts";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={6}>
        <BarChart
          series={[
            { data: [35, 44, 24, 34] },
            { data: [51, 6, 49, 30] },
            { data: [15, 25, 30, 50] },
            { data: [60, 50, 15, 25] },
          ]}
          height={290}
          xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      </Grid>
      <Grid item xs={6} md={6}>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          height={300}
          margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
          grid={{ vertical: true, horizontal: true }}
        />
      </Grid>
      <Grid item xs={6} md={6}>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "series A" },
                { id: 1, value: 15, label: "series B" },
                { id: 2, value: 20, label: "series C" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      </Grid>
      <Grid item xs={6} md={6}>
        <Box sx={{ flexGrow: 1 }}>
          <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={100} />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <SparkLineChart
            plotType="bar"
            data={[1, 4, 2, 5, 7, 2, 4, 6]}
            height={100}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
export default App;
