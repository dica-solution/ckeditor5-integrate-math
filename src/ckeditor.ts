/**
 * @license Copyright (c) 2014-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { Undo } from '@ckeditor/ckeditor5-undo';

// You can read more about extending the build with additional plugins in the "Installing plugins" guide.
// See https://ckeditor.com/docs/ckeditor5/latest/installation/plugins/installing-plugins.html for details.

import Math from '@isaul32/ckeditor5-math/src/math';
import AutoformatMath from '@isaul32/ckeditor5-math/src/autoformatmath';

class Editor extends ClassicEditor {
  public static override builtinPlugins = [
    Autoformat,
    BlockQuote,
    Bold,
    Essentials,
    Indent,
    Italic,
    Link,
    List,
    Paragraph,
    PasteFromOffice,
    Table,
    TableToolbar,
    TextTransformation,
    Undo,
    Math,
    AutoformatMath,
  ];

  public static override defaultConfig: any = {
    toolbar: {
      items: [
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'blockQuote',
        'insertTable',
        'undo',
        'redo',
        'math',
      ],
    },
    language: 'en',

    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
    },
    math: {
      engine: 'mathjax', // or katex or function. E.g. (equation, element, display) => { ... }
      lazyLoad: undefined, // async () => { ... }, called once before rendering first equation if engine doesn't exist. After resolving promise, plugin renders equations.
      outputType: 'span', // or span
      forceOutputType: false, // forces output to use outputType
      enablePreview: true, // Enable preview view
      previewClassName: ['ck-math-preview'], // Class names to add to previews
      popupClassName: [], // Class names to add to math popup balloon
      katexRenderOptions: {}, // KaTeX only options for katex.render(ToString)
    },
  };
}

export default Editor;
