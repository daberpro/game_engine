window.element = [];

class Our {
  constructor(object) {
    //membuat control flow untuk mengatur object main
    if(!(object === undefined || object === "" || object === " " || typeof(object) === "number")){

         //semua element yang sama akan di ambil
        this.object = {
          "element": document.querySelectorAll(object),
          "name" : object
        };

        for(let x in this.object.element){
          element.push({
            "element": this.object.element[x],
            name: this.object.name
          });
        }
    }else{
      console.error("element yang akan di manipulasi tidak di temukan");
    }

    
  }

  //method di bawah ini berfungsi untuk mengembalikan element yang telah di ambil sesuai dengan
  //kondisi
  get(elements){
    const main_element = element.filter((obj)=>{
        return obj.name == elements && typeof(obj.element) !== "function" && typeof(obj.element) !== "number";
    });
    return main_element;
  }
  //method ini berfungsi untuk mengambil element berdasarkan class nya
  getClass(obj){
    return this.get(obj.element).filter((item)=>{
      return item.element.className === obj.class;
    });
  }
  //method yang ini berfungsi untuk mengambil objek berdasarkan id
  getId(obj){
    return this.get(obj.element).filter((item)=>{
      return item.element.id === obj.id;
    });
  }

  //method yang ini untuk menetapkan atribute pada elements
  //dengan menggunakan array yang berisi object
  setAttribute(obj){
    for(let x in obj){
      this.get(obj[x].element).forEach((item) => {
        if(item.element.className === obj[x].class){
          item.element.setAttribute(obj[x].name,obj[x].value);
        }
      });
    }
  }

  //method untuk membuat element baru
  createElement(obj){
    let ele = document.createElement(obj.name);
    ele.setAttribute("class",obj.class);
    return ele;
  }

  //method untuk menggabungkan elements
  append(obj){
    for(let x in obj){
      this.get(obj[x].element).forEach((item) => {
        if(item.element.className === obj[x].class){
            item.element.appendChild(obj[x].child);
        }
      });
    }
  }

  //method menambahkan element baru
  //dengan menyusun nya dari yang terbaru ke yang lama

  insertHTML(data){
    for(let x in data){
      this.get(data[x].element).forEach((item) => {
        if(item.element.id === data[x].id){
          item.element.insertAdjacentHTML("afterbegin",data[x].html)
        }
      });

    }
  }

  //methd untuk menambahka atribute class jika sudah ada akan di hapus
  //jika belum ada maka tambahkan

  checkClass(data){
    for(let x in data){
      this.get(data[x].element).forEach((item) => {
        if(item.element.id === data[x].id){
          item.element.classList.toggle(data[x].class)
        }
      });
    }
  }

  //split method berfungsi untuk membuat string menjadi array
  //dengan menggunakan tanda pemisah

  toArray(obj){
    return obj.string.split(obj.separator);
  }

  //method untuk membuat Audio elements

  audio(fn){
    this.audio = new Audio();
    return fn(this.audio);
  }

  //method untuk mengambil gambar

  image(fn){
    this.image = new Image();
    return fn(this.image);
  }

  objectGUI(target,data,property){

    let json = JSON.stringify(data);
    let new_data = "";
    let new_data2 = "";
    let new_data3 = "";
    let new_data4 = "";
    let new_data5 = "";

    let json_array = this.toArray({
      string: json,
      separator: ","
    });

    for(let x in json_array){
      new_data+=` ${json_array[x]}`;
    }

    let json_array2 = this.toArray({
      string: new_data,
      separator: ":"
    });

    for(let x in json_array2){
      new_data2+=` ${json_array2[x]}`;
    }

    let json_array3 = this.toArray({
      string: new_data2,
      separator: "{"
    });

    for(let x in json_array3){
      new_data3+=json_array3[x];
    }

    let json_array4 = this.toArray({
      string: new_data3,
      separator: "}"
    });

    for(let x in json_array4){
      new_data4+= json_array4[x];
    }

    let json_array5 = this.toArray({
      string: new_data4,
      separator: `"`
    });

    for(let x in json_array5){
      new_data5+=`*${json_array5[x]}`;
    }

    let ret = eval(this.toArray({
      string: new_data5,
      separator: `*`
    }));

    ret.splice(0,2);

    let final = [];

    for(let x in ret){
      if(x % 2 === 1 && ret[x] === " "){
        delete ret[x];
      }else{
          final.push(ret[x]);
      }
    }

    for(let x in final){
      if(Number.isInteger(parseInt(final[x]))){
        final[x] = parseInt(final[x]);
      }
    }

    let check=(condition,obj)=>{
      if(condition){
        return obj;
      }else{

      }
    }

    let i = 0;
    let id_array = []

    for(let x=0; x < final.length; x++){
      if(x % 2 !== 1){
          i++;
          id_array.push(i);
        this.insertHTML([
          {
            id: target.id,
            element: "div",
            html:
            `
            <div class="object"><span>${final[x]}</span><br/><input type="range" id="${target.id+i}" value="${final[x+1]}" max="${final[x+1]}"/><input id="${target.id+i}" type="number" max="${final[x+1]}" value="${final[x+1]}"/></div>
            `
          }
        ]);
      }

    };

    this.insertHTML([
      {
        id: target.id,
        element: "div",
        html:
        `
        <h3 onmousedown="main.drag(this)" ondragstart="main.stopDrag(this)">${target.name}</h3>
        `
      }
    ]);

    list.push(dewa.our("input"));

    let input =[];
    for(let x in id_array){
      input.push(this.getId({
        element: "input",
        id: target.id+id_array[x]
      }));
    }

    let data_object = []
    for(let x in input){
      for(let y in input[x]){
        data_object.push(input[x][y]);
      }
    }

    for(let y=0; y < data_object.length; y++){
      if(y % 2 === 0){
        for(let x in final){
          if(x % 2 === 0){
            if(data[final[x]] === parseInt(data_object[y].element.value)){

              data_object[y].element.oninput=()=>{
                  data[final[x]] = parseInt(data_object[y].element.value);
                  data_object[y+1].element.value = data_object[y].element.value;
                  property.get(data);
              }

              data_object[y+1].element.oninput=()=>{
                  data[final[x]] = parseInt(data_object[y].element.value);
                  data_object[y].element.value = data_object[y+1].element.value;
                  property.get(data);
              }
            }
          }
        }
      }
    }

  }

  //membuat fungsi drag and drop pada elemet html
  drag(el){
    el.parentElement.style.zIndex = 1000;
    document.body.append(el.parentElement);

    let shiftX = event.clientX - el.getBoundingClientRect().left;
    let shiftY = event.clientY - el.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
      el.parentElement.style.left = event.pageX - shiftX + 'px';
      el.parentElement.style.top = event.pageY - shiftY + 'px';
    }
    moveAt(el.pageX, el.pageY);

    function onMouseMove(el) {
      moveAt(el.pageX, el.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    el.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      el.onmouseup = null;
    };

  }

  //membuat fungsi penetralan drag pada element

  stopDrag(){
    return false;
  }

  //membuat selector global dengan id

  id(id){
    return document.getElementById(id);
  }

}

exports.our =(id)=>{
  return new Our(id);
};
