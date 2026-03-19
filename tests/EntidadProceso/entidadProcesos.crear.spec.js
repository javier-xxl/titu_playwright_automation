import{test,expect} from '@playwright/test'
import { EntidadProcesoPage } from '../../Pages/EntidadProceso'
import { ConfiguracionPage } from '../../Pages/ConfiguracionPage'   

test('Crear entidad proceso',async({page})=>{

    await page.goto('https://carchivos-web-dev.titularizadora.com/dashboard/index');
    const configuracionPage = new ConfiguracionPage(page);
    const entidadProcesoPage = new EntidadProcesoPage(page);

    await configuracionPage.menuConfiguracion.click();
    await page.getByText('Entidad procesos').click();

    await expect(page).toHaveURL(/entity-process/);
    await entidadProcesoPage.ValidarCargue();

    await entidadProcesoPage.irACrear();

    await entidadProcesoPage.seleccionarEntidad('MTI S.A - Thomas');

    await entidadProcesoPage.seleccionarTodoslosprocesos();

    await entidadProcesoPage.guardar();
})