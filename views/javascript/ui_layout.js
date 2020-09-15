let dewa = require("./javascript/our_fw.js");
let {windowSettings,panel,objectRender} = require("./javascript/data.js");
let panels = require("./javascript/utility.js");
window.list = [dewa.our("div"),dewa.our("h1")];
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
      bottom: ${panel.bottomPanel.height}px;
      top: 0px;
      `,
    element:"div"
  }
]);
}

let gui_property = [{
  box_x: 500,
  box_y: 510
}
];

let name_property = [{
  name: "box1",
  id: "tools"
}];

  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(45,(window.innerWidth - objectRender.width - panel.leftPanel.width)/(window.innerHeight - objectRender.height),0.1,100);
  scene.add(camera);
  scene.background = new THREE.Color("gray");
  let renderer = new THREE.WebGLRenderer();
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setSize(window.innerWidth - objectRender.width - panel.leftPanel.width,window.innerHeight - objectRender.height);
  document.querySelector(".objectRender").appendChild(renderer.domElement);

  let cube = new THREE.BoxBufferGeometry(1,1,1);
  let skin_cube = new THREE.MeshPhongMaterial({
    color: new THREE.Color("red"),
    wireframe: false
  });
  let box = new THREE.Mesh(cube,skin_cube);
  box.position.y = 0.5;
  box.position.x = -1;
  box.castShadow = true;
  box.receiveShadow = true;

  for(let x in gui_property){
    main.objectGUI({
     name: name_property[x].name,
     id: name_property[x].id
     },
     //masukan variabel oject nya ke sini
     gui_property[x]
     ,{
     get: (input)=>{
     //masukan kode di sini
     box.position.y = input.box_y / 100.0;
     box.position.x = input.box_x / 100.0;
     }
     });
  }
  scene.add(box);

  let cube2 = new THREE.BoxBufferGeometry(1,1,1);
  let skin_cube2 = new THREE.MeshPhongMaterial({
    color: new THREE.Color("red"),
    wireframe: false
  });
  let box2 = new THREE.Mesh(cube,skin_cube);
  box2.position.y = 0.5;
  box2.position.x = 0.5;
  box2.scale.y = 2;
  box2.castShadow = true;
  scene.add(box2);

  let plane = new THREE.PlaneBufferGeometry(5,5,5,5);
  let plane_skin = new THREE.MeshPhongMaterial({
    color: new THREE.Color("gray"),
    wireframe: false
  });
  let floor = new THREE.Mesh(plane,plane_skin);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  camera.position.z = 10;
  camera.position.y = 3;
  camera.lookAt(new THREE.Vector3(0,0,0));
  //camera.rotation.y = Math.PI / 3;

  let ambient = new THREE.AmbientLight(0x404040);
  scene.add(ambient);

  var light = new THREE.PointLight( new THREE.Color("white"), 1, 100 );
  light.position.set( 2, 3, 0 );
  light.castShadow = true;
  scene.add( light );

  let point_helper = new THREE.PointLightHelper(light,0.1);
  scene.add(point_helper);

  let controls = new THREE.OrbitControls(camera,renderer.domElement);
  controls.update();

  let grid = new THREE.GridHelper(20,10,0x000000,0xffffff);
  scene.add(grid);

  function loop(){
    requestAnimationFrame(loop);
    renderer.render(scene,camera);
    controls.update();
  }

  loop();


tools();
window.onresize=()=>{
  tools();

};
