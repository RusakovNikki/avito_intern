import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import './App.scss';

import ShowNews from './components/ShowNews';
import NotFoundBlock from './components/NotFoundBlock'
import NewsDiscussion from './components/NewsDiscussion';

import { fetchNews } from './redux/slices/newsSlice'
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  return (
    <div className='container'>
      <header className="header">
        <h1 className="title header__title rubik-light">Hacker News</h1>
      </header>

      <Routes>
        <Route path="/" element={(<ShowNews />)} />
        <Route path="/:id" element={<NewsDiscussion />} />
        <Route path="*" element={<NotFoundBlock />} /> {/* в самом конце */}
      </Routes>
    </div>
  )
}

export default App;
