import ShowDetails from "./component/ShowDetails";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowSummary from './component/ShowSummary'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={< ShowDetails />}></Route>
          <Route exact path='/showSummary' element={< ShowSummary />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
