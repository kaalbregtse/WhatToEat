import './App.css';

import Banner from './components/banner';
import Ingredients from './components/ingredients';
import Recommended from './components/recommended';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <Banner />
        <Ingredients />
        <Recommended />
        <Footer />
    </div>
  );
}

export default App;
