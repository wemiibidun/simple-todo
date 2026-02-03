# Simple Todo

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/wemiibidun/simple-todo)
![GitHub languages count](https://img.shields.io/github/languages/count/wemiibidun/simple-todo)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://wemiibidun.github.io/simple-todo/)

## Table of contents
* [Introduction](#introduction)
* [Screenshot](#screenshot)
* [Technologies](#technologies)
* [Features](#features)
* [Deployment (CRA + GitHub Pages)](#deployment-cra--github-pages)
* [Link to Published Project](#link-to-published-project)
* [Status](#status)
* [Contact](#contact)

## Introduction
Simple Todo is a clean React todo app that lets you add, edit, complete, and delete tasks. It saves your list locally so your tasks stay available between sessions.

## Screenshot
![Simple Todo preview](public/preview.png)

## Technologies
![React](https://img.shields.io/badge/React-239120?style=for-the-badge&logo=react&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)

* React — component-driven UI, hooks, and state updates
* CSS — modern layout and responsive styling
* localStorage — persistent task storage

## Features
* Add, edit, and delete tasks
* Mark tasks as complete
* Clear completed tasks
* Task counts (total, remaining, done)
* Local storage persistence

## Deployment (CRA + GitHub Pages)
> Note: If you're on Node 17+, add `NODE_OPTIONS=--openssl-legacy-provider` (already included in `.env`).

1. Install the deploy tool:
   * `npm install --save-dev gh-pages`
2. Add scripts in `package.json`:
   * `"predeploy": "npm run build"`
   * `"deploy": "gh-pages -d build"`
3. Deploy:
   * `npm run deploy`
4. In GitHub: **Settings → Pages** → Source: **Deploy from a branch** → **gh-pages** → **/ (root)**.

## Link to Published Project
[Simple Todo Webpage](https://wemiibidun.github.io/simple-todo/)

## Status
Project is: _Complete_

## Contact
Created by [@wemiibidun](https://github.com/wemiibidun)
