import React, { useState, useRef } from 'react'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { useField } from 'react-final-form'
import { useInput } from 'react-admin'


const AdvancedInput = props => {
  const {
    input
  } = useInput(props);

  const [value, setValue] = useState(input.value);

  const onChange = (event, value) => {
    setValue(value);
    input.onChange(value)
  };

  const editorRef = useRef();
  
  return (
        <CKEditor
          editor={ClassicEditor}
          // config={CKEditorConfiguration}
          data={value}
          onInit={editor => {
            //console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(event, data)
          }}
          onBlur={editor => {
            //console.log('Blur.', editor);
          }}
          onFocus={editor => {
            //console.log('Focus.', editor);
          }}
        />
  )
}

export default AdvancedInput
