export class DashboardPage{
    constructor(page){
        this.page = page
        this.menuInicio = page.getByText('Inicio ')
    }

    async isDashboardVisible(){
        return await this.menuInicio.isVisible()
    }
}