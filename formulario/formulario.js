var input = document.getElementById('atestado');
var fileName = document.getElementById('file-name');

input.addEventListener('change', function () {
    fileName.textContent = this.value.split('\\').at(-1);
});

function isNumber(char) {
    if (char === ' ') {
        return false;
    }
    return !isNaN(char);
}

function TelefoneMask(inputId) {
    var input = document.getElementById(inputId);
    var list_values = input.value.split("");

    if (!isNumber(list_values.at(-1))) {
        list_values.pop()
    }
    if (list_values.length > 2 && list_values[0] != "(") {
        list_values.splice(0, 0, "(");
    }
    if (list_values.length > 3 && list_values[3] != ")") {
        list_values.splice(3, 0, ") ");
    }
    if (list_values.length > 11 && list_values[10] != "-") {
        list_values.splice(10, 0, "-");
    }
    if (list_values.length > 15) {
        list_values.pop()
    }
    input.value = list_values.join('');
}
