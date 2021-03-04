let personObj = [];
for (let i = 0; i < localStorage.length; i++) {
    let personKey = 'person ' + i + ':';
    personObj.push(JSON.parse(localStorage.getItem(personKey)));
}

//add data to the table
let addDataToTable = () => {
    let table = document.body.querySelector('.table');
    let row = table.querySelector('.row');

    for (let i = 0; i < personObj.length; i++) {
        let newRow = row.cloneNode(true);
        let colObj = personObj[i];
        let index = 1;

        if (personObj.length > 0 ) {
            if (table.children[i + 1] && personObj[i]) continue;
        }

        for (let col in colObj) {
            newRow.children[index].innerHTML = colObj[col];
            index++;
        }
        table.append(newRow);
    }
}
addDataToTable();


//clean data from table
let cleanAllDataFromTable = () => {
    let table = document.body.querySelector('.table');
    for (let i = 1; i <= personObj.length; i++) {
        table.children[i].remove();
    }
}


//save to localStorage
// localStorage.clear();
for (let i = 0; i < personObj.length; i++ ) {
    let personObjJSON = personObj[i];
    let personKey = 'person ' + i + ':';
    localStorage.setItem(personKey, JSON.stringify(personObjJSON));
}


//save data from input


    let inputFullName = document.body.querySelector('[name="name"]');
    let inputEmail = document.body.querySelector('[name="email"]');
    let inputAge = document.body.querySelector('[name="age"]');
    let save = () => {
        if (!inputFullName.value || !inputEmail.value || !inputAge.value) {
            return
        }
        personObj.push({
            "full_name": inputFullName.value, "email": inputEmail.value, "age": inputAge.value
        });
        inputFullName.value = null;
        inputEmail.value = null;
        inputAge.value = null;
        localStorage.clear();
        for (let i = 0; i < personObj.length; i++ ) {
            let personObjJSON = personObj[i];
            let personKey = 'person ' + i + ':';
            localStorage.setItem(personKey, JSON.stringify(personObjJSON));
        }
        addDataToTable();
    }



//cleanStorage onClick
let cleanAll = () => {
    localStorage.clear();
    cleanAllDataFromTable();
}

//
let deleteRow = () => {
    let table = document.body.querySelector('.table');
    // console.log(table.children[1]);
    let checkBox = table.querySelectorAll('[type="checkbox"]');
    for (let i = 0; i < table.children.length; i++) {
        if (checkBox[i + 1] && checkBox[i + 1].checked === true) {
            table.children[i + 1].remove();
            personObj =  personObj.splice(i, i);
            let personKey = 'person ' + i + ':';
            localStorage.removeItem(personKey);
            console.log(personObj);
        }

    }
}
// deleteRow();


