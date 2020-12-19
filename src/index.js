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
    // 押された完了ボタンの親タグ(div)を取得し、削除
    deleteFromIncompleteList(completeButton.parentNode);
    // 完了ボタンの親要素divを取得
    const addTarget = completeButton.parentNode;
    // TODOの内容を取得
    const text = addTarget.firstElementChild.innerText;
    // addTargetの小要素を削除
    addTarget.textContent = null;
    // タグ生成
    const li = document.createElement("li");
    li.innerText = text;
    // 戻るボタンタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    // divタグの子要素に各要素を追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタンタグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  // 削除ボタンにイベント追加
  deleteButton.addEventListener("click", () => {
    // （削除）　削除ボタンの親タグ(div)を取得
    // const deleteTarget = deleteButton.parentNode;
    // // 削除する
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
    // 関数化
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの小要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// // ボタンが動作しているか始めに確認
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
