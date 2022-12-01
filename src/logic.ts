let list: string[] = [];
let counter: number = 0;
let status_lst: boolean[] = [];

function get_word(): void {
  const user_input = document.getElementById("new-todo") as HTMLInputElement;
  list.push(user_input.value);
  user_input.value = "";
}

function add_to_list(idx: number, remove: boolean): void {
  const new_temp = document.getElementById("template") as HTMLTemplateElement;
  const childs = new_temp.content.firstElementChild?.firstElementChild
    ?.children as HTMLCollection;
  (childs[1] as HTMLElement).innerHTML = list[idx];
  document
    .getElementById("todo-list")
    ?.append(new_temp.content.cloneNode(true));
  if (!remove) {
    counter += 1;
    update_counter();
  }
  const children = document.getElementById("todo-list")
    ?.children as HTMLCollection;
  children[children.length - 1].firstElementChild?.children[2].addEventListener(
    "click",
    () => {
      list.splice(idx, 1);
      (document.getElementById("todo-list") as HTMLElement).innerHTML = "";
      for (let i = 0; i < list.length; i++) {
        add_to_list(i, true);
      }
      counter -= 1;
      update_counter();
    }
  );
}

function clear_list() {
  const e = document.getElementById("todo-list") as HTMLElement;
  e.innerHTML = "";
  list = [];
  counter = 0;
  update_counter();
}

function update_counter() {
  (document.getElementById("counter") as HTMLElement).innerHTML =
    String(counter) + " items left";
}

document.addEventListener("DOMContentLoaded", () => {
  (document.getElementById("new-todo") as HTMLElement).addEventListener(
    "keyup",
    (e) => {
      if (e.key === "Enter") {
        get_word();
        add_to_list(list.length - 1, false);
      }
    }
  );
  document.getElementById("clear")?.addEventListener("click", () => {
    clear_list();
  });
  document.getElementById("");
});
