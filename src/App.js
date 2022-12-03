import GlycemiaContainer from "./glycemia/glycemiaContainer";

function App() {
  return (
    <div style={styles.container} data-testid="App" className="App">
      <GlycemiaContainer/>
    </div>
  );
}

const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      margin: "50px"
    }
}
export default App;
