import Player from './components/Player.jsx';
import TimmerChallenges from './components/TimmerChallenges.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
   
    <TimmerChallenges title="Easy" targetTime={1}/>
    <TimmerChallenges title="Not Easy" targetTime={5}/>
    <TimmerChallenges title="Getting Tough" targetTime={10}/>
    <TimmerChallenges title="Pros only" targetTime={15}/>
    </div>
     </>
  );
  
}

export default App;
