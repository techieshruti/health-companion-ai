import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <br />

      <Link to="/dashboard">
        <button>Go to Dashboard</button>
      </Link>

      <br />
      <br />

      <Link to="/report">
        <button>Go to Report Details</button>
      </Link>

      <br />
      <br />

      <Link to="/chat">
        <button>Go to AI Chat</button>
      </Link>
    </div>
  );
}

export default Home;