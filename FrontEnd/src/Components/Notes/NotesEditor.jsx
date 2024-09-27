import { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor from "jodit-react";
import NavBar from "../UI/NavBar";
import Button from "../UI/Button";
import { useNavigate, useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../../Redux/react_component/EditorData";
import axios from "axios";
import moment from "moment";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

export default function NotesEditor() {
  const { id } = useParams();
  const editor = useRef(null);
  const [data, setData] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const captureRef = useRef();
  const updateDate = moment().format("D-M-YYYY");
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fired = useRef(false);
  const toastId = useRef(null);
  const darkMode = useSelector((state) => state.theme.value);

  useEffect(() => {
    if (!fired.current) {
      fired.current = true;
      toastId.current = toast.loading("loading");
      axios
        .get(`/api/notes/${id}`)
        .then((res) => {
          const newdata = res.data;
          setData(newdata);
          toast.success("ok", { id: toastId.current });
        })
        .catch((err) => {
          toast.error(err, { id: toastId.current });
        });
    }
  }, [id]);

  const [content, setContent] = useState();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (data) {
      setContent(data.content || "");
      setTitle(data.title || "");
    }
  }, [data]);

  const handleSave = () => {
    const formdata = {
      title: title ?? data.title,
      dateUpdated: updateDate,
      content: content,
    };
    axios
      .put(`/api/notes/${id}`, formdata, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        toast.success("");
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const backAndSave = () => {
    handleSave();
    html2canvas(captureRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      dispatch(setImage(imgData));
    });
    navigate("/view-notes");
  };

  // Jodit Editor Configuration
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: `${content == null ? "Start typing..." : ""}`,
      height: "680px",
      width: "100%",
      enableDragAndDropFileToEditor: true,
      uploader: { insertImageAsBase64URI: true },
      removeButtons: ["brush", "file"],
      showXPathInStatusbar: false,
      toolbarAdaptive: true,
      toolbarSticky: true,
      style: {
        background: darkMode === "dark" ? "#27272E" : "#ffffff",
        color: darkMode !== "dark" ? "#27272E" : "#ffffff",
      },
      theme: darkMode === "dark" ? "dark" : "default",
      colors: {
        greyscale: [
          "#000000",
          "#434343",
          "#666666",
          "#999999",
          "#B7B7B7",
          "#CCCCCC",
          "#D9D9D9",
          "#EFEFEF",
          "#F3F3F3",
          "#FFFFFF",
        ],
        palette: [
          "#980000",
          "#FF0000",
          "#FF9900",
          "#FFFF00",
          "#00F0F0",
          "#00FFFF",
          "#4A86E8",
          "#0000FF",
          "#9900FF",
          "#FF00FF",
        ],
        full: [
          "#E6B8AF",
          "#F4CCCC",
          "#FCE5CD",
          "#FFF2CC",
          "#D9EAD3",
          "#D0E0E3",
          "#C9DAF8",
          "#CFE2F3",
          "#D9D2E9",
          "#EAD1DC",
        ],
      },
      showCharsCounter: false,
      showWordsCounter: false,
    }),
    [darkMode]
  );

  // Function to remove HTML tags
  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  // Function to count characters and words
  const countCharsAndWords = (content) => {
    const strippedContent = stripHtml(content); // Remove HTML tags
    const noExtraSpaces = strippedContent.replace(/\s+/g, " ").trim(); // Remove extra spaces

    const charCount = noExtraSpaces.replace(/\s/g, "").length; // Count characters excluding spaces
    const wordCount =
      noExtraSpaces.length > 0 ? noExtraSpaces.split(" ").length : 0; // Count words

    setCharCount(charCount);
    setWordCount(wordCount);
  };

  useEffect(() => {
    countCharsAndWords(content);
  }, [content]);

  return (
    <div ref={captureRef} className="dark:bg-slate-800 h-full">
      <NavBar />
      <div className="w-99 h-fit flex flex-row justify-evenly bg-gray-100 backdrop-blur-sm py-5 mx-3 rounded sm:!mx-0 sm:w-full sm:px-2 sm:py-4 sm:flex-col-reverse sm:gap-4 sm:items-center overflow-hidden dark:bg-gradient-to-tr from-[#272727] via-[#383838] via-[#222222] to-[black]">
        <div className="w-[15%] bg-opacity-60 p-2 bg-slate-300 rounded flex flex-col font-montserrat dark:bg-[#535353] sm:w-full">
          <div className="flex w-full justify-between items-center">
            <span className="text-lg font-semibold dark:text-white">
              Note Metadata
            </span>{" "}
            <PencilSquareIcon
              className="w-5 fill-white"
              onClick={() => setEdit(!edit)}
            />
          </div>
          <div className="w-full h-full text-sm font-light flex flex-col gap-5 py-5">
            <span className="w-full flex justify-between dark:text-white">
              <span>Title:</span>
              <input
                type="text"
                className={`${
                  edit ? "text-black bg-white" : ""
                } bg-transparent text-end rounded`}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={!edit}
              />
            </span>
            <span className="w-full flex justify-between dark:text-white">
              <span>Author:</span>
              <span>{data.author}</span>{" "}
            </span>
            <span className="w-full flex justify-between dark:text-white">
              <span>Date created:</span>
              <span>{data.dateCreated}</span>
            </span>
            <span className="w-full flex justify-between dark:text-white">
              <span>Last updated:</span>
              <span>{updateDate}</span>
            </span>
            <span className="w-full flex justify-between dark:text-white">
              <span>Word Count:</span>
              <span>{wordCount}</span>
            </span>
            <span className="w-full flex justify-between dark:text-white">
              <span>Character Count:</span>
              <span>{charCount}</span>
            </span>
          </div>
          <div className="w-full flex flex-row justify-between">
            <Button
              className="bg-red-500 hover:bg-red-600 focus:ring-red-300 focus-visible:ring-red-300"
              onClick={backAndSave}
            >
              Back
            </Button>
            <Button
              className="bg-green-500 hover:bg-green-600 focus:ring-green-300 focus-visible:ring-green-300"
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </div>

        <div className="w-[66%] h-fit flex flex-col rounded sm:w-full">
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => {
              setContent(newContent);
            }}
          />
        </div>

        <div className="w-[15%] bg-opacity-60 p-2 bg-slate-300 rounded flex flex-col sm:hidden font-montserrat dark:bg-[#535353]"></div>
      </div>
    </div>
  );
}
