import Cover from "./components/Cover";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import Couple from "./components/Couple";
import Story from "./components/Story";
import MusicPlayer from "./components/MusicPlayer";
import Gallery from "./components/Gallery";
import Event from "./components/Event";
import Maps from "./components/Maps";
import Gift from "./components/Gift";
import RSVP from "./components/RSVP";
import { AudioProvider } from "./context/AudioContext";

function App() {
  return (
    <AudioProvider>
      <Cover />
      <MusicPlayer />
      <Hero />
      <Countdown />
      <Couple />
      <Event />
      <Story />
      <Gallery />
      <Maps />
      <Gift />
      <RSVP />
    </AudioProvider>
  );
}

export default App;
