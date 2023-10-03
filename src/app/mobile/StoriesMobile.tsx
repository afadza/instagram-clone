"use client"
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from 'react';
import '../styles/stories.css'

type DataStories = {
    name: string
    imageUrl: string
}

export const fetchData = async (url: string) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export default function StoriesMobile() {
    const [data, setData] = useState<DataStories[]>([]);

    useEffect(() => {
      fetchData('https://api.npoint.io/50b95f16aafd08b09bc0')
        .then((result) => {
          setData(result);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  return (
    <div className="flex gap-4 overflow-x-scroll h-[120px]">
  <div className="flex space-x-6">
  <div className="w-[70px] h-[70px] rounded-full p-[2px] items-center">
        <Image src="/profile.jpg" alt="Logo" width={200} height={200} className="w-[100%] h-[100%] rounded-full border-2" />
        <p className="text-xs pt-2 text-center">Cerita anda</p>
      </div>
    {data.map((item, index) => (
      <div key={index} className="w-[70px] h-[70px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full p-[2px] items-center">
        <Image src={item.imageUrl} alt="Logo" width={200} height={200} className="w-[100%] h-[100%] rounded-full border-2" />
        <p className="text-xs pt-2 text-center">{item.name}</p>
      </div>
    ))}
  </div>
</div>

  );
}
