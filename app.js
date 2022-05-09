const btn = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector(".list")
const my_form = document.querySelector('form');


btn.addEventListener('click', function () {
    let content = input.value;

    let new_note = `
    <div class="note">
        <p class="the_note">${content}</p>
    </div>
    `
    list.insertAdjacentHTML("beforeend", new_note)

    input.value = "";
    input.focus();
})

my_form.addEventListener('submit', function (e) {
    e.preventDefault();
    let content = input.value;

    let paragraph = document.createElement("p");
    paragraph.innerText = content;
    paragraph.classList.add("the_note");
    list.appendChild(paragraph);

    input.value = "";
    input.focus();

    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
    })

    paragraph.addEventListener('dblclick', function () {
        list.removeChild(paragraph);
    })

})

