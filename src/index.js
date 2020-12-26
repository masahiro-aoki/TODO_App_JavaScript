import "./styles.css";

document.getElementById("add-btn").addEventListener("click", () => {
  const item = document.getElementById("add-item");
  if (item.value) {
    const list = document.createElement("li");
    const text = document.createTextNode(item.value);
    list.appendChild(text);

    const doneBtn = document.createElement("input");
    addBtnAttribute(doneBtn, "完了");
    const deleteBtn = document.createElement("input");
    addBtnAttribute(deleteBtn, "削除");
    const restoreBtn = document.createElement("input");
    addBtnAttribute(restoreBtn, "戻す");

    list.appendChild(doneBtn);
    list.appendChild(deleteBtn);
    document.getElementById("todo-list").appendChild(list);
    item.value = "";

    doneBtn.addEventListener("click", () => {
      document.getElementById("done-list").appendChild(list);
      list.removeChild(doneBtn);
      list.removeChild(deleteBtn);
      list.appendChild(restoreBtn);
    });

    deleteBtn.addEventListener("click", () => {
      list.parentNode.removeChild(list);
    });

    restoreBtn.addEventListener("click", () => {
      document.getElementById("todo-list").appendChild(list);
      list.removeChild(restoreBtn);
      list.appendChild(doneBtn);
      list.appendChild(deleteBtn);
    });
  }
});

const addBtnAttribute = (btn, text) => {
  btn.type = "button";
  btn.value = text;
  btn.style.margin = "0 10px";
};
