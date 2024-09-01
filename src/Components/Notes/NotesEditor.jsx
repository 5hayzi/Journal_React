import { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import NavBar from '../UI/NavBar'
import '../../Styles/Editor/Editor.css'

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

  console.log(content);
  

	return (
    <>
    <NavBar/>
    <div className="w-99 h-fit flex flex-row gap-5  bg-gray-300 p-5 mx-3 rounded sm:!mx-0 sm:w-full sm:px-2 sm:py-4 sm:flex-col sm:items-center overflow-hidden">
    <div className="w-20 bg-opacity-60 bg-slate-200 rounded flex flex-1 flex-col sm:hidden"></div>
    
    <div className=' h-fit flex flex-col bg-slate-200 p-4 rounded sm:p-0'>
		<JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={(newContent) => {}}
      
		/></div>
    <div className="w-20 bg-opacity-60 bg-slate-200 rounded flex flex-1 flex-col sm:hidden"></div>
    </div>
    </>
	);
};