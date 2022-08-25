import { Button, Typography, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
export const MyTypography = styled(Typography)({
  fontSize: "15px",
  fontFamily: "Inter",
  fontWeight: "400",
});
export const MyButton = styled(Button)({
  borderRadius: "15px",
  marginTop: "20px",
  height: "50px",
  width: "120px",
  textTransform: "none",
  fontSize: "16px",
  fontFamily: "Inter",
  fontWeight: "400",
  alignItems: "center",
  backgroundColor: "#5352ED",
});
export const MyTextfield = styled(TextField)({
  marginTop: "10px",
  borderRadius: "10px",
  height: "50px",
  color: "white",
});
