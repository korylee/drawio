/**
 * Copyright (c) 2006-2015, JGraph Holdings Ltd
 * Copyright (c) 2006-2015, draw.io AG
 */
import {mxCodecRegistry} from "./mxCodecRegistry.js";
import {mxObjectCodec} from "./mxObjectCodec.js";
import {mxGraph} from "../view/mxGraph.js";

mxCodecRegistry.register(function () {
    /**
     * Class: mxGraphCodec
     *
     * Codec for <mxGraph>s. This class is created and registered
     * dynamically at load time and used implicitly via <mxCodec>
     * and the <mxCodecRegistry>.
     *
     * Transient Fields:
     *
     * - graphListeners
     * - eventListeners
     * - view
     * - container
     * - cellRenderer
     * - editor
     * - selection
     */
    return new mxObjectCodec(new mxGraph(),
        ['graphListeners', 'eventListeners', 'view', 'container',
            'cellRenderer', 'editor', 'selection']);

}());
