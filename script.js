

var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["rollno"] = document.getElementById("rollno").value;
    formData["year"] = document.getElementById("year").value;
    formData["dept"] = document.getElementById("dept").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.rollno;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.year;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.dept;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("rollno").value = "";
    document.getElementById("year").value = "";
    document.getElementById("dept").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("rollno").value = selectedRow.cells[1].innerHTML;
    document.getElementById("year").value = selectedRow.cells[2].innerHTML;
    document.getElementById("dept").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.rollno;
    selectedRow.cells[2].innerHTML = formData.year;
    selectedRow.cells[3].innerHTML = formData.dept;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        var row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    var isValid;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }

    return isValid;
}
