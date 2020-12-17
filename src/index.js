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

  // divタグの小要素に各要素を設定
  div.appendChild(li);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};
// // ボタンが動作しているか始めに確認
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
