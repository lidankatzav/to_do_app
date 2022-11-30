let list: string[] = [];

function get_word(): void {
  const user_input = document.getElementById("new-todo") as HTMLInputElement;
  list.push(user_input.value);
  console.log(list);
  user_input.value = "";
}

function add_to_list(): void {
  const new_temp = document.getElementById("template") as HTMLTemplateElement;
  const childs = new_temp.content.firstElementChild?.firstElementChild
    ?.children as HTMLCollection;
  (childs[1] as HTMLElement).innerHTML = list[list.length - 1];
  document
    .getElementById("todo-list")
    ?.append(new_temp.content.cloneNode(true));
}

document.addEventListener("DOMContentLoaded", () => {
  (document.getElementById("new-todo") as HTMLElement).addEventListener(
    "keyup",
    (e) => {
      if (e.key === "Enter") {
        get_word();
        add_to_list();
      }
    }
  );
});
