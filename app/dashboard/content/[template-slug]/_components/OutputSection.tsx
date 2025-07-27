import React, { useEffect } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { useRef } from 'react';

interface props{
  aiOutput: string
}

const OutputSection = ({aiOutput}:props) => {
  const editorRef: any = useRef(null);

  useEffect(() => {
    if (editorRef.current && aiOutput) {
      const editorInstance = editorRef.current.getInstance();
      // Set as HTML instead of markdown to properly render formatting
      editorInstance.setHTML(aiOutput);
    }
  }, [aiOutput]);

  return (
    <div className='bg-[#1b2431] shadow-lg border rounded-lg text-white'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button className='flex gap-2 cursor-pointer'
        onClick={() => navigator.clipboard.writeText(aiOutput)}><Copy className='w-4 h-4' /> Copy</Button>
      </div>
      <Editor
      ref={editorRef}
    initialValue=" "
    initialEditType="wysiwyg"
    height="600px"
    useCommandShortcut={true}
    onChange={() => console.log(editorRef.current.getInstance().getHTML())}
  />
    </div>
  )
}

export default OutputSection