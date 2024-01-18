import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Countup2 = () => {
  const [visible, setVisible] = useState(false);

  const onExitViewport = () => {
    setVisible(false);
  }
  const onEnterViewport = () => {
    setVisible(true);
  };

  return (
    <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
      <div>
        {visible && <CountUp start={0} end={106325516} duration={5} delay={0}/>} +
      </div>
    </ScrollTrigger>
  );
};

export default Countup2;