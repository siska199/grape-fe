"use strict";
exports.__esModule = true;
exports.converToPluralClass = exports.validationForm = exports.validationInput = exports.generateURLImage = exports.convertToFieldName = exports.captitalizeFirstChar = void 0;
var captitalizeFirstChar = function (words) {
    return words.toLowerCase().split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
};
exports.captitalizeFirstChar = captitalizeFirstChar;
var convertToFieldName = function (sentence) {
    return sentence.toLowerCase().split(" ").map(function (word, i) {
        return i == 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1);
    }).join("");
};
exports.convertToFieldName = convertToFieldName;
var generateURLImage = function (file, callback) {
    var url = "";
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
        url = e.target ? e.target.result : "";
        callback(url);
    };
};
exports.generateURLImage = generateURLImage;
exports.validationInput = {
    text: {
        pattern: ""
    }
};
var validationForm = function (dataForm) {
    console.log(dataForm);
    var formClass = dataForm.nameClass;
    var elementsInputEmpty = document.querySelectorAll(".".concat(formClass, " input[value=''].input-resume, .").concat(formClass, " input[value='+62'][type='tel'], .").concat(formClass, " input[value=''][type='tel'], .").concat(formClass, " input[fileexist='false']"));
    console.log("element file", document.querySelectorAll(".".concat(formClass, " input[fileexist='false']")));
    var elementsTextArea = document.querySelectorAll(".".concat(formClass, " textarea"));
    var elementsLi = document.querySelectorAll(".".concat(formClass, " ul.list-data li"));
    var isInputsAllow = true;
    var isTextAreaAllow = true;
    var isLisAlllow = true;
    if (dataForm.input)
        isInputsAllow = elementsInputEmpty.length == 0 ? true : false;
    if (dataForm.textarea)
        isTextAreaAllow = Array.from(elementsTextArea).filter(function (elm) { return elm.value == ''; }).length == 0 ? true : false;
    if (dataForm.listData)
        isLisAlllow = elementsLi.length > 0 ? true : false;
    console.log("input: ", isInputsAllow);
    console.log("textare:", isTextAreaAllow);
    console.log("list data: ", isLisAlllow);
    var isValid = (isInputsAllow && isTextAreaAllow && isLisAlllow) ? true : false;
    console.log("is valid: ", isValid);
    return isValid;
};
exports.validationForm = validationForm;
var converToPluralClass = function (className) {
    var result = className.charAt(className.length - 1) == "y" ? "".concat(className.slice(0, className.length - 1), "ies") : "".concat(className, "s");
    return result;
};
exports.converToPluralClass = converToPluralClass;
console.log((0, exports.converToPluralClass)("activity"));
