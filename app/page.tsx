'use client';

import { useState } from 'react';
import Slider from './components/Slider/Slider';

export default function Home() {
  const [minPrice, setMinPrice] = useState(40);
  const [maxPrice, setMaxPrice] = useState(100);

  return (
    <main className='min-h-screen flex justify-center items-center p-24 bg-white'>
      <div style={{ width: '100%' }}>
        <Slider
          maxValue={70}
          sliderOneVal={minPrice}
          setSliderOneVal={setMinPrice}
          sliderTwoVal={maxPrice}
          setSliderTwoVal={setMaxPrice}
        />
      </div>
    </main>
  );
}
