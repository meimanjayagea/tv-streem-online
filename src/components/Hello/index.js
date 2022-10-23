import React from 'react';
import '../../App.css';
import Plyr from 'plyr-react';
import 'plyr-react/plyr.css';

const Home = () => {
  const videoSrc = {
    type: 'video',
    sources: [
      {
        src: 'blob:https://www.vidio.com/2115f78a-205d-48b6-9bf6-4512c3788d0e',
        provider: ''
      }
    ]
  };

  return (
    <div>
      <div className="w-3/5 ml-20 mt-10">
        <Plyr source={videoSrc} />
      </div>
    </div>
  );
};

export default Home;
