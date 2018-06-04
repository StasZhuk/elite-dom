document.addEventListener("DOMContentLoaded", function () {
    let allForms = document.querySelectorAll('.form');

    for (let i = 0; i < allForms.length; i++) {
        let btn = allForms[i].querySelector('.form-submit');

        btn.addEventListener('click', function (e) {
            e.preventDefault();
            
            var tag = allForms[i].getAttribute('data-tag');
            var flag = 0;

            var nameEl = allForms[i].querySelector('[name="name"]');
            var phoneEl = allForms[i].querySelector('[name="phone"]');
            var emailEl = allForms[i].querySelector('[name="emaill"]');
            var messageEl = allForms[i].querySelector('[name="message"]');

            var name = nameEl.value;
            var phone = phoneEl.value;
            var email;
            var message;

            if (!emailEl) {
                email = null;
                ++flag;
            } else {
                email = emailEl.value;
                if (!validateEmail(email)) {
                    emailEl.style.border = '1px solid red';
                } else {
                    emailEl.style.border = '1px solid green';
                    ++flag;
                }
            }
            if (!messageEl) {
                message = null;
                ++flag;
            } else {
                message = messageEl.value;
                if (message == '') {
                    messageEl.style.border = '1px solid red';
                } else {
                    messageEl.style.border = '1px solid green';
                    ++flag;
                }
            }

            if (name == '') {
                nameEl.style.border = '1px solid red';
            } else {
                nameEl.style.border = '1px solid green';
                ++flag;
            }

            if (!validatePhone(phone)) {
                phoneEl.style.border = '1px solid red';
            } else {
                phoneEl.style.border = '1px solid green';
                ++flag;
            }

            if (flag == 4) {
                console.log('отправка');

                R7K12.crm({
                    type: tag, //òèï çàÿâêè
                    title: "Заявка с сайта", //Çàãîëîâîê çàÿâêà
                    comment: "townsbuilder.com", //êîììåíòàðèé
                    name: name, //èìÿ êîíòàêòà
                    // email: email, //òåëåôîí
                    // message: message, //òåëåôîí
                    phone: phone, //òåëåôîí
                    tag: 'новый сайт',
                    fields: {
                        lead: {
                            '537747': location.href,
                            '448347': 'UA-49298821-15',
                            '555033': 'Яросавль',
                            '520569': email,
                            '469197': phone,
                            '469195': message
                        }
                    }
                });

                setTimeout(function () {
                    window.location.href = "http://townsbuilders.com/test.php"
                });
            }
        }, false);
    }

    function validateEmail(email) {
        var regMail = /\S+@\S+\.\S+/;
        return regMail.test(email);
    }

    function validatePhone(phone) {
        var regPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        return regPhone.test(phone);
    }
});