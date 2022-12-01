var list = [];
var counter = 0;
var status_lst = [];
function get_word() {
    var user_input = document.getElementById("new-todo");
    list.push(user_input.value);
    user_input.value = "";
}
function add_to_list(idx, remove) {
    var _a, _b, _c, _d, _e;
    var new_temp = document.getElementById("template");
    var childs = (_b = (_a = new_temp.content.firstElementChild) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.children;
    childs[1].innerHTML = list[idx];
    (_c = document
        .getElementById("todo-list")) === null || _c === void 0 ? void 0 : _c.append(new_temp.content.cloneNode(true));
    if (!remove) {
        counter += 1;
        update_counter();
    }
    var children = (_d = document.getElementById("todo-list")) === null || _d === void 0 ? void 0 : _d.children;
    (_e = children[children.length - 1].firstElementChild) === null || _e === void 0 ? void 0 : _e.children[2].addEventListener("click", function () {
        list.splice(idx, 1);
        document.getElementById("todo-list").innerHTML = "";
        for (var i = 0; i < list.length; i++) {
            add_to_list(i, true);
        }
        counter -= 1;
        update_counter();
    });
}
function clear_list() {
    var e = document.getElementById("todo-list");
    e.innerHTML = "";
    list = [];
    counter = 0;
    update_counter();
}
function update_counter() {
    document.getElementById("counter").innerHTML =
        String(counter) + " items left";
}
document.addEventListener("DOMContentLoaded", function () {
    var _a;
    document.getElementById("new-todo").addEventListener("keyup", function (e) {
        if (e.key === "Enter") {
            get_word();
            add_to_list(list.length - 1, false);
        }
    });
    (_a = document.getElementById("clear")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        clear_list();
    });
    document.getElementById("");
});
