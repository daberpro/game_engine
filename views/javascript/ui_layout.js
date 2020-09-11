let dewa = require("./javascript/our_fw.js");
let {windowSettings,panel,objectRender} = require("./javascript/data.js")
let list = [dewa.our("div"),dewa.our("h1")];
let main = list[0];

const tools = ()=>{
  main.setAttribute([{
    class: "tools",
    name: "style",
    value: `
      width: ${window.innerWidth}px;
      height: ${panel.tools.height}px;
      `,
    element:"div"
  },
  {
    class: "leftPanel",
    name: "style",
    value: `
      width: ${panel.leftPanel.width}px;
      height: ${window.innerHeight}px;
      `,
    element:"div"
  },
  {
    class: "rightPanel",
    name: "style",
    value: `
      width: ${panel.rightPanel.width}px;
      height: ${window.innerHeight}px;
      `,
    element:"div"
  },
  {
    class: "bottomPanel",
    name: "style",
    value: `
      width: ${window.innerWidth}px;
      height: ${panel.bottomPanel.height}px;
      `,
    element:"div"
  },
  {
    class: "bottomPanel",
    name: "style",
    value: `
      width: ${window.innerWidth}px;
      height: ${panel.bottomPanel.height}px;
      `,
    element:"div"
  },
  {
    class: "objectRender",
    name: "style",
    value: `
      width: ${window.innerWidth - objectRender.width}px;
      height: ${window.innerHeight - objectRender.height}px;
      left: ${panel.leftPanel.width}px;
      right: ${panel.leftPanel.height}px;
      `,
    element:"div"
  }
]);
}

tools();

window.onresize=()=>{
  tools();
};

// console.log(test.get("div").filter((item)=>{
//   return item.element.className === "tools"
// }));
// let a = test.get("div")[0].element;
// console.log(a);

// console.log(test.getClass({
//   "name": "div",
//   "class": "leftPanel"
// }))
//
// test.append([{
//   element: "div",
//   class: "tools",
//   child: test.createElement({
//     class: "hello",
//     name: "h1"
//   })
// }]);
//
// console.log(test.get("div"))
//
// test.setAttribute([{
//   class:"tools",
//   name:"style",
//   value:
//   `
//   width: 100px;
//   height: 200px;
//   `,
//   element: "div"
// },
// {
//     class:"leftPanel",
//     name:"style",
//     value:
//     `
//     width: 400px;
//     height: 200px;
//     background: red;
//     `,
//     element: "div"
// },
// {
//     class:"hello",
//     name:"style",
//     value:
//     `
//     width: 100px;
//     height: 100px;
//     background: red;
//     `,
//     element: "h1"
// }
// ]);
