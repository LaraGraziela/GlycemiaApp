import { Alert, Typography } from "@mui/material";
import { useState } from "react";
import GlycemiaForm from "./glycemiaRegister/glycemiaForm";
import ButtonComponent from "./shared/Button";

const GlycemiaContainer = () => {
  const [showForm, setShowForm] = useState(false);
  const [showFeedBack, setShowFeedBack] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const registerGlycemia = () => {
    setShowFeedBack(!showFeedBack);
    setShowForm(!showForm);
  };

  return (
    <div align="center">
      <Typography variant="h4" align="center" gutterBottom>
        Controle de Glicemia
      </Typography>
      <ButtonComponent onClick={handleShowForm} text="Registrar Glicemia" />
      {showForm && <GlycemiaForm registerGlycemia={registerGlycemia} />}
      {showFeedBack && (
        <Alert onClose={() => setShowFeedBack(!showFeedBack)}>
          Glicemia registrada!
        </Alert>
      )}
    </div>
  );
};

export default GlycemiaContainer;
