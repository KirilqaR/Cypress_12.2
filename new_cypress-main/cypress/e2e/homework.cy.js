describe('Проверка авторизации', function () {

   beforeEach('Начало теста', function () {
         cy.visit('/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Есть ли кнопка восстановления пароля
           });

   afterEach('Конец теста', function () {
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // А крест то есть? Должен быть
           })

   it('Верный пароль и верный логин', function () {
    cy.get('#mail').type('german@dolnikov.ru'); // Ввёл эмейл, который Герман дал
    cy.get('#pass').type('iLoveqastudio1'); // Ввёл пароль, который Герман дал
    cy.get('#loginButton').click(); // Тык
    cy.get('#messageHeader').contains('Авторизация прошла успешно') // Проверяем наличие надписи
    })

   it('Восстановить пароль', function () {
    cy.get('#forgotEmailButton').click(); // Нажал на кнопку "Восстановить пароль"
    cy.get('#mailForgot').type('kirill@qa.studio'); // Ввёл эмейл
    cy.get('#restoreEmailButton').click(); // Нажал кнопку "Отправить код"
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail') // Проверяем наличие надписи
    })

   it('Неверный пароль и верный логин', function () {
    cy.get('#mail').type('german@dolnikov.ru'); // Ввёл эмейл, который Герман дал
    cy.get('#pass').type('iAdmireQAstudio'); // Ввёл пароль, который сам придумал
    cy.get('#loginButton').click(); // Тык
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка корректной надписи
    })

   it('Верный пароль и неверный логин', function () {
    cy.get('#mail').type('kirill@rybnikov.ru'); // Ввёл эмейл, который сам придумал
    cy.get('#pass').type('iLoveqastudio1'); // Ввёл пароль, который Герман дал
    cy.get('#loginButton').click(); // Тык
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка корректной надписи
    })

   it('Почта без @', function () {
    cy.get('#mail').type('germandolnikov.ru'); // Ввёл эмейл, который Герман дал без @
    cy.get('#pass').type('iLoveqastudio1'); // Ввёл пароль, который Герман дал
    cy.get('#loginButton').click(); // Тык
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации') // Проверяем наличие надписи
    })
      
   it('Проверка регистра', function () {
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввёл эмейл, который Герман дал
    cy.get('#pass').type('iLoveqastudio1'); // Ввёл пароль, который Герман дал
    cy.get('#loginButton').click(); // Тык
    cy.get('#messageHeader').contains('Авторизация прошла успешно') // Проверяем наличие надписи
    })
})


// npx cypress run --spec cypress/e2e/homework.cy.js --browser chrome
