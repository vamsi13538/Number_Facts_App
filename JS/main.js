window.sr = ScrollReveal();
        sr.reveal('#section1', {
            duration: 2000,
            origin: 'bottom',
            delay: 2000,
            disatnce: '100px'
        });
        sr.reveal('#namePlate', {
            duration: 2000,
            origin: 'top',
            disatnce: '300px'
        });
        
        const fact = document.getElementById('fact');
        const factText = document.getElementById('factText');
        const numberInput = document.getElementById('numberInput');

        const yearfact = document.getElementById('yearfact');
        const yearfactText = document.getElementById('yearfactText');
        const yearInput = document.getElementById('yearInput');

        numberInput.addEventListener('input', getFactAjax);
        yearInput.addEventListener('input', getYearFactAjax);

        function getYearFactAjax(){
            let year = yearInput.value;
            
            let xar = new XMLHttpRequest();
            xar.open('GET','http://numbersapi.com/'+year+'/year');
            xar.onload = function(){
                if(this.status == 200 && year != ''){
                    yearfact.style.display = 'block';
                    yearfactText.innerHTML = `<i>${this.responseText}</i>`;
                }
                else
                {
                    console.log('Invalid Year');
                }
            }

            xar.send();
        }

        function getFactAjax(){
            let number = numberInput.value;

            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'http://numbersapi.com/'+number);
            // 'http://numbersapi.com/'+number+'/year'

            xhr.onload = function(){
                if(this.status == 200 && number != ''){
                    fact.style.display = 'block';
                    factText.innerHTML = `<i>${this.responseText}</i>`;
                }
                else{
                    console.log("Invalid Number");
                }
            }
            
            xhr.send();
        }
