import { TextField, Typography } from "@mui/material";
import ButtonComponent from "../shared/Button";

const GlycemiaForm = ({ registerGlycemia }) => {
  return (
    <div className="GlycemiaFormContainer" style={styles.container}>
      <Typography variant="h5" align="center" gutterBottom>
        Registrar Glicemia
      </Typography>
      <div className="GlycemiaTextFields" style={styles.form}>
        <TextField
          style={styles.textField}
          id="outlined-basic"
          label="Data"
          InputLabelProps={{ shrink: true }}
          type="date"
          variant="outlined"
        />
        <TextField
          style={styles.textField}
          id="outlined-basic"
          label="Hora"
          InputLabelProps={{ shrink: true }}
          type="time"
          variant="outlined"
        />
        <TextField
          style={styles.textField}
          id="outlined-basic"
          label="Valor registrado"
          type="number"
          variant="outlined"
        />
        <TextField
          style={styles.textField}
          id="outlined-multiline-flexible"
          label="Observações"
          placeholder="Ex: mais alta que o normal"
          multiline
          maxRows={4}
        />
      </div>
      <ButtonComponent onClick={registerGlycemia} text="Registrar" />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
    backgroundColor: "white",
    marginTop: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 0px #eceff1",
  },
  form: {
    display: "flex",
    flexDirection: "row",
  },

  textField: {
    margin: "10px",
    width: "100%",
  },
};

export default GlycemiaForm;
