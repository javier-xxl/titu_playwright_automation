export class DashboardPage{
    constructor(page){
        this.page = page
        this.menuInicio = page.getBytext('Inicio ')
    }

    async isDashboardVisible(){
        return await this.menuInicio.isVisible()
    }
}