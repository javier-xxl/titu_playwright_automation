import { expect } from "@playwright/test";

export class ConfiguracionPage {

    constructor(page){
        this.page = page

        // menú Configuración
        this.menuConfiguracion = page.getByText('Configuración')

        this.menuTiposRepositorios = page.getByText('Tipos de repositorios')
        this.menuTiposArchivos = page.getByText('Tipos de archivos')
        this.menuTiposValidacion = page.getByText('Tipos de validación')
        this.menuTiposDatos = page.getByText('Tipos de datos')

        this.subtitulo = page.locator('.card-subtitle')
    }

    async openRepositoryType(){
        await this.menuTiposRepositorios.click()
    }

    async openFileType(){
        await this.menuTiposArchivos.click()
    }

    async openValidationType(){
        await this.menuTiposValidacion.click()
    }

    async openDataType(){
        await this.menuTiposDatos.click()
    }

    async validarTarjetas(tarjetas){

        for (const tarjeta of tarjetas){

            const card = this.page.locator('div.flex').filter({
                hasText: tarjeta.titulo
            }).first()

            await expect(card).toBeVisible()

            await expect(card.locator('svg')).toBeVisible()

            await expect(
                card.getByText(tarjeta.titulo, { exact: true })
            ).toBeVisible()

            await expect(
                card.getByText(tarjeta.descripcion, { exact: true })
            ).toBeVisible()
        }
    }

}
