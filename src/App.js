import "./App.css"
import WordBuilder from "./components/WordBuilder/WordBuilder";


const { default: Layout } = require("./components/Layout/Layout");



function App() {
  return (
    <div className="App">
      <Layout>

        <WordBuilder/>
      
      </Layout>
      

    </div>
  );
}

export default App;
