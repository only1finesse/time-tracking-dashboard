import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div>
      <div className='body font-rubik text-base min-h-screen bg-primary'>
      <div className="grid grid-cols-4 items-start justify-start px-40 py-56">
        <ProfileCard />
      </div>
    </div>
    </div>
  );
}

export default App;
