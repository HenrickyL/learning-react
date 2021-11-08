import Sidebar from './components/Sidebar'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Overview from './pages/Overview'
import {Reports,ReportOne,ReportTwo,ReportThree} from './pages/Reports'

function App() {
  return (
    <Router>
      <Sidebar/>
      <Routes>
        <Route exact path="/overview" element={<Overview/>}/>
        <Route exact path="/reports" element={<Reports/>}/>
        <Route exact path="/reports/reports1" element={<ReportOne/>}/>
        <Route exact path="/reports/reports2" element={<ReportTwo/>}/>
        <Route exact path="/reports/reports3" element={<ReportThree/>}/>


      </Routes>
    </Router>

  );
}

export default App;
