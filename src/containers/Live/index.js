import React from 'react';
import fluidPlayer from 'fluid-player';

const Live = () => {
  const self = React.createRef();
  const [player, setPlayer] = React.useState(null);

  React.useEffect(() => {
    if (player) {
      player.destroy();
    }
    return setPlayer(fluidPlayer(self.current));
  }, [player]);

  return (
    <>
      <video ref={this.self}>
        <source
          src="https://cdn.fluidplayer.com/videos/valerian-1080p.mkv"
          data-fluid-hd
          title="1080p"
          type="video/mp4"
        />
      </video>
    </>
  );
};

export default Live;
