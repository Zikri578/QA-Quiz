import loginPage from "../../support/page-object/loginPage.cy";
const loginData = require("../../fixtures/login/login.json")

describe('Demo Web Shop - Login With Commands', () => {
    // membuat variabel login untuk memanggil class loginPage
    const LOGIN = new loginPage;

    beforeEach(() => {
        // memanggil variabel yang ada di cypress.config.js dan direct ke halaman login 
        cy.visit(Cypress.config('baseUrl'));
    });

    it('Login Berhasil', () => {
        // mengarahkan ke url register
        cy.visit(Cypress.env('login_url'));

        LOGIN.inputUsername(loginData.validEmail);
        LOGIN.inputPassword(loginData.validPassword);

        cy.buttonLogin().click();

        // menampilkan pesan sukses
        cy.visit(Cypress.env('login_success'));
        cy.messageSuccess_();
    });

    it('Login Gagal - Empty Email', () => {
        // mengarahkan ke url register
        cy.visit(Cypress.env('login_url'));

        // empty email
        LOGIN.inputPassword(loginData.validPassword);

        cy.buttonLogin().click();

        // menampilkan pesan error
        cy.messageError_1();
    });

    it('Login Gagal - Empty Password', () => {
        // mengarahkan ke url register
        cy.visit(Cypress.env('login_url'));

        LOGIN.inputUsername(loginData.validEmail);
        // empty password

        cy.buttonLogin().click();

        // menampilkan pesan error
        cy.messageError_();
    });

    it('Login Gagal - Invalid Email', () => {
        // mengarahkan ke url register
        cy.visit(Cypress.env('login_url'));

        LOGIN.inputUsername(loginData.invalidEmail);    // invalid email
        LOGIN.inputPassword(loginData.validPassword);

        cy.buttonLogin().click();

        // menampilkan pesan error
        cy.messageError_();
    });


    it('Login Gagal - Empty Form', () => {
        // mengarahkan ke url register
        cy.visit(Cypress.env('login_url'));

        // empty email
        // empty password

        cy.buttonLogin().click();

        // menampilkan pesan error
        cy.messageError_1();
    });

    it('Login Gagal - Invalid Password', () => {
        // mengarahkan ke url register
        cy.visit(Cypress.env('login_url'));

        LOGIN.inputUsername(loginData.validEmail);
        LOGIN.inputPassword(loginData.invalidPassword);     // invalid password

        cy.buttonLogin().click();

        // menampilkan pesan error
        cy.messageError_();
    });

    it('Login Gagal - Invalid Email and Password', () => {
        // mengarahkan ke url register
        cy.visit(Cypress.env('login_url'));

        LOGIN.inputUsername(loginData.invalidEmail);
        LOGIN.inputPassword(loginData.invalidPassword);     // invalid password

        cy.buttonLogin().click();

        // menampilkan pesan error
        cy.messageError_();
    });
})