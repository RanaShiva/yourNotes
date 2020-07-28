const heading = document.getElementById('heading');
const paragraph = document.getElementById('paragraph');
const list = document.getElementById('list');
const done = document.getElementById('done');
const text = document.getElementById('text');
const notes = document.getElementById('notes');
const finish = document.getElementById('finish');

heading.onclick = function() {
    //color management
    heading.style.backgroundColor = "lightgreen";
    paragraph.style.backgroundColor = "inherit";
    list.style.backgroundColor = "inherit";
}

paragraph.onclick = function() {
    //color management
    paragraph.style.backgroundColor = "lightgreen";
    heading.style.backgroundColor = "inherit";
    list.style.backgroundColor = "inherit";
}

list.onclick = function() {
    //color management
    list.style.backgroundColor = "lightgreen";
    heading.style.backgroundColor = "inherit";
    paragraph.style.backgroundColor = "inherit";
}

done.onclick = function() {
    let string = text.value;
    if(heading.style.backgroundColor == 'lightgreen')
    {
        const headingItem = document.createElement('h2');
        headingItem.textContent = string;
        notes.appendChild(headingItem);
    }

    if(paragraph.style.backgroundColor == 'lightgreen')
    {
        const paraItem = document.createElement('p');
        paraItem.textContent = string;
        notes.appendChild(paraItem);
    }
    if(list.style.backgroundColor == 'lightgreen')
    {
        const listItem = document.createElement('li');
        listItem.textContent = string;
        notes.appendChild(listItem);
    }
    notes.style.display = "block";
}

finish.onclick = function() {
    document.getElementsByClassName('toolbar')[0].style.display = "none";
    document.getElementsByClassName('content-area')[0].style.display = "none";
}