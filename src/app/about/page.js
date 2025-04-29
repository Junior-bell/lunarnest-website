import Navbar from "../components/Navbar";

export default function AboutPage() {
    return (
      <div className="container py-5">
        <h1 className="mb-4 text-center">About LunarNest Capital</h1>
        <p className="lead text-center mb-5">
          Founded with the spirit of the owl — LunarNest Capital is here to empower investors with wisdom, clarity, and strategy.
        </p>
  
        <div className="row">
          <div className="col-md-6 mb-4">
            <h3>Who We Are</h3>
            <p>
              A team of seasoned financial experts, analysts, and technologists passionate about creating sustainable wealth opportunities. We blend traditional investment principles with modern innovation.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h3>Our Mission</h3>
            <p>
              To build a trusted nest for investors seeking thoughtful strategies, transparency, and a partner for the long journey toward financial freedom.
            </p>
          </div>
        </div>
      </div>
    );
  }
  