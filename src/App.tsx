import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="bg-pageBackground w-full h-screen">
        <Routes>
          {/* Default route that redirects to the first user ID */}
          <Route
            path="/"
            element={
              <Navigate to="/welcome/618f4ed6-1c5b-4993-a149-f64700bf31dd" />
            }
          />
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
