import { Route, Routes } from 'react-router-dom';
import './App.css';
import AIAssistant from './components/AIAssistnant';
import CoursesPage from './pages/CoursesPage';
import DictionaryPage from './pages/DictionaryPage';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import SingleCoursePage from './pages/SingleCoursePage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/dictionary" element={<DictionaryPage />} />
        <Route path="/courses/:courseId" element={<SingleCoursePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <AIAssistant />
    </>
  );
};

export default App;
