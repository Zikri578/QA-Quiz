// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//  ================================================================= Register =================================================================  \\
Cypress.Commands.add('radionButton', () => {
    cy.get('input#gender-male');
})

Cypress.Commands.add('getElementByFirstName', () => {
    cy.get('input#FirstName');
})

Cypress.Commands.add('getElementByLastName', () => {
    cy.get('input#LastName');
})

Cypress.Commands.add('getElementByEmail', () => {
    cy.get('input#Email');
})

Cypress.Commands.add('getElementByPassword', () => {
    cy.get('input#Password');
})

Cypress.Commands.add('getElementByConfirmPassword', () => {
    cy.get('input#ConfirmPassword');
})

Cypress.Commands.add('buttonRegister', () => {
    cy.get('input#register-button');
})

Cypress.Commands.add('buttonContinue', () => {
    cy.get('input[type = "button"].button - 1.register -continue-button');
})

// menampilkan pesan sukses
Cypress.Commands.add('messageSuccess', () => {
    cy.get('h1').should('contain.text', 'Register');
    cy.get('.result').should('contain.text', 'Your registration completed');
    cy.get('input[value="Continue"]').click();
})

// menampilkan pesan error
Cypress.Commands.add('messageErrorFirstName', () => {
    cy.get('[for="FirstName"]').should('contain.text', 'First name is required');
})

Cypress.Commands.add('messageErrorLastName', () => {
    cy.get('[for="LastName"]').should('contain.text', 'Last name is required');
})

Cypress.Commands.add('messageErrorEmail', () => {
    cy.get('span.field-validation-error[data-valmsg-for="Email"]').should('contain.text', 'Email is required.');
})

Cypress.Commands.add('messageErrorPassword', () => {
    cy.get('span.field-validation-error[data-valmsg-for="Password"]').should('contain.text', 'The password should have at least 6 characters.');
})

Cypress.Commands.add('messageErrorConfirmPassword', () => {
    cy.get('span.field-validation-error[data-valmsg-for="ConfirmPassword"]').should('contain.text', 'The password and confirmation password do not match.');;
})

Cypress.Commands.add('messageErrorInvalidEmail', () => {
    cy.get('span.field-validation-error[data-valmsg-for="Email"]').find('span[for="Email"]').should('contain.text', 'Wrong email');
})

Cypress.Commands.add('messageErrorInvalidConfirmPassword', () => {
    cy.get('span.field-validation-error[data-valmsg-for="Password"]').should('contain.text', 'The password and confirmation password do not match.');
})

// Cypress.Commands.add('messageErrorLessThanSixCharacters', () => {
//     cy.get('span.field-validation-error[data-valmsg-for="Password"]').should('contain.text', 'The password should have at least 6 characters.');
//     // cy.get('[for="Password"]').should('contain.text', 'The password should have at least 6 characters');
// })

Cypress.Commands.add('messageErrorLessThanSixCharacters', () => {
    cy.get('span.field-validation-error[data-valmsg-for="ConfirmPassword"]').should('contain.text', 'The password and confirmation password do not match.');
    // cy.get('[for="ConfirmPassword"]').should('contain.text', 'The password should have at least 6 characters');
})

Cypress.Commands.add('messageErrorDoNotMatchConfirmPassword', () => {
    cy.get('span.field-validation-error[data-valmsg-for="ConfirmPassword"]').should('contain.text', 'The password and confirmation password do not match.');
    // cy.get('[for="ConfirmPassword"]').should('contain.text', 'The password and confirmation password do not match');
})

//  ================================================================= Register =================================================================  \\

//  ================================================================= Login =================================================================  \\
Cypress.Commands.add('buttonLogin', () => {
    cy.get('input[value="Log in"]');
})

// menampilkan pesan sukses
Cypress.Commands.add('messageSuccess_', () => {
    cy.get('h2').should('contain.text', 'Welcome to our store');
    cy.get('a.account');
    cy.get('.topic-html-content-body').should('contain.text', 'Welcome to the new Tricentis store!');
    cy.get('.topic-html-content-body').should('contain.text', 'Feel free to shop around and explore everything.');
})

// menampilkan pesan error
Cypress.Commands.add('messageError_', () => {
    cy.get('.validation-summary-errors')
    cy.contains('Login was unsuccessful. Please correct the errors and try again.')
    cy.contains('The credentials provided are incorrect')
})

Cypress.Commands.add('messageError_1', () => {
    cy.get('.validation-summary-errors')
    cy.contains('Login was unsuccessful. Please correct the errors and try again.')
    cy.contains('No customer account found')
})

//  ================================================================= Login =================================================================  \\



