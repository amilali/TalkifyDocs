'use client';

import { Rating } from 'flowbite-react';
import './ui/ui.css'

export function Ratingg() {

  return (
<div className='flex flex-col ml-2'>
    <Rating>
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star />
      <Rating.Star filled={false} />
    <h2 className='text-white text-lg'>4.0</h2>
    </Rating>
<p className='text-xs tracking-tighter'>Love by 999+ customers</p>
</div>
  );
}
