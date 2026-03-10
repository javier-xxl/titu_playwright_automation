export class DashboardPage{
    constructor(page){
        this.page = page
        this.menuInicio = page.locator('span:has-text("Inicio")').first()
    }

    async isDashboardVisible(){
        return await this.menuInicio.isVisible()
    }
}