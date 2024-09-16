describe('Покупка аватара', function () {

    it('e2e путь покупки аватара тренеру покемонов', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Ввожу зарегистрированную почту
         cy.get('#password').type('USER_PASSWORD'); // Ввожу верный пароль
         cy.get('.auth__button').click(); // Тык
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); // Открываю страницу тренера
         cy.get('[href="/shop"]').click({ force: true }); // Открываю магазин аватаров
         cy.get('.pokemon__title').contains('Магазин'); // Проверяем, открылся ли магазин
         cy.get('.available > .shop__button').first().click({ force: true }); // Нажимаем купить только те аватары, которые в доступности
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5555555555555599'); // Вводим номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1224'); // Указываем срок действия карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Указываем CVV
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('IVANOV IVAN'); // Вводим имя владельца карты
         cy.get('.pay-btn').click(); // Тык
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__font-for-success').should('be.visible').contains('Покупка прошла успешно');
     })
 }) 