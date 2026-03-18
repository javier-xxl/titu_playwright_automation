import { expect } from "@playwright/test";
export class EntidadProcesoPage{

    constructor(page){
        this.page = page

        this.bntAgregar = page.getByRole('button',{name:'Agregar Entidad Proceso'})

        this.inputBuscar = page.getByPlaceholder('Buscar por proceso o código...')

        this.tabla = page.locator('app-ui-table')
        this.header = page.locator('.ui-table-header')
        this.filas = page.locator('.ui-table-row')
        this.celdas = page.locator('[role="cell"]')

        this.columnas = [
            'Tipo doc entidad',
            'Doc entidad',
            'Nombre entidad',
            'Código proceso',
            'Nombre proceso',
            'Hora inicio',
            'Hora fin',
            'Intervalo',
            'Acción'
        ]
    }

    async ValidarColumnas(){
        for(const columna of this.columnas){
            await expect(this.header.getByRole('cell', { name: columna, exact: true })).toBeVisible()
        }
    }

async ValidarColumnasExactas(){
    const header = await this.header.locator('[role="cell"]').allTextContents()
    expect(header).toEqual(this.columnas) 
}
async ValidarCargue() {
    await this.bntAgregar.waitFor({ state: 'visible' })
    await this.inputBuscar.waitFor({ state: 'visible' })
    await this.tabla.waitFor({ state: 'visible' })
    
    await this.filas.first().waitFor({ state: 'visible' })
    
    await this.ValidarColumnas()
}



}