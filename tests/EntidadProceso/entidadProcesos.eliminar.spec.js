import{test,expect} from '@playwright/test';
import { EntidadProcesoPage } from '../../Pages/EntidadProceso';
import { ConfiguracionPage } from "../../Pages/ConfiguracionPage";

test('Eliminar Primer Registro', async ({page}) => {
   await page.goto(
    "https://carchivos-web-dev.titularizadora.com/dashboard/index",
  );

    const configuracionPage = new ConfiguracionPage(page);
    const entidadProcesoPage = new EntidadProcesoPage(page);

    await configuracionPage.menuConfiguracion.click();
    await page.getByText("Entidad procesos").click();
    
    await expect(page).toHaveURL(/entity-process/);
    await entidadProcesoPage.ValidarCargue();

    const totalAntes= await entidadProcesoPage.filas.count();
    expect(totalAntes).toBeGreaterThan(0);

    const textAntes = await entidadProcesoPage.filas.first().textContent();
    await entidadProcesoPage.eliminarprimeraFila();
    await entidadProcesoPage.confirmarEliminacion();
    await expect(page.getByRole("alert")).toContainText('Proceso eliminado exitosamente.');

    await entidadProcesoPage.ValidarCargue();

    await expect(page.getByText(textAntes)).not.toBeVisible();

    const totalDespues = await entidadProcesoPage.filas.count();
    expect(totalDespues).toBe(totalAntes);

});