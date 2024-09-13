import { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import NavBar from '../UI/NavBar'
import '../../Styles/Editor/Editor.css'
import chrome from '../../assets/Images/chrome-background.png'
import { useEffect } from 'react';

export default function NotesEditor() {
	const editor = useRef(null);
	const [content, setContent] = useState('');
  const darkmode = false;

	const config = useMemo(
		() => ({
			readonly: false, // all options from https://xdsoft.net/jodit/docs/,
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
            background: `${darkmode?'#27272E':'#ffffff'}`,
            color: `${!darkmode?'#27272E':'#ffffff'}`,
        },
        
		}),
		[]
	);

  
	return (
    <>
    <NavBar/>
    <div className="h-full w-full absolute flex items-center justify-between">
    <div className={`size-[8rem] rounded-full`} style={{backgroundColor: 'random'}}></div>
    </div>
    <div className="w-99 h-fit flex flex-row justify-evenly bg-[#80808011] backdrop-blur-sm py-5 mx-3 rounded sm:!mx-0 sm:w-full sm:px-2 sm:py-4 sm:flex-col sm:items-center overflow-hidden">
    <div className="w-[15%] bg-opacity-60 p-2 bg-slate-200 rounded flex flex-col sm:hidden font-montserrat">
    <span className="text-lg font-semibold dark:text-[#dddddd]">Note Metadata</span>
    <div className="w-full h-full text-sm font-light flex flex-col gap-5 py-5">
      <span className='w-full flex justify-between'>Title:</span>
      <span className='w-full flex justify-between'>Author:</span>
      <span className='w-full flex justify-between'>Word Count:</span>
      <span className='w-full flex justify-between'>Date created:</span>
      <span className='w-full flex justify-between'>Last updated</span>
      <span className='w-full flex justify-between'>Title</span>
      <span className='w-full flex justify-between'>Title</span>
    </div>
    </div>
    
    <div className='w-[66%] h-fit flex flex-col rounded'>
		<JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={(newContent) => {}}
      
		/></div>
    <div className="w-[15%] bg-opacity-60 bg-slate-200 rounded flex flex-col sm:hidden"></div>
    </div>
    </>
	);
};