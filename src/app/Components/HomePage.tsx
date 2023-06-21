"use client";
import Image from 'next/legacy/image';
import React from 'react';

function HomePage() {

  const func = async ()=>{
    const url = 'https://api-football-v1.p.rapidapi.com/v3/leagues?id=39';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a538d9b562mshdff21dd793eb85dp104d65jsn6a9a619efdd7',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
  }
  return (
    <>
    <div className='flex flex-col items-center'>
      <div className='h-[300px] w-full pb-3 pt-28 text-center text-2xl '>
      Welcome to Travel-Master , Manage your travels
      </div>
    <div>
    <Image
    layout='intrinsic'
    height={1080}
    width={1350}
    src={"/images/poster.jpg"}
    />
    </div>

    <div>
      <button onClick={func}>
          Click me
      </button>
    </div>
    </div>
    </>
  )
}

export default HomePage;