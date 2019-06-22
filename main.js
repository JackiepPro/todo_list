//создаем новый элемент
function newElement() {
    var li = document.createElement('li');
    //создаем переменную для значения инпут
    var inputValue = document.getElementById('main__input').value;
    //создаем переменную для строки с данными, которые будут помещены в текстовый узел.
    var inputText = document.createTextNode(inputValue);
    //к li присоединяем переменную текстового узла
    li.appendChild(inputText);

    if(inputValue == '') {
        alert('Вы забыли написать текст');
    } else {
        list.appendChild(li);
    }

    document.getElementById('main__input').value = '';
    var span = document.createElement('span');
    var text = document.createTextNode('X');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);
    toLocal();
}

var list = document.getElementById('main__ul');

list.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        toLocal();
    } else if (ev.target.tagName === 'SPAN') {
        var div = ev.target.parentNode;
        div.remove();
        toLocal();
    }
}, false);

// при обновлении вкладки содержимое хранилища выводим
var listTodos;
function toLocal() {
    listTodos = list.innerHTML
    localStorage.setItem('listTodos', listTodos);
}

if(localStorage.getItem('listTodos')) {
    list.innerHTML = localStorage.getItem('listTodos');
}
