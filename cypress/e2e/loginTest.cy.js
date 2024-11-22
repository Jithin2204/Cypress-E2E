import {loginPage} from "../pages/loginPage"
const loginObj = new loginPage()
import loginTestData from '../fixtures/loginTestData.json'
//Git success 
describe ('loginTest', () =>{
    beforeEach(() => {
        // Prevent uncaught exceptions from causing test failures
        cy.on('uncaught:exception', (err, runnable) => {
            // Return false to prevent the error from failing the test
            return false;
        });
    });
    it('Loginflow', () =>{ // to verify login page
        loginObj.openUrl()
        loginObj.enterUserName(loginTestData.UserName)
        loginObj.enterPassword(loginTestData.PassWord)
        loginObj.selectCheckBox()
        loginObj.login()
        })
    })