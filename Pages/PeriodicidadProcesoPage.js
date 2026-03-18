import { expect } from "@playwright/test";
export class PeriodicidadProcesoPage{

    constructor(page){
        this.page = page

    //Seleccionar    
    this.dropdownPeriodicidad = page.locator ('[formcontrolname="periodicity"] button')
    this.dropdownHorainicio = page.locator ('[formcontrolname="timeStart"] button')
    this.dropdownHorafin = page.locator ('[formcontrolname="timeEnd"] button')
    this.dropdownIntervalo = page.locator ('[formcontrolname="interval"] button')

    //Guardar
    this.btnGuardar = page.getByRole('button',{name:'Guardar Periodicidad'})
    
    }

    opcion=(valor) => this.page.locator('li.option-item',{hasText: valor})

 dia=(nombre) => this.page.locator('.day-item',{ hasText:nombre})

 async seleccionarDropdonw(dropdonw,valor){
    await dropdonw.click()
    await this.opcion(valor).click()
 }

  async seleccionarDias(dias){  
    for(const dia of dias ){
        await this.dia(dia).click()
    }
}

 async ConfigurarPeriodicidad(data){
    await this.seleccionarDropdonw(this.dropdownPeriodicidad,data.periodicidad)
    await this.seleccionarDropdonw(this.dropdownHorainicio,data.horaIncio)
    await this.seleccionarDropdonw(this.dropdownHorafin,data.horaFin)
    await this.seleccionarDropdonw(this.dropdownIntervalo,data.intervalo)
    await this.seleccionarDias(data.dias)
    await this.btnGuardar.click()
 }
}