class registerPage {
    email = 'input[name="Email"]';
    password = 'input[name="Password"]'
    confirmpassword = 'input[name="ConfirmPassword"]'
    registerBtn = 'input[value="Register"]'
    messageError = '[class="validation-summary-errors"]'

    visitUrl() {
        // Mengunjungi halaman register menggunakan Page Object
        cy.visit(Cypress.env('register_url'));
    }
    inputUsername(Email) {
        // Implementasi untuk mengisi kolom username/email
        cy.get(this.email).type(Email);
    }
    inputPassword(Password) {
        // Implementasi untuk mengisi kolom password
        cy.get(this.password).type(Password);
    }
    inputConfirmPassword(confirmpassword) {
        // Implementasi untuk mengisi kolom confirm password
        cy.get(this.confirmpassword).type(confirmpassword);
    }
    // clikButtonRegister() {
    //     // Implementasi untuk mengklik tombol register
    //     cy.get(this.registerBtn).click();
    // }
    clikMessageError() {
        // Implementasi untuk menampilkan pesan error
        cy.get(this.messageError);
    }
}

export default registerPage;