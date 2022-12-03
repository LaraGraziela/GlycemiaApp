import { Button } from "@mui/material";

const ButtonComponent = ({ onClick, text }) => {
  return (
    <Button style={styles.button} variant="contained" onClick={onClick}>
      {text}
    </Button>
  );
};

const styles = {
  button: {
    backgroundColor: "#80cbc4",
    display: "flex",
    justifyContent: "center",
  },
};

export default ButtonComponent;
