import { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import NavBar from '../UI/NavBar';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { useDispatch, useSelector } from 'react-redux';
import { setValue, setImage} from '../../Redux/react_component/EditorData';

export default function NotesEditor() {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const captureRef = useRef();

  const dispatch = useDispatch();
  
  const darkMode = useSelector((state) => state.theme.value);

  // Jodit Editor Configuration
  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: 'Start typing...',
      height: '680px',
      width: '100%',
      enableDragAndDropFileToEditor: true,
      uploader: { insertImageAsBase64URI: true },
      removeButtons: ['brush', 'file'],
      showXPathInStatusbar: false,
      toolbarAdaptive: true,
      toolbarSticky: true,
      style: {
        background: darkMode === 'dark' ? '#27272E' : '#ffffff',
        color: darkMode !== 'dark' ? '#27272E' : '#ffffff',
      },
      theme: darkMode === 'dark' ? 'dark' : 'default',
      colors: {
        greyscale: ['#000000', '#434343', '#666666', '#999999', '#B7B7B7', '#CCCCCC', '#D9D9D9', '#EFEFEF', '#F3F3F3', '#FFFFFF'],
        palette: ['#980000', '#FF0000', '#FF9900', '#FFFF00', '#00F0F0', '#00FFFF', '#4A86E8', '#0000FF', '#9900FF', '#FF00FF'],
        full: ['#E6B8AF', '#F4CCCC', '#FCE5CD', '#FFF2CC', '#D9EAD3', '#D0E0E3', '#C9DAF8', '#CFE2F3', '#D9D2E9', '#EAD1DC'],
      },
      showCharsCounter: false,
      showWordsCounter: false,
    }),
    [darkMode]
  );

  // Function to remove HTML tags
  const stripHtml = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  // Function to count characters and words
  const countCharsAndWords = (content) => {
    const strippedContent = stripHtml(content); // Remove HTML tags
    const noExtraSpaces = strippedContent.replace(/\s+/g, ' ').trim(); // Remove extra spaces

    const charCount = noExtraSpaces.replace(/\s/g, '').length; // Count characters excluding spaces
    const wordCount = noExtraSpaces.length > 0 ? noExtraSpaces.split(' ').length : 0; // Count words

    setCharCount(charCount);
    setWordCount(wordCount);
  };

  // Update counts whenever content changes
  useEffect(() => {
    countCharsAndWords(content);
  }, [content]);

  const backAndSave = () =>{
    html2canvas(captureRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      dispatch(setImage(imgData));
    });

    dispatch(setValue(content));
  }

  return (
    <div ref={captureRef} className='dark:bg-slate-800 h-full'>
      <NavBar />
      <div className="w-99 h-fit flex flex-row justify-evenly bg-gray-100 backdrop-blur-sm py-5 mx-3 rounded sm:!mx-0 sm:w-full sm:px-2 sm:py-4 sm:flex-col-reverse sm:gap-4 sm:items-center overflow-hidden dark:bg-gradient-to-tr from-[#272727] via-[#383838] via-[#222222] to-[black]">
        <div className="w-[15%] bg-opacity-60 p-2 bg-slate-300 rounded flex flex-col font-montserrat dark:bg-[#535353] sm:w-full">
          <span className="text-lg font-semibold dark:text-white">Note Metadata</span>
          <div className="w-full h-full text-sm font-light flex flex-col gap-5 py-5">
            <span className='w-full flex justify-between dark:text-white'><span>Title:</span>             <span>first dairy</span></span>
            <span className='w-full flex justify-between dark:text-white'><span>Author:</span>            <span>Sheraz Ahmed</span></span>
            <span className='w-full flex justify-between dark:text-white'><span>Date created:</span>      <span>31-8-2024</span></span>
            <span className='w-full flex justify-between dark:text-white'><span>Last updated:</span>      <span>31-8-2024</span></span>
            <span className='w-full flex justify-between dark:text-white'><span>Word Count:</span>        <span>{wordCount}</span></span>
            <span className='w-full flex justify-between dark:text-white'><span>Character Count:</span>   <span>{charCount}</span></span>
          </div>
          <div className="w-full flex flex-row justify-between">
            <Link to='/view-notes' onClick={backAndSave}> <Button className='bg-red-500 hover:bg-red-600 focus:ring-red-300 focus-visible:ring-red-300' >Back</Button></Link>
            <Button className='bg-green-500 hover:bg-green-600 focus:ring-green-300 focus-visible:ring-green-300' onClick={() => { }}>Save</Button>
          </div>
        </div>

        <div className='w-[66%] h-fit flex flex-col rounded sm:w-full'>
          <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => { setContent(newContent); }}
          />
        </div>

        <div className="w-[15%] bg-opacity-60 p-2 bg-slate-300 rounded flex flex-col sm:hidden font-montserrat dark:bg-[#535353]"></div>
      </div>
    </div>
  );
}
