"use client";
import { FetchContext } from "@/app/authprovider/AuthProvider";
import { useContext, useEffect, useRef, useState } from "react";

const CategoryContent = () => {
  const [duas, setDuas] = useState([]);
  const { selectedCategory } = useContext(FetchContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    fetch(`/api/duas/${selectedCategory}`) 
      .then((response) => response.json())
      .then((data) => setDuas(data))
      .catch((error) => console.error("Error fetching duas:", error));
  }, [selectedCategory]);


  const togglePlay = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="overflow-y-scroll scrollbar-thin scrollbar-thumb-black max-h-screen pr-3 h-[785px]">
        <div className="space-y-4 ">
          <div className="w-full rounded-lg bg-white p-4">
            <p className="font-semibold text-sm text-customGreen">
              পরিচ্ছেদঃ
              <span className="text-customBlack  ml-2">
                বান্দা তার রবের মুখাপেক্ষী
              </span>
            </p>
          </div>
          {duas.map((each) => (
            <div key={each.dua_id} className="w-full rounded-lg bg-white p-5 px-6">
              <div className="flex flex-row  justify-start items-center ">
                <img
                  src="https://duaruqyah.com/assets/duacard.svg"
                  alt=""
                  className="mr-3"
                />
                <p className="text-customGreen font-semibold">
                  {each.dua_name_bn}
                </p>
              </div>
              <div className="flex flex-col justify-start items-start ">
                <div className="w-full">
                  <p className="mt-6 text-base">
                    <span>{each.top_bn}</span>
                  </p>
                </div>
                {each.clean_arabic && (
                  <div className="w-full">
                    <p className="mt-8 text-base flex items-center justify-end">
                      <span className="text-2xl font-semibold text-left">
                        {each.clean_arabic}
                      </span>
                    </p>
                  </div>
                )}
                {each.transliteration_bn && (
                  <div className="w-full">
                    <p className="mt-6 text-base">
                      <span className="text-black font-semibold mr-1 text-sm">
                        উচ্চারণঃ
                      </span>{" "}
                      <span className="italic">{each.transliteration_bn}</span>
                    </p>
                  </div>
                )}
                {each.translation_bn && (
                  <div className="w-full">
                    <p className="mt-6 text-base">
                      <span className="text-black font-semibold mr-1">
                        অনুবাদঃ
                      </span>{" "}
                      <span>{each.translation_bn}</span>
                    </p>
                  </div>
                )}
                {each.refference_bn && (
                  <div>
                    <p className="mt-6 text-base font-semibold text-customGreen ">
                      রেফারেন্স
                    </p>
                    <div className="mt-1 text-base">
                      <span>{each.refference_bn}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <audio ref={audioRef} src={each.audio} />
                  {each.audio && <button onClick={togglePlay}>
                    {isPlaying ? <img className="w-10 h-10 object-cover" src="https://duaruqyah.com/assets/others/pause.svg" /> : <img className="w-10 h-10 object-cover" src="https://duaruqyah.com/assets/others/audiobtn.svg" />}
                  </button>}
                </div>
                <div className="h-[50px] space-x-3 flex items-center justify-between">
                  <img
                    className="w-6 h-6 cursor-pointer m-1"
                    src="https://duaruqyah.com/assets/others/copy.svg"
                  />
                  <img
                    className="w-6 h-6 cursor-pointer m-1"
                    src="https://duaruqyah.com/assets/others/bookmark.svg"
                  />
                  <img
                    className="w-6 h-6 cursor-pointer m-1"
                    src="https://duaruqyah.com/assets/others/plan.svg"
                  />
                  <img
                    className="w-6 h-6 cursor-pointer m-1"
                    src="https://duaruqyah.com/assets/others/share.svg"
                  />
                  <img
                    className="w-6 h-6 cursor-pointer m-1"
                    src="https://duaruqyah.com/assets/others/report.svg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryContent;
