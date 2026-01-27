/* @refresh reload */
import {render} from 'solid-js/web';
import 'solid-devtools';
import '../lib/diagramly/Init.js'
import '../lib/grapheditor/Init.js'

import {onMount} from "solid-js";

import './global.css'
import {App} from "../lib/diagramly/App.js";


const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

render(() => {
    onMount(() => {
        App.main()
    })

    return <div></div>
}, root);
