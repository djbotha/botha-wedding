import Landing from './components/Landing';
import Nav from './components/Nav';

function App() {
  return (
    <div className="h-screen bg-[url('/save-the-date.jpeg')] bg-no-repeat bg-cover  bg-center relative w-full">
      <div className="h-full w-full backdrop-blur-2xl p-2 sm:p-8 flex items-center">
        <img
          src="/save-the-date.jpeg?url"
          className="mx-auto backdrop-blur-md shadow-xl  max-h-full w-full h-max"
          style={{
            aspectRatio: '9 / 16',
            width: 510,
          }}
        />
      </div>
    </div>
  );
}

export default App;
