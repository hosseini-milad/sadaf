import React, { useEffect, useState } from 'react';

const Location = () => {
  const [acceleration, setAcceleration] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const handleMotion = (event) => {
      const acc = event.acceleration;
      setAcceleration({
        x: acc?.x?.toFixed(2) || 0,
        y: acc?.y?.toFixed(2) || 0,
        z: acc?.z?.toFixed(2) || 0,
      });
    };

    const enableMotion = async () => {
      if (typeof DeviceMotionEvent.requestPermission === 'function') {
        try {
          const permission = await DeviceMotionEvent.requestPermission();
          if (permission === 'granted') {
            window.addEventListener('devicemotion', handleMotion);
          }
        } catch (error) {
          console.error('Permission error:', error);
        }
      } else {
        window.addEventListener('devicemotion', handleMotion);
      }
    };

    enableMotion();

    return () => {
      window.removeEventListener('devicemotion', handleMotion);
    };
  }, []);

  return (
    <div>
      <h2>Accelerometer Data</h2>
      <p>X: {acceleration.x}</p>
      <p>Y: {acceleration.y}</p>
      <p>Z: {acceleration.z}</p>
    </div>
  );
};

export default Location;