import { useState, MouseEvent, useEffect } from 'react';

export const SliderDot = ({
  startValue,
  maxValue,
  sliderLineRef,
  minValue,
  setSliderValue,
  setSliderDisplayValue
}: {
  startValue: number;
  maxValue: number;
  sliderLineRef: any;
  minValue: number;
  setSliderDisplayValue: (value: number) => void;
  setSliderValue: (value: number) => void;
}) => {
  const [value, setValue] = useState(startValue);

  const displayValue = (value / 100) * (maxValue - minValue) + minValue;

  const handleMouseMove = (e: any) => {
    const slider = sliderLineRef.current;
    if (!slider) return;
    const sliderWidth = slider.offsetWidth;
    let newValue = ((e.clientX - 100) / sliderWidth) * 100;

    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    setSliderValue(newValue);
    setValue(newValue);
  };

  const handleMouseDown = (e: MouseEvent) => {
    handleMouseMove(e);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    setSliderDisplayValue(displayValue);
  }, [displayValue]);

  return (
    <div>
      <h1
        style={{
          ...styles.displayText,
          position: 'absolute',
          left: `${value}%`
        }}>
        {displayValue.toFixed(0)}
      </h1>
      <div
        onMouseDown={(e) => handleMouseDown(e)}
        style={{ ...styles.dot, position: 'absolute', left: `${value}%` }}
      />
    </div>
  );
};

const styles = {
  dot: {
    zIndex: 2,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    height: 24,
    width: 24,
    borderRadius: '50%',
    cursor: 'pointer',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  displayText: {
    color: 'black',

    bottom: '-90%',
    transform: 'translate(-50%,-50%)'
  }
};
