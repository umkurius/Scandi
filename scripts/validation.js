var inputs = document.querySelectorAll('input[data-rule]');

for (var input of inputs) {
    input.addEventListener('blur', function(){
        var rule = this.dataset.rule;
        var value = this.value;
        var check;

        switch (rule) {
            case 'text':
                check = /^[a-zA-Z]/.test(value);
            break;
            case 'textNumber':
                check = /^[a-zA-Z0-9]/.test(value);
            break;
            case 'zip':
                check = /^\d{6}$/.test(value);
            break;
            case 'date':
                check = /^\d{4}$/.test(value);
            break;
            case 'cvv':
                check = /^\d{3}$/.test(value);
            break;
            case 'credit':
                check = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(value);
            break;
            case 'email':
                check = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(value);
            break;
            case 'phone':
                check = /^((8|\+374|\+994|\+995|\+375|\+7|\+380|\+38|\+996|\+998|\+993)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$/.test(value);
            break;
        }
        if (check) {
            this.classList.add('valid');
            this.classList.remove('invalid');
        } else {
            this.classList.add('invalid')
            this.classList.remove('valid')
        }
    });
}