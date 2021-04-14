import React, { useState, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react'; // import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import '@ckeditor/ckeditor5-build-classic/build/translations/es';
// import ClassicEditor from 'ckeditor5-build-classic-complete';

import ClassicEditor from 'ckeditor5-build-classic-plus'; // import { useField } from 'react-final-form'

import { useInput } from 'react-admin';

const AdvancedInput = props => {
  const {
    input
  } = useInput(props);
  const [value, setValue] = useState(input.value);

  const onChange = (event, value) => {
    setValue(value);
    input.onChange(value);
  };

  const editorRef = useRef();
  const {
    config
  } = props || {}; // config.plugins = [ "Alignment" ];

  return /*#__PURE__*/React.createElement(CKEditor, {
    editor: ClassicEditor,
    config: config,
    data: value,
    onInit: editor => {//console.log('Editor is ready to use!', editor);
    },
    onChange: (event, editor) => {
      const data = editor.getData();
      onChange(event, data);
    },
    onBlur: editor => {//console.log('Blur.', editor);
    },
    onFocus: editor => {//console.log('Focus.', editor);
    }
  });
};

export default AdvancedInput;