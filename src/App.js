import './App.scss';
import ShowJobs from './components/ShowJobs';

function App() {
  return (
    <div className='container'>
      <header className="header">
        <h1 className="title header__title rubik-light">Hacker News</h1>
      </header>
      <ShowJobs />
    </div>
  )
}

export default App;
