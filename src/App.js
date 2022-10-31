import './App.scss';
import { Route, Routes } from "react-router-dom";
import NotFound from './pages/NotFound';
import AllNews from './pages/AllNews';
import NewsPage from './pages/NewsPage';


function App() {
  return (
    <div className='container'>
      <header className="header">
        <h1 className="title header__title rubik-light">Hacker News</h1>
      </header>

      <Routes>
        <Route path="/" element={<AllNews />} />
        <Route path="/:id" element={<NewsPage />} />
        <Route path="*" element={<NotFound />} /> {/* в самом конце */}
      </Routes>
    </div>
  )
}

export default App;
