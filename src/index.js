import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = " ";

  // div生成 (js上でhtmlのDOMを生成)
  const div = document.createElement("div");
  // <div></div>が生成され、classも付与される
  div.className = "list-row";

  // タグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // 完了ボタンタグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  // 完了ボタンにイベント追加
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // 削除ボタンタグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 削除ボタンにイベント追加
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });

  // divタグの小要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};
// // ボタンが動作しているか始めに確認
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
