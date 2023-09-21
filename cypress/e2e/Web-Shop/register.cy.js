import registerPage from "../../support/page-object/registerPage.cy";
const registerData = require("../../fixtures/register/register.json")

// Fungsi untuk menghasilkan nama depan secara acak
export function generateRandomFirstName() {
    const firstNames = ['John', 'Jane', 'Michael', 'Emily', 'David', 'Sarah', 'Robert', 'Linda']; // Daftar nama pertama
    const randomIndex = Math.floor(Math.random() * firstNames.length); // Memilih indeks acak dari daftar
    return firstNames[randomIndex]; // Mengembalikan nama pertama yang dipilih secara acak
}

// Fungsi untuk menghasilkan nama belakang secara acak
export function generateRandomLastName() {
    const lastNames = ['John', 'Jane', 'Michael', 'Emily', 'David', 'Sarah', 'Robert', 'Linda']; // Daftar nama terakhir
    const randomIndex = Math.floor(Math.random() * lastNames.length); // Memilih indeks acak dari daftar
    return lastNames[randomIndex]; // Mengembalikan nama pertama yang dipilih secara acak
}

// Fungsi untuk menghasilkan email acak
export function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 10); // menghasilkan string acak dalam bentuk alfanumerik
    const email = randomString + '@gmail.com'; // menggabungkan nilai randomString
    return email; // mengembalikan nilai email
}

// membuat variabel register untuk memanggil class registerPage
const REGISTER = new registerPage;

describe('Demo Web Shop - Register With Commands', () => {
    // memanggil variabel generateRandomEmail
    const randomFirstName = generateRandomFirstName();
    const randomLastName = generateRandomLastName();
    const randomEmail = generateRandomEmail();

    beforeEach(() => {
        // memanggil variabel yang ada di cypress.config.js dan direct ke halaman login 
        cy.visit(Cypress.config('baseUrl'));
    });

    it('Register Berhasil', () => {
        // mengarahkan ke url register
        cy.visit(Cypress.env('register_url'));

        // Isi formulir gender, first name, last name otomatis menggunakan commands. lokasi 
        cy.radionButton('input[name="Gender"][value="M"]').click();
        cy.getElementByFirstName('[name="FirstName"]').type(randomFirstName);
        cy.getElementByLastName('name="LastName"').type(randomLastName);
        cy.getElementByEmail('name="Email"').type(randomEmail);

        // memanggil class serta json untuk menginput password, dan confirm password
        REGISTER.inputPassword(registerData.validPassword);
        REGISTER.inputConfirmPassword(registerData.validPassword);

        cy.buttonRegister().click();

        // menampilkan pesan sukses
        cy.visit(Cypress.env('register_url_parameter'));
        cy.messageSuccess();
        cy.visit(Cypress.env('register_success'));
    });

    it('Register Gagal - Empty First Name', () => {
        // mengarahkan ke url register
        cy.visit(Cypress.env('register_url'));

        // Isi formulir gender, first name, last name otomatis menggunakan commands. lokasi 
        cy.radionButton('input[name="Gender"][value="M"]').click();
        // empty first name
        cy.getElementByLastName('name="LastName"').type(randomLastName);
        cy.getElementByEmail('name="Email"').type(randomEmail);

        // memanggil class serta json untuk menginput password, dan confirm password
        REGISTER.inputPassword(registerData.validPassword);
        REGISTER.inputConfirmPassword(registerData.validPassword);

        cy.buttonRegister().click();

        // menampilkan pesan error
        cy.messageErrorFirstName();
    });

    it('Register Gagal - Empty Last Name', () => {
        // mengarahkan ke url register
        cy.visit(Cypress.env('register_url'));

        // Isi formulir gender, first name, last name otomatis menggunakan commands. lokasi 
        cy.radionButton('input[name="Gender"][value="M"]').click();
        cy.getElementByFirstName('[name="FirstName"]').type(randomFirstName);
        // empty last name
        cy.getElementByEmail('name="Email"').type(randomEmail);

        // memanggil class serta json untuk menginput password, dan confirm password
        REGISTER.inputPassword(registerData.validPassword);
        REGISTER.inputConfirmPassword(registerData.validPassword);

        cy.buttonRegister().click();

        // menampilkan pesan error
        cy.messageErrorLastName();
    });

    it('Register Gagal - Empty Email', () => {
        // mengarahkan ke url register
        cy.visit(Cypress.env('register_url'));

        // Isi formulir gender, first name, last name otomatis menggunakan commands. lokasi 
        cy.radionButton('input[name="Gender"][value="M"]').click();
        cy.getElementByFirstName('[name="FirstName"]').type(randomFirstName);
        cy.getElementByLastName('name="LastName"').type(randomLastName);
        // empty email

        // memanggil class serta json untuk menginput email, password, dan confirm password
        REGISTER.inputPassword(registerData.validPassword);
        REGISTER.inputConfirmPassword(registerData.validPassword);

        cy.buttonRegister().click();

        // menampilkan pesan error
        cy.messageErrorEmail();
    });

    // it('Register Gagal - Empty Password', () => {
    //     // mengarahkan ke url register
    //     cy.visit(Cypress.env('register_url'));

    //     // Isi formulir gender, first name, last name otomatis menggunakan commands. lokasi 
    //     cy.radionButton('input[name="Gender"][value="M"]').click();
    //     cy.getElementByFirstName('[name="FirstName"]').type(randomFirstName);
    //     cy.getElementByLastName('name="LastName"').type(randomLastName);
    //     cy.getElementByEmail('name="Email"').type(randomEmail);

    //     // memanggil class serta json untuk menginput email, password, dan confirm password
    //     // empty password
    //     REGISTER.inputConfirmPassword(registerData.validPassword);

    //     cy.buttonRegister().click();

    //     // menampilkan pesan error
    //     cy.messageErrorConfirmPassword();
    // });

    it('Register Gagal - Empty Confirm Password', () => {
        // mengarahkan ke url register
        cy.visit(Cypress.env('register_url'));

        // Isi formulir gender, first name, last name otomatis menggunakan commands. lokasi 
        cy.radionButton('input[name="Gender"][value="M"]').click();
        cy.getElementByFirstName('[name="FirstName"]').type(randomFirstName);
        cy.getElementByLastName('name="LastName"').type(randomLastName);
        cy.getElementByEmail('name="Email"').type(randomEmail);

        // memanggil class serta json untuk menginput email, password, dan confirm password
        REGISTER.inputPassword(registerData.validPassword);
        // empty confirm password

        cy.buttonRegister().click();

        // menampilkan pesan error
        cy.messageErrorConfirmPassword();
    });


    it('Register Gagal - Empty Form', () => {
        // mengarahkan ke url register
        cy.visit(Cypress.env('register_url'));

        // empty form with first name, last name, email, password and confirm password

        cy.buttonRegister().click();

        // menampilkan pesan error
        cy.messageErrorFirstName();
        cy.messageErrorLastName();
        cy.messageErrorEmail();
        cy.messageErrorPassword();
        cy.messageErrorConfirmPassword();
    });

    it('Register Gagal - Invalid Format Email', () => {
        // mengarahkan ke url register
        cy.visit(Cypress.env('register_url'));

        // Isi formulir gender, first name, last name otomatis menggunakan commands. lokasi 
        cy.radionButton('input[name="Gender"][value="M"]').click();
        cy.getElementByFirstName('[name="FirstName"]').type(randomFirstName);
        cy.getElementByLastName('name="LastName"').type(randomLastName);

        // memanggil class serta json untuk menginput email, password, dan confirm password
        REGISTER.inputUsername(registerData.invalidFormatEmail);    // invalid email = mamba12yahoo.com
        REGISTER.inputPassword(registerData.validPassword);
        REGISTER.inputConfirmPassword(registerData.validPassword);

        cy.buttonRegister().click();

        // menampilkan pesan error
        cy.messageErrorInvalidEmail();
    });

    // it('Register Gagal - Invalid Password', () => {
    //     // mengarahkan ke url register
    //     cy.visit(Cypress.env('register_url'));

    //     // Isi formulir gender, first name, last name otomatis menggunakan commands. lokasi 
    //     cy.radionButton('input[name="Gender"][value="M"]').click();
    //     cy.getElementByFirstName('[name="FirstName"]').type(randomFirstName);
    //     cy.getElementByLastName('name="LastName"').type(randomLastName);
    //     cy.getElementByEmail('name="Email"').type(randomEmail);

    //     // memanggil class serta json untuk menginput email, password, dan confirm password
    //     REGISTER.inputPassword(registerData.invalidPassword);   // invalid password
    //     REGISTER.inputConfirmPassword(registerData.validPassword);

    //     cy.buttonRegister().click();

    //     // menampilkan pesan error
    //     cy.messageErrorInvalidPassword();
    // });

    it('Register Gagal - Less Than 6 Characters Password', () => {
        // mengarahkan ke url register
        cy.visit(Cypress.env('register_url'));

        // Isi formulir gender, first name, last name otomatis menggunakan commands. lokasi 
        cy.radionButton('input[name="Gender"][value="M"]').click();
        cy.getElementByFirstName('[name="FirstName"]').type(randomFirstName);
        cy.getElementByLastName('name="LastName"').type(randomLastName);
        cy.getElementByEmail('name="Email"').type(randomEmail);

        // memanggil class serta json untuk menginput email, password, dan confirm password
        REGISTER.inputPassword(registerData.invalidFormatPassword);   // invalid format password
        REGISTER.inputConfirmPassword(registerData.validPassword);

        cy.buttonRegister().click();

        // menampilkan pesan error
        cy.messageErrorLessThanSixCharactersPassword();
    });


    it('Register Gagal - Less Than 6 Characters Confirm Password', () => {
        // mengarahkan ke url register
        cy.visit(Cypress.env('register_url'));

        // Isi formulir gender, first name, last name otomatis menggunakan commands. lokasi 
        cy.radionButton('input[name="Gender"][value="M"]').click();
        cy.getElementByFirstName('[name="FirstName"]').type(randomFirstName);
        cy.getElementByLastName('name="LastName"').type(randomLastName);
        cy.getElementByEmail('name="Email"').type(randomEmail);

        // memanggil class serta json untuk menginput email, password, dan confirm password
        REGISTER.inputPassword(registerData.validPassword);
        REGISTER.inputConfirmPassword(registerData.invalidFormatConfirmPassword);   // invalid format confirm password

        cy.buttonRegister().click();

        // menampilkan pesan error
        cy.messageErrorLessThanSixCharactersConfirmPassword();
    });


    it('Register Gagal - Password Do Not Match Password', () => {
        // mengarahkan ke url register
        cy.visit(Cypress.env('register_url'));

        // Isi formulir gender, first name, last name otomatis menggunakan commands. lokasi 
        cy.radionButton('input[name="Gender"][value="M"]').click();
        cy.getElementByFirstName('[name="FirstName"]').type(randomFirstName);
        cy.getElementByLastName('name="LastName"').type(randomLastName);
        cy.getElementByEmail('name="Email"').type(randomEmail);

        // memanggil class serta json untuk menginput email, password, dan confirm password
        REGISTER.inputPassword(registerData.InvalidDoNotMatchPassword); // do not match password
        REGISTER.inputConfirmPassword(registerData.validPassword);

        cy.buttonRegister().click();

        // menampilkan pesan error
        cy.messageErrorDoNotMatchConfirmPassword();
    });

    it('Register Gagal - Password Do Not Match Confirm Password', () => {
        // mengarahkan ke url register
        cy.visit(Cypress.env('register_url'));

        // Isi formulir gender, first name, last name otomatis menggunakan commands. lokasi 
        cy.radionButton('input[name="Gender"][value="M"]').click();
        cy.getElementByFirstName('[name="FirstName"]').type(randomFirstName);
        cy.getElementByLastName('name="LastName"').type(randomLastName);
        cy.getElementByEmail('name="Email"').type(randomEmail);

        // memanggil class serta json untuk menginput email, password, dan confirm password
        REGISTER.inputPassword(registerData.validPassword);
        REGISTER.inputConfirmPassword(registerData.InvalidDoNotMatchConfirmPassword);   // do not match password

        cy.buttonRegister().click();

        // menampilkan pesan error
        cy.messageErrorDoNotMatchConfirmPassword();
    });
});
