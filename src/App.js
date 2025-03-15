import React, { useState } from "react";
import "./App.css";
import { useNavigate, useParams } from 'react-router-dom';
import logo from './assets/mainLogo.png'
import cards from './assets/cards.png';
import pngegg from './assets/pngegg.png';
import { assignments } from "./data/assignments";
import PaypalButton from "./PaypalButton";
import powered from "./assets/powered.png";

function App() {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const navigate = useNavigate();
  const { assignmentTitle } = useParams();

  React.useEffect(() => {
    if (assignmentTitle) {
      const selectedAssignment = assignments.find((assignment) => assignment.title === assignmentTitle);
      setSelectedAssignment(selectedAssignment);
    }
  }, [assignmentTitle]);

  const handleAssignmentClick = (assignment) => {
    setSelectedAssignment(assignment);
    navigate(`/assignments/${assignment.title}`);
  };
  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <h1 style={{marginBottom: '1vh', alignItems: 'center'}} className="logo">
            <img src={logo} alt="Logo" style={{width: '30px', height: '30px', marginRight: '10px'}} />
            The Assignment Store
          </h1>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#assignments">Assignments</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="parent-main">
        <div className="sidebar">
          <h2>Assignments</h2>
          <ul>
            {assignments.map((assignment) => (
              <li
                key={assignment.id}
                onClick={() => handleAssignmentClick(assignment)}
                className={selectedAssignment?.id === assignment.id ? "active" : ""}
              >
                {assignment.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="main-content">
          {selectedAssignment ? (
            <>
              <h1>{selectedAssignment.title}</h1>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: window.innerWidth < 768 ? 'column' : 'row'
              }}>
                <div style={{ flexBasis: '50%' , margin: '5vb'}}>
                  <img src={pngegg} alt="Zip file" style={{ maxWidth: '40vh' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                  <p className="price">{selectedAssignment.price}</p>
                  <PaypalButton/>
                  {/* this can be uncommented just in case we want to add the button */}
                  {/* <button onClick={() => handlePayNow(selectedAssignment.id)}>Pay Now</button> */}
                  <div className="additional-info" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <p className="category">Category: {selectedAssignment.category}</p>
                    <p className="tags">Tags: {selectedAssignment.tags.join(", ")}</p>
                    <p>Securely Powered by:</p>
                    <div className="payment-icons">
                      <img src={cards} alt="Payments"/>
                    </div>
                    <div className="payment-icons-paypal">
                    <img src={powered} alt="powered by paypal"/>
                    </div>
                    <p>You’ll get a download link with solution files instantly, after payment</p>
                  </div>
                </div>
              </div>
              <div className="description-header">
                <strong>Description</strong>
              </div>
              <div className="description grey-text">
                <p>{selectedAssignment.description}</p>
              </div>
            </>
          ) : (
            <p>Select an assignment from the sidebar to view details.</p>
          )}
          {email && (
            <p className="email-notification">
              Download link for Assignment {assignmentId} will be sent to <strong>{email}</strong>.
            </p>
          )}
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#assignments">Assignments</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <p className="disclaimer">
            Disclaimer: The information provided on this website is for educational purposes only. We are not responsible for any errors or omissions in the information provided. By using this website, you agree to hold harmless TheAssignmentStore, its officers, directors, employees, and agents from any claims, damages, or expenses arising from the use of this website.
          </p>
          <p>&copy; 2025 TheAssignmentStore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;