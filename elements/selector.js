export default class QS extends HTMLElement {
    constructor(selectors) {
        super();
        // validateSelector()
        // parseSelectors()
        this.s = document.querySelectorAll(selectors);
    }

    getSelector() {
        return this.s;
    }

    parseSelectors(selectors) {
        // 
    }

    validateSelector(selector) {
        // regex to validate selector string
    }

    find(selector) {
        const f = new QS(selector);
        return f.getSelector();
    }

    css(prop, val) {
        //
    }

    children(selector) {
        return this.s.getSelector().querySelectorAll(selector)
    }

    parent() {
        //
    }

    inArray(val) {
        // Array.indexOf
    }

    isArray(arr) {
        return Array.isArray(arr);
    }

    show() {
        // style="display: block, inline, table-cell"
    }

    hide() {
        // style="display:none"
    }

    ajax() {
        // fetch()
    }

    outerHeight() {
        // this.offsetHeight();
    }

    attr(att, val = '') {
        // getAttribute(att) or setAttribute(att, val)
        if (val !== '') {
            this.s.setAttribute(att, val);
        }

        return this.s.getAttribute(att);
    }

    is(val) {
        //
    }
}