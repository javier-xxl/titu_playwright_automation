import { test, expect } from "@playwright/test";
import { ConfiguracionPage } from "../../Pages/Configuracionpage";
import { PeriodicidadPrecesoPage } from "../../Pages/PeriodicidadProcesoPage";

test('Configurar perioricidad del proceso', async ({page})=>{
    
      await page.goto('https://carchivos-web-dev.titularizadora.com/dashboard/index');
      const configuracionPage= new ConfiguracionPage(page)
      const periodicidadPrecesoPage = new PeriodicidadPrecesoPage(page)

      await configuracionPage.menuConfiguracion.click()
      await page.getByText('Periodicidad proceso').click()
      await periodicidadPrecesoPage.ConfigurarPeriodicidad({

        periodicidad: 'Diaria',
        horaIncio: "07:00",
        horaFin: '16:00',
        intervalo: "1 Hora",
        dias: ['Lunes','Martes','Miércoles']
      })

      await page.waitForURL(/configuration/);
      await expect(
        page.getByRole('alert')
      ).toContainText('Periodicidad actualizada exitosamente')
      

})


