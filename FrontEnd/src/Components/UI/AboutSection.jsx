import gif from "../../assets/gifs/AboutUs.gif";

export default function AboutSection() {
  return (
    <div
      className="w-full h-[35%] flex flex-row px-24 py-5 gap-10 justify-center items-center relative my-20 sm:px-7"
      id="about-div"
    >
      <div className="flex flex-col gap-20 w-[55%] h-[90%] relative sm:w-full">
        <span className="h-2 text-[6rem] text-black font-semibold text-left absolute -left-[10%] top-9 sm:left-6 sm:text-[4rem] sm:top-[8%] z-10 dark:text-[#dbdbdb]">
          About
        </span>
        <span className="h-2 text-[6rem] text-black font-semibold text-left absolute -left-[10%] top-[17%] sm:left-6 sm:text-[4rem] sm:top-[17%] z-10 dark:text-[#dbdbdb]">
          Us
        </span>
        <div className="w-full h-full bg-gray-500 mt-[12%] rounded-lg flex flex-col  bg-opacity-10 justify-end hover:z-10 dark:hover:bg-opacity-50 backdrop-blur-sm sm:h-[80%] dark:bg-indigo-500">
          <img
            src={gif}
            className="w-[65%] absolute top-0 right-0 sm:top-[20%] sm:w-full"
          />
          <span className="w-2/3 text-lg text-black font-light text-justify px-5 pb-5 sm:w-full dark:text-[#dbdbdb] sm:text-xs">
            A web-based journal application for taking notes or saving your
            daily logs. The idea for this app came when we saw people needing to
            download 3<sup>rd</sup> party application on their devices just to
            write down notes that were only saved to their personal devices and
            could not be accessed from anywhere. The app provides a light weight
            WYSIWYG text editor with cloud saving capabilities and
            cross-platform accessibility.
          </span>
        </div>
      </div>
    </div>
  );
}
