function sum() {
    const a = parseFloat(document.getElementById("inputA").value);
    const b = parseFloat(document.getElementById("inputB").value);
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Vui lòng nhập số hợp lệ!";
    } else {
        document.getElementById("result").innerText = `Tổng bằng: ${a + b}`;
    }
}

function subtract() {
    const a = parseFloat(document.getElementById("inputA").value);
    const b = parseFloat(document.getElementById("inputB").value);
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Vui lòng nhập số hợp lệ!";
    } else {
        document.getElementById("result").innerText = `Hiệu bằng: ${a - b}`;
    }
}

function multiply() {
    const a = parseFloat(document.getElementById("inputA").value);
    const b = parseFloat(document.getElementById("inputB").value);
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Vui lòng nhập số hợp lệ!";
    } else {
        document.getElementById("result").innerText = `Tích bằng: ${a * b}`;
    }
}

function divide() {
    const a = parseFloat(document.getElementById("inputA").value);
    const b = parseFloat(document.getElementById("inputB").value);
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Vui lòng nhập số hợp lệ!";
    } else if (b === 0) {
        document.getElementById("result").innerText = "Không thể chia cho 0! Vui lòng nhập lại!";
    } else {
        document.getElementById("result").innerText = `Thương bằng: ${a / b}`;
    }
}

function reset() {
    document.getElementById("inputA").value = "";
    document.getElementById("inputB").value = "";
    document.getElementById("result").innerText = "";
}