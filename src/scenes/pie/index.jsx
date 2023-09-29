import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header
        title="Pie Chart"
        subtitle="A pie chart is a circular statistical graphic, which is divided into slices to illustrate numerical proportion."
      />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
