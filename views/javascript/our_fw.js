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

}

exports.our =(id)=>{
  return new Our(id);
};
