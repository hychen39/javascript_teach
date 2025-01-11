---
marp: true
theme: default
header: 'Next Journey in the Javascript'
footer: 'Hung-Yi Chen, Dept. of Info. Mgt., CYUT  | 2024'
class: lead
paginate: true
headingDivider: [1, 2, 3, 4]
---

<style>
    .columns {
    display: flex;
  }
  .column {
    flex: 1;
    padding: 10px;
  }
  .column.large{
    flex: 2;
  }
  .small-font {
    font-size: 0.8em;
  }

  section > header,
section > footer {
  position: absolute;
  left: auto;
  right: 90px;
  height: 20px;
}

header {
  top: 30px;
}

footer {
  bottom: 30px;
}
</style>

# Next Journey in the Javascript

## What we covered in the courses

- Javascript essentials: Variable, Primitive data types, operators
- Array and Objects
- Functions: basic functions, recursive functions, nested functions, Anonymous functions
- Classes: constructor, methods, inheritance, prototype
- Asynchronous programming: Callback, Promise, async/await
- DOM Event Handling 
- DOM events: keyboard events, mouse events, drag and drop events, form events
- Web APIs: DOM manipulation, fetch API, timer API

## What you should continue in your JS developer journey

Goal: develop large scale applications using Javascript

### Learn more about Javascript ES6 features
  - Modules feature: decompose your code into modules
  - Iterator and Generator: improve performance and reduce memory usage for large collections.
  - JS Standard Library: Set and Map, JSON related API, URL API, Fetch API, etc.
  - ... and more

### JS Frameworks and Libraries
  - Angular (Google) : a platform for building mobile and desktop web applications
  - Vue: a progressive framework for building user interfaces
  - React (Facebook) : a library for building user interfaces

### Typed Javascript
  - TypeScript: a superset of JavaScript that adds optional static typing
  - Check your code in the editor and compile it to JavaScript 

![](img/25-Jan-11-14-03-05.png)

--- 

![](img/25-Jan-11-14-02-20.png)


### Code Bundling 
  - Bundling the small modules into a single file for production
  - Tools such as Webpack, Rollup, Parcel

![](img/25-Jan-11-14-04-09.png)

### Package Management
  - NPM: Node Package Manager
  - Yarn: a faster and more secure package manager

### Unit Testing
  - Test your code to ensure it works as expected so that you can integrate it into your application with confidence
  - Tools: Jest, Mocha, Jasmine

![](img/25-Jan-11-14-05-50.png)

### Server-side Javascript
  - Node.js: a JavaScript runtime built on Chrome's V8 JavaScript engine
  - Express: a fast, unopinionated, minimalist web framework for Node.js

### Version Control
  - Git: a distributed version control system
  - GitHub: a web-based Git repository hosting service

## Keep learning and coding!

Learning and Master a programming language is not a sprint, it's a marathon.

![bg right:50% 98%](https://b1694534.smushcdn.com/1694534/wp-content/uploads/2021/06/21.jpeg?lossy=1&strip=1&webp=1)

## Good luck and have fun!

God bless you! 🙏

"Hold on to instruction, do not let it go; guard it well, for it is your life." Proverbs 4:13 (NIV)

<script>
    // add the following script at the end of your marp slide file.
    const h2s = document.querySelectorAll('h2');
    h2s.forEach(function(h2, idx){
        h2.innerHTML = `<span class="small-font">${idx + 1}</span> ${h2.innerHTML}`
    })
</script>