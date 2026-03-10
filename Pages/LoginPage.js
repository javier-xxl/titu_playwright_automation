export class LoginPage{
    constructor(page){
        this.page = page
      // Locators: aquí solo buscamos los elementos de la página  
    this.username = page.locator('input[name="username"]')
    this.Password = page.locator('input[name="password"]')
    this.loginBtn = page.locator('input[name="login"]')
    }
    // Método que realiza la acción de login
    async login(username,Password){
        await this.username.fill(username)
        await this.Password.fill(Password)
        await this.loginBtn.click()
        }
    
}
