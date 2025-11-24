# Template Engines in Express.js — EJS & Pug

Template engines allow you to create dynamic HTML pages by embedding variables, loops, and expressions directly inside templates.

---

## 🚀 Purpose of Template Engines
- Separate UI from server code.
- Render dynamic content.
- Reuse layouts using partials and includes.
- Reduce repetitive HTML.

---

# 1. EJS (Embedded JavaScript Templates)

## 📦 Installation
```bash
npm install ejs
🔧 Express Setup

app.set("view engine", "ejs");
✨ EJS Features
Uses regular HTML with JavaScript embedded.

Syntax:

<%= value %> → Print escaped output

<%- value %> → Print unescaped HTML

<% code %> → Logic (if, loops)

📁 Example File Structure

project/
 ├── views/
 │    └── home.ejs
 └── server.js
📄 Example Template (home.ejs)

<h1>Hello, <%= user.name %></h1>
2. Pug Template Engine
📦 Installation

npm install pug
🔧 Express Setup

app.set("view engine", "pug");
✨ Pug Features
Clean, indentation-based syntax.

No closing tags.

Uses minimal code for structure.

= prints values

each → loops

if → conditions

📁 File Structure

project/
 ├── views/
 │    └── index.pug
 └── server.js
📄 Example Template (index.pug)

h1= message
ul
  each item in items
    li= item
✔ When to Use EJS?
You want HTML-like syntax

You prefer writing regular HTML with JS

Easy migration from static HTML files

✔ When to Use Pug?
You prefer minimal syntax

Want cleaner templates without HTML noise

Better for large projects with many pages

🧩 Summary Table
Feature	EJS	Pug
HTML-like	✔ Yes	❌ No
Minimal syntax	❌ No	✔ Yes
Learning curve	Easy	Moderate
Output	HTML	HTML

📚 Conclusion
EJS and Pug both provide powerful ways to build dynamic webpages in Express.
Choose EJS if you prefer standard HTML.
Choose Pug if you like clean indentation-based templates.