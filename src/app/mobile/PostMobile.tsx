"use client"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHeart,
  faShare,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'
import { useEffect, useState } from "react";

type DataPost = {
    name: string
    imageUrl: string
    caption: string
}

export const fetchData = async (url: string) => {
    try {
        const response = await axios.get(url)
        return response.data;
    } catch (error) {
        throw error
    }
}

export default function PostMobile() {
    const [data, setData] = useState<DataPost[]>([]);

    useEffect(() => {
        fetchData('https://api.npoint.io/d1a45edd7c6d94331ed2')
        .then((result) => {
            setData(result)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])
  return (
    <div>
        {data.map((item, index) => ( 
    <div key={index} className="mt-0">
      <div className="flex">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full items-center p-[2px] mr-2 w-[40px] h-[40px]">
          <Image
            src={item.imageUrl}
            alt=""
            width={1000}
            height={1000}
            className="rounded-full border-2 w-[100%] h-[100%]"
          />
        </div>
        <div className="pt-2">
          <p className="font-medium">
            {item.name}{" "}
            <span className="text-gray-400">
              <span className="font-thin">•</span> 6d
            </span>
          </p>
        </div>
        <p className="ml-auto font-bold pb-2">...</p>
      </div>
      <div className="mt-2">
        <Image
          src={item.imageUrl}
          alt=""
          width={1000}
          height={1000}
          className="rounded-md "
        />
      </div>
      <div className="flex pt-4 pb-2">
        <FontAwesomeIcon icon={faHeart} className="w-[25px] mr-4" />
        <FontAwesomeIcon icon={faComment} className="w-[25px] mr-4" />
        <FontAwesomeIcon icon={faShare} className="w-[25px]" />
        <FontAwesomeIcon icon={faBookmark} className="w-[20px] ml-auto" />
      </div>
      <div className="flex">
        <p className="font-medium mr-2">{item.name}</p>
        <p className=" font-light text-sm pt-[2px]">{item.caption}</p>
      </div>
      <div className="mt-4 mb-8">
        <p className="text-gray-400 text-sm">Add a comment...</p>
      </div>
    </div>
    ))}
    </div>
  );
}
