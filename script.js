
const opt = document.querySelectorAll(".opt");
const order = document.getElementById("order");
const orderId = document.querySelector(".order-id");
const image = document.querySelector(".image");

function randomTimeOrId() {
  return Math.floor(Math.random() * 2000 + 1000);
}

order.addEventListener("click", () => {
  order.disabled = true;
  image.innerHTML = "";
  orderId.innerHTML = "Order Id -:";
  let promise = new Promise((res) => setTimeout(() => res(), randomTimeOrId()));
  promise.then(() => {
    let ordered = [];
    opt.forEach((ele) => {
      if (ele.children[1].checked) ordered.push(ele.children[0].textContent);
    });
    if (ordered.length === 0) {
      alert("Please order something");
      order.disabled = false;
      return;
    }
    orderId.innerHTML = `Order Id -: #${randomTimeOrId()}`;
    ordered.forEach((ele) => {
      let img = document.createElement("img");
      switch (ele) {
        case "Burger":
          img.src =
            "https://plus.unsplash.com/premium_photo-1683619761492-639240d29bb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fHww";
          img.alt = "burger";
          break;
        case "Fries":
          img.src =
            "https://media.istockphoto.com/id/1218213212/photo/homemade-french-fries-with-ketchup-and-mayonnaise-on-rustic-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=QYwXP0-whoz7Cni7CXNfIyT_pOcRpZUYHqkTYH4MEhA=";
          img.alt = "fries";
          break;
        case "Drink":
          img.src =
            "https://media.istockphoto.com/id/698051792/photo/soft-drink-on-wooden-table-and-men-sitting.webp?a=1&b=1&s=612x612&w=0&k=20&c=egKGAhI1t4886YjssXlpBTWIKlk88tVq-jIa2qwAHc8=";
          img.alt = "drink";
          break;
      }
      image.appendChild(img);
    });
    opt.forEach((ele) => (ele.children[1].checked = false));
    order.disabled = false;
  });
});
