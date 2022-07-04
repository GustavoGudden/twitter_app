import {
  TwitterLogo,
  House,
  Bell,
  EnvelopeSimple,
  BookmarkSimple,
  User,
  Image,
  Gif,
  ChartBarHorizontal,
  Smiley,
  Calendar,
  DotsThree,
  ChatCircle,
  Heart,
  GitDiff,
  Divide,
} from "phosphor-react";
import { useEffect, useState } from "react";
import post from "../imagens/post.png";
import code from "../imagens/co.jpg";

export function Feed() {
  const [api, setapi] = useState([]);

  useEffect(() => {
    fetch("http://localhost:21262/")
      .then((Response) => Response.json())
      .then((data) => setapi(data.response));
  }, []);

  return (
    <div className="flex-1 flex">
      <div className="flex flex-col w-[30%] items-end  min-h-screen p-6 gap-10">
        <TwitterLogo size={40} />
        <House size={40} />
        <Bell size={40} />
        <EnvelopeSimple size={40} />
        <BookmarkSimple size={40} />
        <User size={40} />
      </div>

      <div className=" flex  flex-col w-[100%] border">
        <div className="p-6 flex flex-col w-[100%] border">
          <h1 className="text-1xl font-bold">Pagina inical </h1>
          <div className="flex gap-4 items-center mt-4 justify-start">
            <User
              size={50}
              color="#657786"
              className="rounded-[50%] border  bg-gray-400"
            />
            <p className="text-xl text-gray-500">O que esta acontecendo? </p>
          </div>
          <div className="flex w-full justify-between  mt-6 pl-10 pr-5">
            <div className="flex gap-3">
              <Image size={25} color="#1D9BF0" />
              <Gif size={25} color="#1D9BF0" />
              <ChartBarHorizontal size={25} color="#1D9BF0" />
              <Smiley size={25} color="#1D9BF0" />
              <Calendar size={25} color="#1D9BF0" />
            </div>
            <button className="bg-blue-300 text-white rounded-[25px] h-10 w-auto p-2 font-bold">
              Tweetar
            </button>
          </div>
        </div>

        {api.map((api) => {
          return (
            <div className="post flex hover:bg-gray-300">
              <div className="h-[50%] w-[15%] gap-1 p-6">
                <User
                  size={50}
                  color="#657786"
                  className="rounded-[50%] border  bg-gray-400"
                />
              </div>

              <div>
                <div
                  key={api.post_id}
                  className="flex  mt-6 justify-between pr-5"
                >
                  <div className="flex">
                    <h1>{api.nome}</h1>
                    <p>@{api.arroba}</p>
                  </div>
                  <div>
                    <DotsThree size={30} />
                  </div>
                </div>
                <div className="pr-5">
                  <p>{api.slug}</p>
                  <img src={code} className="w-[80%]  rounded" alt="" />
                  <div className="flex gap-7  justify-around pr-16 mt-4">
                    <div className="flex items-center">
                      <ChatCircle />
                      <p>2</p>
                    </div>
                    <div className="flex items-center">
                      <Heart />
                      <p>400</p>
                    </div>
                    <div className="flex items-center">
                      <GitDiff />
                      <p>4</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
