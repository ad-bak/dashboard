import { Box } from "@mui/material";
import Header from "../../components/Header";

import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header
        title="Bar Chart"
        subtitle="A bar chart or bar graph is a chart or graph that presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent."
      />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
