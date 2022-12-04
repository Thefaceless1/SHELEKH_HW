function changeText () {
    let h1Text = document.querySelector('.title');
    let tableDescr = document.querySelector('.description');
    const radioArr = document.querySelectorAll('input[type=radio]');
    radioArr.forEach(value=> value.onclick = () =>[h1Text.textContent,tableDescr.textContent] = [tableDescr.textContent,h1Text.textContent]);
}
changeText();

