import React, { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import { BarChart, LineChart, PieChart, SparkLineChart } from "@mui/x-charts";
// import { ReactSVG } from "react-svg";
// import { ReactComponent as YourSvg } from "../src/svg/gadam_jobs_flow.svg";

function App() {
  // const [svg, setSvg] = useState(null);

  // // fetch svg file
  // useEffect(() => {
  //   fetch("./svg/test.svg")
  //     .then((response) => response.text())
  //     .then((svg) => {
  //       console.log(svg);
  //       setSvg(svg);
  //     });
  // });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        {/* <ReactSVG src="test.svg" />
        {svg} */}
        {/* <YourSvg /> */}
        {/* <img
          src={require("../src/svg/gadam_jobs_flow.svg").default}
          alt="mySvgImage"
        /> */}
        <iframe
          src="https://mermaid.ink/svg/pako:eNrlWsuS4jYU_RVKs5vC-AHG4KokmyyTTbILpFxCEkaDbTGSTDfT1f8eyaIb5Da0VwExm26wruVzzn3oyuIFIIYJSMG6YE9oA7kc_PHXsgoX39gqyyGGZcaqnNEqz4SsMSVipEb-9bxfo8bkeFH9h7I2Y8sKFRRtB-FgCTZS7kTq-8-Q7zjDI1ZhUsIKjwQUI8RKvxBw7T-RFYZ7n5Md83NSEQ4Lf0WZntOXjBXCX9OC7Cl5Itynaorn0UaWxW_66i8f7lAYhN8J3cdkb4avsluCXgKMz0wElmW2JYcMMU6yPeS2FGMnpOgm0VONSWNSVz_ozkwkWM0RsXWY3LkO3fB7KjBtTDT6LCcyK6CQzVSWAtM7V6Abfk8FouDM5jvK2J5wDdAOgii4vQacrGpa4Ex_6UqFNvi-AhibEm6JiaKdApnpuW0F7r00XiDQV4XolAnN_d2pEEUu5MJHAn1VmJzZcLLmRGyMpm-RZasxuYesOEOpOXelxkUqfXWZLlR9wVBCm_-tKmNuagBDdUkq-SYFFpvV8SPZm-sn0H2ZxsZGVdPcrCmXm6Uovr9k0BjOvH-FhhbkyOPOc_oadte7tKstmIpHE456lDxLDpHMNB47Dm8ahrWkRTvsOuGefOYO3qvtofJOshBE1rtMA-RSB0FTeLI1KzDhlpOSW5K-hvIUr59x6aPI7NICqi0tQWYurp1vLPpIMT-Tot6pdYi8z0WrNbPEmDsixgUefeQIgwVileo9ZIbJmlZEMk3Mevtw012GjS5SjzspcAF5L97nXYdeIw5NntnE3XjvYqPvRT6y6sFpA2fTj-5_d9kGf1rOHqSyP0hVfph66nBJdLyoXS9auqqNe1W1_2tvoh5XUaRukURFmRqmyEeYCuTtaMGkFwRB-D6d-pMrRcxjKDL1rketu85Zi2K2MhB_tVWYOKVCP6pmV_YdNbGjR1p9TOye59tk-glh2n20IWibKW5ZwSC2pZi5J8VHOv3EMA2_bMX_3Ln4dzdxL-Slds70OHR04F6Ywm_7aupi3nYw-kyMpFsMr_Mtd5g8gCpe-633A3r8J3DXw6wmzi4OQh4KooGriYv0C0JoiFjBePoljuOhkJxtiYeh2EDO4SEdxIPY9UNk9w-APznd1ede48X7rd5Xz-5hons-ZTnB1rHtNbHttWI7aLny0fg8xDn0gx2qOnY2DoagJLyEFIMUvCyrgYIvN6QkS5Cqj2umHCe14auyhLVkfx8qBFLJazIE5jXW7xTmHJZvF3ew-oex968EU8n4n-aXi80PGBsTkL6AZ5COR7MoSWbjeTiO4kkyngzBAaReHI7iJIjDKAmDaRjMXofgRzNnMJrP5rM4mEzDyWysVq9kCDir8w1I17AQ5PU_5fRvjg"
          title="gadam_jobs_flow"
          height="400"
          width="1000"
        />
      </Grid>
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
