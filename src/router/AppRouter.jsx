import {Routes, Route} from 'react-router-dom';
import NavBar from '../screen/NavBar/nav_bar';
import Portfolio from '../screen/Portfolio/portfolio';

const AppRouter = () => {
    return (
      <>   
      <NavBar/>
        <Routes>
          <Route path="/" element={<Portfolio/>} />
        </Routes>
        </>
    );
  };
export default AppRouter;