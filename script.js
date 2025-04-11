var products = [
    "Laptop",
    "Smartphone",
    "Camera",
    "Projector",
    "Microphone",
    "TV",
    "Tablet",
    "Monitor",
    "Power Bank",
    "Smartwatch"
  ];
  
  var productList = document.getElementById("productList");
  var showBtn = document.getElementById("showBtn");
  
  showBtn.onclick = function () {

    if (productList.children.length === 0) {
      products.forEach(product => {
        var li = document.createElement("li");
        li.textContent = product;
        productList.appendChild(li);
      });
    }
  };
  