import './App.scss';
import { Route, Routes } from "react-router-dom";
import ShowNews from './components/ShowNews';
import NewsItem from './components/NewsItem';
import NotFoundBlock from './components/NotFoundBlock'


function App() {
  return (
    <div className='container'>
      <header className="header">
        <h1 className="title header__title rubik-light">Hacker News</h1>
      </header>

      <Routes>
        <Route path="/" element={<ShowNews />} />
        <Route path="/:id" element={<NewsItem />} />
        <Route path="*" element={<NotFoundBlock />} /> {/* в самом конце */}
      </Routes>
    </div>
  )
}

export default App;
