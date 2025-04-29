import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../globals.css'; // Correct path to the global styles
import Navbar from '../components/Navbar';// Import the Navbar component
export default function PhilosophyPage() {
    return (
      <div className="container py-5">
        <h1 className="mb-4 text-center">Our Philosophy</h1>
        <p className="lead text-center mb-5">
          LunarNest Capital is guided by timeless principles of patience, precision, and perspective — the wisdom of the owl.
        </p>
  
        <div className="row">
          <div className="col-md-6 mb-4">
            <h3>Long-Term Vision</h3>
            <p>
              We believe in building wealth steadily, focusing on sustainable growth rather than short-term gains. Our strategies are designed to protect and nurture investments for the future.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h3>Disciplined Execution</h3>
            <p>
              Every decision we make is based on rigorous analysis and a commitment to our core values. In a world full of noise, we prioritize clarity and focus.
            </p>
          </div>
        </div>
      </div>
    );
  }
