import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Main from './templates/Main';
import { MemoryRouter} from 'react-router-dom'
import data from "../data"
export default function render(locals, callback) {

    const initialIndex = data.routes.findIndex(path => path === locals.path);
    const html = ReactDOMServer.renderToStaticMarkup(
        <MemoryRouter initialEntries={data.routes} initialIndex={initialIndex}>
            <Main/>
        </MemoryRouter>
    );
    callback(null, '<!DOCTYPE html>' + html)
}
