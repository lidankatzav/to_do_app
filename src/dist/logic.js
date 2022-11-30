var list = [];
function get_word() {
    var user_input = document.getElementById("new-todo");
    list.push(user_input.value);
    console.log(list);
    user_input.value = "";
}
function add_to_list() {
    var _a, _b, _c;
    var new_temp = document.getElementById("template");
    var childs = (_b = (_a = new_temp.content.firstElementChild) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.children;
    childs[1].innerHTML = list[list.length - 1];
    (_c = document
        .getElementById("todo-list")) === null || _c === void 0 ? void 0 : _c.append(new_temp.content.cloneNode(true));
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("new-todo").addEventListener("keyup", function (e) {
        if (e.key === "Enter") {
            get_word();
            add_to_list();
        }
    });
});
