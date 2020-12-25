import "./styles.css";

document.getElementById("add-btn").addEventListener("click", () => {
  const item = document.getElementById("add-item");
  if (item.value) {
    const list = document.createElement("li");
    const text = document.createTextNode(item.value);
    const doneBtn = document.createElement("input");
    const deleteBtn = document.createElement("input");
    addBtnAttribute(doneBtn, "完了");
    addBtnAttribute(deleteBtn, "削除");

    list.appendChild(text);
    list.appendChild(doneBtn);
    list.appendChild(deleteBtn);

    list.children[0].addEventListener("click", () => {
      list.children[0].value = "戻す";
      list.removeChild(list.children[1]);
      const clone = list.cloneNode(true);
      clone.children[0].addEventListener("click", () => {
        document.getElementById("todo-list").appendChild(list);
        list.children[0].value = "完了";
        list.appendChild(deleteBtn);
        clone.parentNode.removeChild(clone);
      });
      document.getElementById("done-list").appendChild(clone);
      list.parentNode.removeChild(list);
    });
    list.children[1].addEventListener("click", () => {
      list.parentNode.removeChild(list);
    });
    document.getElementById("todo-list").appendChild(list);
    item.value = "";
  }
});

const addBtnAttribute = (btn, text) => {
  btn.type = "button";
  btn.value = text;
  btn.style.margin = "0 10px";
};
