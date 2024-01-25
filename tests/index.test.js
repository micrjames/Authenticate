const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');
require('@testing-library/jest-dom');

const { Form } = require("../dist/app/form/Form");

describe("Auth.", () => {
   let dom;
   let document;
   let auth;
   beforeAll(() => {
	  const html = fs.readFileSync(path.resolve(__dirname, "..", "dist", "app", "views", 'index.ejs'), 'utf8');
	  dom = new JSDOM(html, {runScripts: 'dangerously'});
	  document = dom.window.document;
   });
   test("Should be the auth.", () => {
	  expect().toBeInTheDocument();
   });
});
