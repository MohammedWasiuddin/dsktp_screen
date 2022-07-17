import './App.css';
import './index.css';
import EnrollmentDetails from './components/EnrollmentDetails.js';
import TableList from './components/TableList';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes, Switch, Link, NavLink } from 'react-router-dom';
import ReinstatementLink from './waste/ReinstatementLink';
import EnrollmentDetailsLink from './waste/EnrollmentDetailsLink';
import Confirm from './components/Confirm';

function App() {
  return (
    <>
      <div className="App">
      <Router>
      <nav>
      <NavLink to={'/enrollmentdetailslink'}
        element={<EnrollmentDetails />}
        className='enrollmentdetailslink'
        style={{ marginLeft: "3%", color: "rgb(16, 105, 161)" }}>←Enrollment Details</NavLink>
      </nav>
      <hr style={{ height: "1px" }}></hr>
        <Header
          name="Resend Latest 834 Transaction"
          year="2023"
          id="228057"
          plan="Anthem Blue Cross Silver 87 HMO"
        />
        <hr style={{ height: "3px" }}></hr>
        <TableList />
      <Routes>
        <Route exact path="/" element={<EnrollmentDetails />} />
        <Route exact path="/reinstatementlink" element={<ReinstatementLink />} />
        <Route exact path="/enrollmentdetailslink" element={<EnrollmentDetailsLink />} />
        <Route exact path='/confirm' element={<Confirm />} />
      </Routes>
    </Router>
        
        {/* <EnrollmentDetails /> */}
        <br /><br /><br /><br />
        {/* <Confirm
          name="Confirm - Resend Latest 834 Transaction"
          year="2023"
          id="228057"
          plan="Anthem Blue Cross Silver 87 HMO"
        /> */}
      </div>

    </>
  );
}

export default App;

{/* <ReinstatementLink /> */ }