import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Toaster position="top-center" />

      <div className="bg-pageBackground w-full h-screen">
        <Routes>
          {/* Default route */}
          <Route path="/" element={<WelcomePage />} />

          {/* Dynamic route that accepts a userId */}
          <Route path="/welcome/:userId" element={<WelcomePage />} />

          {/* 404 routes */}
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
