# 🔐 react-secure-captcha Demo

This is a fully interactive demo for the [`react-secure-captcha`](https://www.npmjs.com/package/react-secure-captcha) package, allowing users to dynamically configure and preview all supported options in real-time.

> 📦 NPM Package: [react-secure-captcha](https://www.npmjs.com/package/react-secure-captcha)

---

## 🎮 Features

- Switch captcha type (`canvas` or `math`)
- Adjust character length (for `canvas` mode)
- Customize width and height
- Modify background and text colors
- Control the amount of noise
- Choose from multiple common fonts
- Set custom placeholder text
- Toggle auto-validation
- Set custom success and error messages
- See real-time validation result

---

## 🌐 Live Demo

[👉 Try it on CodeSandbox](https://codesandbox.io/p/github/rahim72/react-secure-captcha-demo/main?import=true&workspaceId=ws_T26qRzk3BtitaSBvarwYd6)

---

## 🚀 Getting Started Locally

### 1. Create project with Vite

```bash
npm create vite@latest react-secure-captcha-demo -- --template react
cd react-secure-captcha-demo
```

### 2. Install dependencies

```bash
npm install
npm install react-secure-captcha
```

> If you're using Tailwind CSS:

Then configure `tailwind.config.js` and `index.css`.

### 3. Run the project

```bash
npm run dev
```

---

## 📁 Project Structure

```
📦 react-secure-captcha-demo/
├─ src/
│  ├─ App.jsx           // Main configurable demo component
│  ├─ main.jsx          // React entry point
│  ├─ index.css         // Base styles (with or without Tailwind)
├─ public/
│  └─ ...               // Any static assets
├─ package.json
├─ vite.config.js
└─ ...
```

---
