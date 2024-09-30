import gif3 from "../../assets/gifs/Gif_3.gif";

export default function Feature() {
  return (
    <div
      className="w-[full] h-[65%] z-10 text-black px-[6%] mt-[9%] flex flex-col justify-between font-montserrat items-center gap-20 sm:gap-10 "
      id="feature-div"
    >
      <span className="text-black text-3xl font-semibold dark:text-white">
        ---Features---
      </span>
      <div className="w-[90%] h-3/6 relative flex justify-evenly items-center sm:flex-col sm:h-fit sm:justify-start sm:gap-1">
        <div className="w-2/6 h-full rounded-lg backdrop-blur bg-slate-600 bg-opacity-10 sm:w-full sm:h-[11rem] flex items-center justify-center">
          <img src={gif3} className="w-[90%] rounded-lg" />
        </div>
        <div className="border-l-2 border-black w-2/6 h-fit flex flex-col gap-4 pl-11 sm:w-11/12 dark:border-[#dddddd]">
          <span className="text-3xl font-semibold text-black sm:text-2xl dark:text-[#dddddd]">
            Premium feeling, totally free
          </span>
          <span className="text-lg font-light text-black sm:text-sm dark:text-[#dddddd]">
            Stop worrying about paying anything, just start writing on our 100%
            free editor.
          </span>
        </div>
      </div>
      <div className="w-[90%] h-3/6 relative flex justify-evenly items-center sm:flex-col-reverse sm:h-fit sm:justify-end sm:gap-1">
        <div className="border-r-2 border-black w-2/6 h-fit flex flex-col gap-4 pr-11 sm:w-11/12 dark:border-[#dddddd]">
          <span className="text-3xl font-semibold text-black sm:text-2xl dark:text-[#dddddd]">
            Your data anywhere, anytime
          </span>
          <span className="text-lg font-light text-black sm:text-sm dark:text-[#dddddd]">
            Write to your hearts content with all your data seemlessly updated
            across all your devices.
          </span>
        </div>
        <div className="w-2/6 h-full rounded-lg backdrop-blur bg-slate-600 bg-opacity-10 sm:w-full sm:h-[11rem] flex items-center justify-center">
          {" "}
          <img src={gif3} className="w-[90%] rounded-lg" />{" "}
        </div>
      </div>
      <div className="w-[90%] h-3/6 relative flex justify-evenly items-center sm:flex-col sm:h-fit sm:justify-start sm:gap-1 ">
        <div className="w-2/6 h-full rounded-lg backdrop-blur bg-slate-600 bg-opacity-10 sm:w-full sm:h-[11rem] flex items-center justify-center">
          <img src={gif3} className="w-[90%] rounded-lg" />
        </div>
        <div className="border-l-2 border-black w-2/6 h-fit flex flex-col gap-4 pl-11 sm:w-11/12 dark:border-[#dddddd]">
          <span className="text-3xl font-semibold text-black sm:text-2xl dark:text-[#dddddd]">
            WYSIWYG editor
          </span>
          <span className="text-lg font-light text-black sm:text-sm dark:text-[#dddddd]">
            Only get what you wrote, how you wrote it.
          </span>
        </div>
      </div>
      <div className="w-[90%] h-3/6 relative flex justify-evenly items-center sm:flex-col-reverse sm:h-fit sm:justify-end sm:gap-1">
        <div className="border-r-2 border-black w-2/6 h-fit flex flex-col gap-4 pr-11 sm:w-11/12 dark:border-[#dddddd]">
          <span className="text-3xl font-semibold text-black sm:text-2xl dark:text-[#dddddd]">
            Switch themes
          </span>
          <span className="text-lg font-light text-black sm:text-sm dark:text-[#dddddd]">
            Not liking the brightness? just switch to dark mode.
          </span>
        </div>
        <div className="w-2/6 h-full rounded-lg backdrop-blur bg-slate-600 bg-opacity-10 sm:w-full sm:h-[11rem] flex items-center justify-center">
          <img src={gif3} className="w-[90%] rounded-lg" />
        </div>
      </div>
    </div>
  );
}
