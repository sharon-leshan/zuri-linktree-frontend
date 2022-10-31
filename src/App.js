import { profile, share } from './assets';
import { Footer, Links, Profile } from './components';
import './App.css';

function App() {
  return (
    <div className="container">
      <Profile avatarUrl={profile} username="Sharon Leshan" />
      <span className="share" title="Share">
        <img src={share} alt="share" />
      </span>
      <Links />
      <Footer />
    </div>
  );
}

export default App;
