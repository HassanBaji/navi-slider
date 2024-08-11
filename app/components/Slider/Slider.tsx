import SliderLine from './SliderLine';
import SliderDot from './SliderDot';
import SliderHighlight from './SliderHighlight';
import { useRef, useState } from 'react';

interface SliderProps {
  sliderOneVal: number;
  setSliderOneVal?: (value: number) => void;
  sliderTwoVal: number;
  setSliderTwoVal?: (value: number) => void;
  maxValue?: number;
  minValue?: number;
}
const Slider = ({
  sliderOneVal,
  setSliderOneVal,
  sliderTwoVal,
  setSliderTwoVal,
  maxValue = 100,
  minValue = 0
}: SliderProps) => {
  const sliderLineRef = useRef(null);
  const constrainedSliderOneVal = Math.min(
    Math.max(sliderOneVal, minValue),
    maxValue
  );
  const constrainedSliderTwoVal = Math.min(
    Math.max(sliderTwoVal, minValue),
    maxValue
  );

  const sliderOneStartValueCalculated =
    ((constrainedSliderOneVal - minValue) * 100) / (maxValue - minValue);
  const sliderTwoStartValueCalculated =
    ((constrainedSliderTwoVal - minValue) * 100) / (maxValue - minValue);

  const [sliderOneValue, setSliderOneValue] = useState(
    sliderOneStartValueCalculated
  );
  const [sliderTwoValue, setSliderTwoValue] = useState(
    sliderTwoStartValueCalculated
  );

  const leftValue = Math.min(sliderOneValue, sliderTwoValue);
  const widthValue = Math.abs(sliderOneValue - sliderTwoValue);

  return (
    <div>
      <SliderLine sliderRef={sliderLineRef}>
        <SliderDot
          setSliderDisplayValue={(val) => setSliderOneVal?.(val)}
          minValue={minValue}
          startValue={sliderOneValue}
          setSliderValue={(val) => setSliderOneValue(val)}
          maxValue={maxValue}
          sliderLineRef={sliderLineRef}
        />
        <SliderDot
          setSliderDisplayValue={(val) => setSliderTwoVal?.(val)}
          minValue={minValue}
          startValue={sliderTwoValue}
          maxValue={maxValue}
          setSliderValue={(val) => setSliderTwoValue(val)}
          sliderLineRef={sliderLineRef}
        />
        <SliderHighlight leftValue={leftValue} widthValue={widthValue} />
      </SliderLine>
    </div>
  );
};

export default Slider;
