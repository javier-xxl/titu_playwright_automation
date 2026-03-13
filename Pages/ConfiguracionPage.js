import { expect } from "@playwright/test";
export class ConfiguraciónPage{
    constructor(page){
        this.page = page

        //menu Configuracion
        this.menuConfiguracion = page.getBytext('Configuración')

        this.menuTiposReporsitorios = page.getBytext('Tipos de repositorios')
        this.menuTiposArchivos = page.getBytext('Tipos de archivos')
        this.menuTiposValidacion = page.getBytext('Tipos de validación')
        this.menuTiposDatos = page.getBytext('Tipos de datos')

        this.subtitulo = page.locator('.card-subtitle')
    }

    async openRepositoryType(){
        await this.menuTiposReporsitorios.click()
    }

    async openFillType(){
        await this.menuTiposArchivos.click()
    }

    async openValidationType(){
        await this.menuTiposValidacion.click()
    }

    async openDataType(){
        await this.menuTiposDatos.click()
    }

    async validartarjetas(tarjetas){
        for (const tarjeta of tarjetas){

            const card = this.page.locator('div.flex').filter({
                hasText: tarjeta.titulo
            }).first()

            await expect(card).toBeVisible()
            await expect(card.locator('svg')).toBeVisible()
            await expect(card.getBytext(tarjeta.titulo,{exact:true})).toBeVisible()
            await expect(card.getBytext(tarjeta.descripcion,{exact:true})).toBeVisible()
        }
    }
}

