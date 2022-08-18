import { styled } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";
export const GridComponent = styled("Grid")({
  backgroundRepeat: "no-repeat",
  backgroundColor: " #5352ED",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "500px",
});
export const MyBox = styled("Box")({
  marginTop: 150,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
export const InterBox = styled("Box")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "400px",
});
export const MyLoginbtn = styled(LoadingButton)({
  marginTop: "20px",
  marginBottom: "5px",
  borderRadius: "16px",
  height: "50px",
  textTransform: "none",
  fontSize: "16px",
  fontFamily: "Inter",
  fontWeight: "500",
  borderColor: "#EEEEEE",
});
