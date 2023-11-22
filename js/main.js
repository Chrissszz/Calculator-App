let slider = document.getElementById("mySlider");
let body = document.body;
let topSection = document.getElementById("topSection");
let topNumbers = document.getElementById("topNumbers");
let sliderBackground = document.getElementsByClassName("slider")[0];
let output = document.getElementById("output");
let outputNumber = document.getElementById("outputNumber");
let allButtons = Array.from(document.getElementsByClassName("selectButton"));
let mainButtons = document.getElementById("mainButtons");
let delButton = document.getElementsByClassName("delButton")[0];
let resetButton = document.getElementsByClassName("resetButton")[0];
let equalButton = document.getElementsByClassName("equalButton")[0];
let buttonColor1 = document.getElementsByClassName("buttonColor")[0];
let buttonColor2 = document.getElementsByClassName("buttonColor")[1];
let buttonColor3 = document.getElementsByClassName("buttonColor")[2];
let buttonColor4 = document.getElementsByClassName("buttonColor")[3];
let buttonColor5 = document.getElementsByClassName("buttonColor")[4];
let buttonColor6 = document.getElementsByClassName("buttonColor")[5];
let buttonColor7 = document.getElementsByClassName("buttonColor")[6];
let buttonColor8 = document.getElementsByClassName("buttonColor")[7];
let buttonColor9 = document.getElementsByClassName("buttonColor")[8];
let buttonColor10 = document.getElementsByClassName("buttonColor")[9];
let buttonColor11 = document.getElementsByClassName("buttonColor")[10];
let buttonColor12 = document.getElementsByClassName("buttonColor")[11];
let buttonColor13 = document.getElementsByClassName("buttonColor")[12];
let buttonColor14 = document.getElementsByClassName("buttonColor")[13];
let buttonColor15 = document.getElementsByClassName("buttonColor")[14];

 allButtons.map(allButtons => {
  allButtons.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'RESET':
        outputNumber.innerText = '';
        break;
      case 'DEL':
        if (outputNumber.innerText) {
          outputNumber.innerText = outputNumber.innerText.slice(0, -1);
        }
        break;
      case '=':
        try {
          const result = calculate(outputNumber.innerText);
          outputNumber.innerText = result;
        } catch (error) {
          outputNumber.innerText = 'Error!';
        }
        break;
      default:
        if (e.target.innerText === 'x') {
          outputNumber.innerText += '*';
        } else {
          outputNumber.innerText += e.target.innerText;
        }
    }
  });
});

function calculate(input) {
  const operation = new Function('return ' + input.replace(/x/g, '*'));
  return operation();
}


 slider.addEventListener("input", function() {
  let sliderValue = parseInt(slider.value);
  slider.style.removeProperty("--thumb-color");
  if (sliderValue === 2) {
    slider.classList.remove("blue-thumb");
    body.style.backgroundColor = "hsl(0, 0%, 93%)";
    topSection.style.color = "black";
    topNumbers.style.color = "black";
    sliderBackground.style.backgroundColor = "hsl(0, 0%, 80%)";
    sliderBackground.style.borderColor = "hsl(0, 0%, 80%)";
    output.style.backgroundColor = "hsl(0, 0%, 97%)";
    output.style.color = "black";
    output.style.borderColor = "hsl(0, 0%, 97%)";
    mainButtons.style.backgroundColor = "hsl(0, 0%, 80%)";
    mainButtons.style.borderColor = "hsl(0, 0%, 80%)";
    delButton.style.backgroundColor = "hsl(185, 42%, 37%)";
    resetButton.style.backgroundColor = "hsl(185, 42%, 37%)";
    equalButton.style.backgroundColor = "rgb(230, 122, 35)";
    delButton.style.borderColor = "hsl(185, 42%, 37%)";
    resetButton.style.borderColor = "hsl(185, 42%, 37%)";
    equalButton.style.borderColor = "rgb(230, 122, 35)";
    buttonColor1.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor1.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor1.style.color = "hsl(223, 31%, 20%)";
    buttonColor2.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor2.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor2.style.color = "hsl(223, 31%, 20%)";
    buttonColor3.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor3.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor3.style.color = "hsl(223, 31%, 20%)";
    buttonColor4.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor4.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor4.style.color = "hsl(223, 31%, 20%)";
    buttonColor5.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor5.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor5.style.color = "hsl(223, 31%, 20%)";
    buttonColor6.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor6.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor6.style.color = "hsl(223, 31%, 20%)";
    buttonColor7.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor7.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor7.style.color = "hsl(223, 31%, 20%)";
    buttonColor7.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor8.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor8.style.color = "hsl(223, 31%, 20%)";
    buttonColor8.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor8.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor9.style.color = "hsl(223, 31%, 20%)";
    buttonColor9.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor9.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor9.style.color = "hsl(223, 31%, 20%)";
    buttonColor10.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor10.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor10.style.color = "hsl(223, 31%, 20%)";
    buttonColor11.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor11.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor11.style.color = "hsl(223, 31%, 20%)";
    buttonColor12.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor12.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor12.style.color = "hsl(223, 31%, 20%)";
    buttonColor13.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor13.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor13.style.color = "hsl(223, 31%, 20%)";
    buttonColor14.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor14.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor14.style.color = "hsl(223, 31%, 20%)";
    buttonColor15.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor15.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor15.style.color = "hsl(223, 31%, 20%)";
    buttonColor1.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor2.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor3.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor4.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor5.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor6.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor7.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor8.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor9.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor10.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor11.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor12.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor13.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor14.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor15.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    resetButton.style.boxShadow = "1px 4px hsl(224, 28%, 35%)"
    equalButton.style.boxShadow = "1px 4px hsl(6, 70%, 34%)"
    delButton.style.boxShadow = "1px 4px hsl(224, 28%, 35%)"
  } else if (sliderValue === 3) {
    slider.classList.add("blue-thumb");
    body.style.backgroundColor = "hsl(268, 75%, 9%)";
    topSection.style.color = "hsl(52, 100%, 62%)";
    topNumbers.style.color = "hsl(52, 100%, 62%)";
    sliderBackground.style.backgroundColor = "hsl(0, 0%, 80%)";
    sliderBackground.style.borderColor = "hsl(0, 0%, 80%)";
    output.style.backgroundColor = "hsl(268, 71%, 12%)";
    output.style.color = "hsl(52, 100%, 62%)";
    output.style.borderColor = "hsl(268, 71%, 12%)";
    mainButtons.style.backgroundColor = "hsl(268, 71%, 12%)";
    mainButtons.style.borderColor = "hsl(268, 71%, 12%)";
    delButton.style.backgroundColor = "hsl(281, 89%, 26%)";
    resetButton.style.backgroundColor = "hsl(281, 89%, 26%)";
    resetButton.style.boxShadow = "1px 4px hsl(285, 91%, 52%)"
    equalButton.style.boxShadow = "1px 4px hsl(177, 92%, 70%)"
    delButton.style.boxShadow = "1px 4px hsl(285, 91%, 52%)"
    equalButton.style.backgroundColor = "hsl(176, 100%, 44%)";
    delButton.style.borderColor = "hsl(281, 89%, 26%)";
    resetButton.style.borderColor = "hsl(281, 89%, 26%)";
    equalButton.style.borderColor = "hsl(176, 100%, 44%)";
    sliderBackground.style.backgroundColor = "hsl(268, 71%, 12%)";
    sliderBackground.style.borderColor = "hsl(268, 71%, 12%)";
    buttonColor1.style.backgroundColor = "hsl(268, 47%, 21%)";
    buttonColor1.style.borderColor = "hsl(268, 47%, 21%)";
    buttonColor1.style.color = "hsl(52, 100%, 62%)";
    buttonColor1.style.boxShadow = "1px 4px hsl(290, 70%, 36%)"
    buttonColor2.style.boxShadow = "1px 4px hsl(290, 70%, 36%)"
    buttonColor3.style.boxShadow = "1px 4px hsl(290, 70%, 36%)"
    buttonColor4.style.boxShadow = "1px 4px hsl(290, 70%, 36%)"
    buttonColor5.style.boxShadow = "1px 4px hsl(290, 70%, 36%)"
    buttonColor6.style.boxShadow = "1px 4px hsl(290, 70%, 36%)"
    buttonColor7.style.boxShadow = "1px 4px hsl(290, 70%, 36%)"
    buttonColor8.style.boxShadow = "1px 4px hsl(290, 70%, 36%)"
    buttonColor9.style.boxShadow = "1px 4px hsl(290, 70%, 36%)"
    buttonColor10.style.boxShadow = "1px 4px hsl(290, 70%, 36%)"
    buttonColor11.style.boxShadow = "1px 4px hsl(290, 70%, 36%)"
    buttonColor12.style.boxShadow = "1px 4px hsl(290, 70%, 36%)"
    buttonColor13.style.boxShadow = "1px 4px hsl(290, 70%, 36%)"
    buttonColor14.style.boxShadow = "1px 4px hsl(290, 70%, 36%)"
    buttonColor15.style.boxShadow = "1px 4px hsl(290, 70%, 36%)"
    buttonColor2.style.backgroundColor = "hsl(268, 47%, 21%)";
    buttonColor2.style.borderColor = "hsl(268, 47%, 21%)";
    buttonColor2.style.color = "hsl(52, 100%, 62%)";
    buttonColor3.style.backgroundColor = "hsl(268, 47%, 21%)";
    buttonColor3.style.borderColor = "hsl(268, 47%, 21%)";
    buttonColor3.style.color = "hsl(52, 100%, 62%)";
    buttonColor4.style.backgroundColor = "hsl(268, 47%, 21%)";
    buttonColor4.style.borderColor = "hsl(268, 47%, 21%)";
    buttonColor4.style.color = "hsl(52, 100%, 62%)";
    buttonColor5.style.backgroundColor = "hsl(268, 47%, 21%)";
    buttonColor5.style.borderColor = "hsl(268, 47%, 21%)";
    buttonColor5.style.color = "hsl(52, 100%, 62%)";
    buttonColor6.style.backgroundColor = "hsl(268, 47%, 21%)";
    buttonColor6.style.borderColor = "hsl(268, 47%, 21%)";
    buttonColor6.style.color = "hsl(52, 100%, 62%)";
    buttonColor7.style.backgroundColor = "hsl(268, 47%, 21%)";
    buttonColor7.style.borderColor = "hsl(268, 47%, 21%)";
    buttonColor7.style.color = "hsl(52, 100%, 62%)";
    buttonColor8.style.backgroundColor = "hsl(268, 47%, 21%)";
    buttonColor8.style.borderColor = "hsl(268, 47%, 21%)";
    buttonColor8.style.color = "hsl(52, 100%, 62%)";
    buttonColor9.style.backgroundColor = "hsl(268, 47%, 21%)";
    buttonColor9.style.borderColor = "hsl(268, 47%, 21%)";
    buttonColor9.style.color = "hsl(52, 100%, 62%)";
    buttonColor10.style.backgroundColor = "hsl(268, 47%, 21%)";
    buttonColor10.style.borderColor = "hsl(268, 47%, 21%)";
    buttonColor10.style.color = "hsl(52, 100%, 62%)";
    buttonColor11.style.backgroundColor = "hsl(268, 47%, 21%)";
    buttonColor11.style.borderColor = "hsl(268, 47%, 21%)";
    buttonColor11.style.color = "hsl(52, 100%, 62%)";
    buttonColor12.style.backgroundColor = "hsl(268, 47%, 21%)";
    buttonColor12.style.borderColor = "hsl(268, 47%, 21%)";
    buttonColor12.style.color = "hsl(52, 100%, 62%)";
    buttonColor13.style.backgroundColor = "hsl(268, 47%, 21%)";
    buttonColor13.style.borderColor = "hsl(268, 47%, 21%)";
    buttonColor13.style.color = "hsl(52, 100%, 62%)";
    buttonColor14.style.backgroundColor = "hsl(268, 47%, 21%)";
    buttonColor14.style.borderColor = "hsl(268, 47%, 21%)";
    buttonColor14.style.color = "hsl(52, 100%, 62%)";
    buttonColor15.style.backgroundColor = "hsl(268, 47%, 21%)";
    buttonColor15.style.borderColor = "hsl(268, 47%, 21%)";
    buttonColor15.style.color = "hsl(52, 100%, 62%)";
    slider.style.setProperty("--thumb-color", "blue");
  } else {
    // Reset to the default styles when sliderValue is not 2 or 3
    body.style.backgroundColor = "hsl(222, 26%, 31%)";
    topSection.style.color = "white";
    topNumbers.style.color = "white";
    sliderBackground.style.backgroundColor = "hsl(223, 31%, 20%)";
    sliderBackground.style.borderColor = "hsl(223, 31%, 20%)";
    output.style.backgroundColor = "hsl(224, 36%, 15%)";
    output.style.color = "white";
    output.style.borderColor = "hsl(224, 36%, 15%)";
    mainButtons.style.backgroundColor = "hsl(223, 31%, 20%)";
    mainButtons.style.borderColor = "hsl(223, 31%, 20%)";
    delButton.style.backgroundColor = "hsl(225, 21%, 49%)";
    resetButton.style.backgroundColor = "hsl(225, 21%, 49%)";
    equalButton.style.backgroundColor = "hsl(6, 63%, 50%)";
    delButton.style.borderColor = "hsl(225, 21%, 49%)";
    resetButton.style.borderColor = "hsl(225, 21%, 49%)";
    equalButton.style.borderColor = "hsl(6, 63%, 50%)";
    buttonColor1.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor1.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor1.style.color = "hsl(223, 31%, 20%)";
    buttonColor2.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor2.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor2.style.color = "hsl(223, 31%, 20%)";
    buttonColor3.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor3.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor3.style.color = "hsl(223, 31%, 20%)";
    buttonColor4.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor4.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor4.style.color = "hsl(223, 31%, 20%)";
    buttonColor5.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor5.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor5.style.color = "hsl(223, 31%, 20%)";
    buttonColor6.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor6.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor6.style.color = "hsl(223, 31%, 20%)";
    buttonColor7.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor7.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor7.style.color = "hsl(223, 31%, 20%)";
    buttonColor7.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor8.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor8.style.color = "hsl(223, 31%, 20%)";
    buttonColor8.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor8.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor9.style.color = "hsl(223, 31%, 20%)";
    buttonColor9.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor9.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor9.style.color = "hsl(223, 31%, 20%)";
    buttonColor10.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor10.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor10.style.color = "hsl(223, 31%, 20%)";
    buttonColor11.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor11.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor11.style.color = "hsl(223, 31%, 20%)";
    buttonColor12.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor12.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor12.style.color = "hsl(223, 31%, 20%)";
    buttonColor13.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor13.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor13.style.color = "hsl(223, 31%, 20%)";
    buttonColor14.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor14.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor14.style.color = "hsl(223, 31%, 20%)";
    buttonColor15.style.backgroundColor = "hsl(30, 25%, 89%)";
    buttonColor15.style.borderColor = "hsl(30, 25%, 89%)";
    buttonColor15.style.color = "hsl(223, 31%, 20%)";
    buttonColor1.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor2.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor3.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor4.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor5.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor6.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor7.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor8.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor9.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor10.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor11.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor12.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor13.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor14.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    buttonColor15.style.boxShadow = "1px 4px hsl(28, 16%, 65%)"
    resetButton.style.boxShadow = "1px 4px hsl(224, 28%, 35%)"
    equalButton.style.boxShadow = "1px 4px hsl(6, 70%, 34%)"
    delButton.style.boxShadow = "1px 4px hsl(224, 28%, 35%)"
  }
})
