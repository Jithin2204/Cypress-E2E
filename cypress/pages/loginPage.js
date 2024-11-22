export class loginPage
{
    //object
    weblocators = 
    {
    username: '#outlined-basic',
    password: '#password',
    checkBox: "input[name='rememberMe']",
    login: '[data-cy="login-button-signIn"]'
    }
    //object finish

//Methods
openUrl()
{
cy.visit(Cypress.env('URL'))   
}
enterUserName(UName)
{
cy.get(this.weblocators.username).type(UName)
}
enterPassword(PW)
{
cy.get(this.weblocators.password).type(PW)
}
selectCheckBox()
{
cy.get(this.weblocators.checkBox).check();
}
login()
{
cy.get(this.weblocators.login).click();
}
}