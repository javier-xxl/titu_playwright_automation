import{test,expect} from '@playwright/test'
import { EntidadProcesoPage } from '../../Pages/EntidadProceso'
import { ConfiguracionPage } from '../../Pages/ConfiguracionPage'

test('Cargue de la pagina de entidad proceso',async({page})=>{
    await page.goto('https://carchivos-web-dev.titularizadora.com/dashboard/index');
    const configuracionPage = new ConfiguracionPage(page);
    const entidadProcesoPage = new EntidadProcesoPage(page);

await configuracionPage.menuConfiguracion.click();
await page.getByText('Entidad proceso').click();

await expect(page).toHaveURL(/entity-process/);

await entidadProcesoPage.ValidarCargue();

});