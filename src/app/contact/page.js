import Navbar from "../components/Navbar";

export default function ContactPage() {
    return (
      <div className="container py-5">
        <h1 className="mb-4 text-center">Contact Us</h1>
        <p className="lead text-center mb-5">
          We’d love to hear from you. Reach out to LunarNest Capital for inquiries, partnerships, or just a conversation about building your financial future.
        </p>
  
        <form className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Type your message here..."></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form>
      </div>
    );
  }
  