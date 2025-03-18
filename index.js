const inputNum = document.querySelector('.input-line');
const inputBut = document.querySelector('.input-btn');
const waitingImg = document.querySelector('.wait-image');
const receipt = document.querySelector('.receipt');

const ul = document.querySelector('.number-receipt');


inputBut.addEventListener('click', function (event) {

   const num = inputNum.value; // Наше число туть
   const ournum = readNumberForPicture(num);
   let newlist = [];
   
   waitingImg.classList.add('d-none'); 
   receipt.classList.remove('d-none');

   ul.innerHTML = '';

   for (let i = 0; i < 6; i++) {

      const li = document.createElement('li');
      li.innerHTML = ournum[i].join('ㅤ');
      ul.appendChild(li);
   }
});


function readNumberForPicture(number) {
   const CoolNums = ['699996', '359111', '69248F', '692296', '99F111', 'F8E196', '78E996', 'F12488', '696996', '696116'];
   let CheckNumber = [];

   const CountOfNums = number.toString().length;
   const NumInList = number.toString().split('');

   let ConsoleLines = [];
   const retrnNums = [];
   let Symbls = '';

   for (let i = 0; i < 6; i++) {
      for (let j = 0; j < CountOfNums; j++) {
         CheckNumber = CoolNums[NumInList[j]].split('');
         Symbls = parseInt(CheckNumber[i], 16).toString(2);

         Symbls = Symbls.padStart(4, 0).split('').map(item => item === '1' ? '#' : '&nbsp').join('');
         ConsoleLines.push(Symbls);
      }

      retrnNums.push(ConsoleLines);
      ConsoleLines = [];
   }

   return retrnNums;

}

