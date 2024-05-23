
import { useState } from 'react';
import './App.css';
import InputCaption from './components/InputCaption';
import VideoPlayer from './components/VideoPlayer';

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);

  const handleChangeUrl = (event) => {
    setVideoUrl(event.target.value)
  }

  const handleAddCaption = (caption) => {
    setCaptions([...captions, caption])
  }
  return (
    <div className='App'>
      <input
        type="text"
        placeholder='Enter Video Url'
        value={videoUrl}
        onChange={handleChangeUrl} />
      <InputCaption handleAddCaption={handleAddCaption} />
      <VideoPlayer videoUrl={videoUrl} captions={captions} />
    </div>
  );
}

export default App;
