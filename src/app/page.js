import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-grey text-light text-center p-5 p-lg-0 pt-lg-5">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1 className="display-4 text-black">Welcome to <span className="text-warning">LunarNest Capital 🌙</span></h1>
              <p className="lead my-4 text-black">
                Building Wealth, Guided by Wisdom.  
                Invest smarter under the moonlight of opportunity.
              </p>
              <Link href="/about" className="btn btn-warning btn-lg">
                Learn More
              </Link>
            </div>
            <img 
              src="/globe.svg" 
              alt="Investment globe" 
              className="img-fluid w-50 d-none d-sm-block" 
            />
          </div>
          <div>
            <script src="https://cdn.tailwindcss.com"></script>
          </div>
        </div>
      </section>
    </div>
  );
  
}