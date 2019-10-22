$_mod.def("/marko$4.18.16/dist/runtime/helpers", function(require, exports, module, __filename, __dirname) { "use strict";

var complain;
var removeDashes = require('/marko$4.18.16/dist/compiler/util/removeDashes'/*"../compiler/util/removeDashes"*/);
var ComponentsContext = require('/marko$4.18.16/dist/runtime/components/ComponentsContext'/*"./components/ComponentsContext"*/);
var getComponentsContext = ComponentsContext.D_;
var ComponentDef = require('/marko$4.18.16/dist/runtime/components/ComponentDef'/*"./components/ComponentDef"*/);
var w10NOOP = require('/warp10$2.0.1/constants'/*"warp10/constants"*/).NOOP;
var isArray = Array.isArray;
var RENDER_BODY_TO_JSON = function () {
    return w10NOOP;
};
var FLAG_WILL_RERENDER_IN_BROWSER = 1;
var IS_SERVER = typeof window === "undefined";

function isFunction(arg) {
    return typeof arg == "function";
}

function classList(arg, classNames) {
    var len;

    if (arg) {
        if (typeof arg == "string") {
            if (arg) {
                classNames.push(arg);
            }
        } else if (typeof (len = arg.length) == "number") {
            for (var i = 0; i < len; i++) {
                classList(arg[i], classNames);
            }
        } else if (typeof arg == "object") {
            for (var name in arg) {
                if (arg.hasOwnProperty(name)) {
                    var value = arg[name];
                    if (value) {
                        classNames.push(name);
                    }
                }
            }
        }
    }
}

function createDeferredRenderer(handler) {
    function deferredRenderer(input, out) {
        deferredRenderer.renderer(input, out);
    }

    // This is the initial function that will do the rendering. We replace
    // the renderer with the actual renderer func on the first render
    deferredRenderer.renderer = function (input, out) {
        var rendererFunc = handler.renderer || handler._ || handler.render;
        if (!isFunction(rendererFunc)) {
            throw Error("Invalid renderer");
        }
        // Use the actual renderer from now on
        deferredRenderer.renderer = rendererFunc;
        rendererFunc(input, out);
    };

    return deferredRenderer;
}

function resolveRenderer(handler) {
    var renderer = handler.renderer || handler._;

    if (renderer) {
        return renderer;
    }

    if (isFunction(handler)) {
        return handler;
    }

    // If the user code has a circular function then the renderer function
    // may not be available on the module. Since we can't get a reference
    // to the actual renderer(input, out) function right now we lazily
    // try to get access to it later.
    return createDeferredRenderer(handler);
}

var helpers = {
    /**
     * Internal helper method to prevent null/undefined from being written out
     * when writing text that resolves to null/undefined
     * @private
     */
    s: function strHelper(str) {
        return str == null ? "" : str.toString();
    },

    /**
     * Internal helper method to handle loops without a status variable
     * @private
     */
    f: function forEachHelper(array, callback) {
        var i;

        if (array == null) {} else if (isArray(array)) {
            for (i = 0; i < array.length; i++) {
                callback(array[i], i, array);
            }
            // eslint-disable-next-line no-constant-condition
        } else if (typeof array.forEach === "function") {
            array.forEach(callback);
        } else if (typeof array.next === "function") {
            i = 0;
            do {
                var result = array.next();
                callback(result.value, i++, array);
            } while (!result.done);
        } else if (isFunction(array)) {
            // Also allow the first argument to be a custom iterator function
            array(callback);
            // eslint-disable-next-line no-constant-condition
        }
    },

    /**
     * Helper to render a dynamic tag
     */
    d: function dynamicTag(out, tag, getAttrs, renderBody, args, props, componentDef, key, customEvents) {
        if (tag) {
            var attrs = getAttrs && getAttrs();
            var component = componentDef && componentDef.k_;
            if (typeof tag === "string") {
                if (customEvents) {
                    if (!props) {
                        props = {};
                    }

                    customEvents.forEach(function (eventArray) {
                        props["on" + eventArray[0]] = componentDef.d(eventArray[0], eventArray[1], eventArray[2], eventArray[3]);
                    });
                }

                if (renderBody) {
                    out.aK_(tag, attrs, key, component, 0, 0, props);
                    renderBody(out);
                    out.aL_();
                } else {
                    out.aM_(tag, attrs, key, component, 0, 0, props);
                }
            } else {
                var defaultAttrs = renderBody ? { renderBody: renderBody } : {};
                if (attrs == null) {
                    attrs = defaultAttrs;
                } else if (typeof attrs === "object") {
                    attrs = Object.keys(attrs).reduce(function (r, key) {
                        r[removeDashes(key)] = attrs[key];
                        return r;
                    }, defaultAttrs);
                }

                if (tag._ || tag.renderer || tag.render) {
                    var renderer = tag._ || tag.renderer || tag.render;
                    out.c(componentDef, key, customEvents);
                    renderer(attrs, out);
                    out.ax_ = null;
                } else {
                    var render = tag && tag.renderBody || tag;
                    var isFn = typeof render === "function";

                    if (render.safeHTML) {

                        out.write(tag.safeHTML);
                        // eslint-disable-next-line no-constant-condition

                        return;
                    }

                    if (isFn) {
                        var flags = componentDef ? componentDef.g_ : 0;
                        var willRerender = flags & FLAG_WILL_RERENDER_IN_BROWSER;
                        var isW10NOOP = render === w10NOOP;
                        var preserve = IS_SERVER ? willRerender : isW10NOOP;
                        out.aN_(key, component, preserve);
                        if (!isW10NOOP && isFn) {
                            var componentsContext = getComponentsContext(out);
                            var parentComponentDef = componentsContext.j_;
                            var globalContext = componentsContext.l_;
                            componentsContext.j_ = new ComponentDef(component, parentComponentDef.id + "-" + parentComponentDef.c_(key), globalContext);
                            render.toJSON = RENDER_BODY_TO_JSON;

                            if (args) {
                                render.apply(null, [out].concat(args, attrs));
                            } else {
                                render(out, attrs);
                            }

                            componentsContext.j_ = parentComponentDef;
                        }
                        out.aO_();
                    } else {
                        out.error("Invalid dynamic tag value");
                    }
                }
            }
        } else if (renderBody) {
            var compFlags = componentDef ? componentDef.g_ : 0;
            out.aN_(key, component, IS_SERVER ? compFlags & FLAG_WILL_RERENDER_IN_BROWSER : render === w10NOOP);
            renderBody(out);
            out.aO_();
        }
    },

    /**
     * Helper to load a custom tag
     */
    t: function loadTagHelper(renderer) {
        if (renderer) {
            renderer = resolveRenderer(renderer);
        }

        return function wrappedRenderer(input, out, componentDef, key, customEvents) {
            out.c(componentDef, key, customEvents);
            renderer(input, out);
            out.ax_ = null;
        };
    },

    /**
     * classList(a, b, c, ...)
     * Joines a list of class names with spaces. Empty class names are omitted.
     *
     * classList('a', undefined, 'b') --> 'a b'
     *
     */
    cl: function classListHelper() {
        var classNames = [];
        classList(arguments, classNames);
        return classNames.join(" ");
    }
};

module.exports = helpers;
});