
import './App.css';
import data from './data';
import TableSummary from './components/TableSummary';
import FilterTable from './components/FilterTable';

function App() {

  return (
    <div className="App">
      <TableSummary data={data} />
      <FilterTable data={data} />
    </div>
  );
}

export default App;
