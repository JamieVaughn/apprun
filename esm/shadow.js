import app from './app';
export default (_, children) => {
    const el = document.createElement('section');
    el.attachShadow({ mode: 'open' });
    app.render(el.shadowRoot, children);
    return app.h(app.Fragment, null, el);
};
//# sourceMappingURL=shadow.js.map