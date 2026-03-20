import { test, expect } from "@playwright/test";
import { EntidadProcesoPage } from "../../Pages/EntidadProceso";
import { ConfiguracionPage } from "../../Pages/ConfiguracionPage";

test("Crear entidad proceso", async ({ page }) => {
  await page.goto(
    "https://carchivos-web-dev.titularizadora.com/dashboard/index",
  );
  const configuracionPage = new ConfiguracionPage(page);
  const entidadProcesoPage = new EntidadProcesoPage(page);
  const inputCorreos = page.locator("textarea").first();

  await configuracionPage.menuConfiguracion.click();
  await page.getByText("Entidad procesos").click();

  await expect(page).toHaveURL(/entity-process/);
  await entidadProcesoPage.ValidarCargue();

  await entidadProcesoPage.irACrear();

  await entidadProcesoPage.ingresarCorreos("test@correo.com,test2@correo.com");

  await entidadProcesoPage.seleccionarEntidad("GRANBANCO S.A.");

  await entidadProcesoPage.seleccionarProceso("Cálculo del Valor de las Garantías");

  //await entidadProcesoPage.seleccionarTodoslosprocesos();

  await entidadProcesoPage.guardar();

  await expect(page.getByRole("alert")).toContainText(
    "Se han asociados los procesos a la entidad exitosamente.",
  );
  await entidadProcesoPage.ValidarCargue();

  await entidadProcesoPage.inputBuscar.fill("GRANBANCO S.A.");

  const entidad = 'GRANBANCO S.A.';
  const proceso = 'Cálculo del Valor de las Garantías';

  const fila = entidadProcesoPage.filas.filter({ hasText: entidad }).filter({ hasText: proceso });

  await expect(fila).toBeVisible();
  

});
