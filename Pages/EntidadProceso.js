import { expect } from "@playwright/test";
export class EntidadProcesoPage{

    constructor(page){
        this.page = page

        this.bntAgregar = page.getByRole('button',{name:'Agregar Entidad Proceso'})
        this.inputBuscar = page.locator('.buscador-table input')
        this.tabla = page.locator('app-ui-table')

        this.header = page.locator('.ui-table-header')
        this.filas = page.locator('.ui-table-row')
        
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

async ValidarSinErrores(){
    const errorres = this.page.locator('text=Error')

if(await errorres.count() > 0){
    throw new Error('No hay errores en la página')
}
}

async Validarfilas(){
    const PrimeraFila = this.filas.first()
    const celdas= await PrimeraFila.locator('[role="cell"]').count()
    expect(celdas).toBe(this.columnas.length)
}

async ValidarCargue() {
    await this.page.waitForLoadState('networkidle')

    await expect (this.bntAgregar).toBeVisible()
    await expect (this.inputBuscar).toBeVisible()
    await expect (this.tabla).toBeVisible()
    
    await this.ValidarColumnas()
const filasCount = await this.filas.count()
if(filasCount > 0){
    await expect(this.filas.first()).toBeVisible()

    const contenido = await this.filas.first().allTextContents()
    expect(contenido.join(' ')).not.toBe('')

    
    await this.Validarfilas()
 } else {
            console.warn('Tabla sin datos')
        }

        await this.ValidarSinErrores()
        }

}





//CAMBIOS REALIZADOS:
       
        //this.celdas = page.locator('[role="cell"]')
//this.inputBuscar = page.getByPlaceholder('Buscar por proceso o código...')

