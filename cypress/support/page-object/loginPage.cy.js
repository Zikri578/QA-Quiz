class loginPage {
    email_ = 'input[name="Email"]'
    password_ = 'input[name="Password"]'
    login_btn = 'input[value="Log in"]'
    message_error = '[class="validation-summary-errors"]'

    visitUrl() {
        // Mengunjungi halaman register menggunakan Page Object
        cy.visit(Cypress.env('login_url'));
    }
    inputUsername(Email) {
        // Implementasi untuk mengisi kolom username/email
        cy.get(this.email_).type(Email);
    }
    inputPassword(Password) {
        // Implementasi untuk mengisi kolom password
        cy.get(this.password_).type(Password);
    }
    clikButtonRegister() {
        // Implementasi untuk mengklik tombol register
        cy.get(this.login_btn).click();
    }
    clikMessageError() {
        // Implementasi untuk menampilkan pesan error
        cy.get(this.message_error);
    }
}

export default loginPage;