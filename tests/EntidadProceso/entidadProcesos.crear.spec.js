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
  // Seleccionar entidad especifica y proceso especifico
  //await entidadProcesoPage.seleccionarEntidad("GRANBANCO S.A.");
  //await entidadProcesoPage.seleccionarProceso("Cálculo del Valor de las Garantías");

  //Seleccionar todos los procesos de la lista
  //await entidadProcesoPage.seleccionarTodoslosprocesos();

  //Seleccionar un proceso aleatorio de la lista
 const entidad ='GRANBANCO S.A.';
 await entidadProcesoPage.seleccionarEntidad(entidad);
 const proceso = await entidadProcesoPage.SelecionarProcesoRamdom();

  await entidadProcesoPage.guardar();

  await expect(page.getByRole("alert")).toContainText(
    "Se han asociados los procesos a la entidad exitosamente.",
  );
  await entidadProcesoPage.ValidarCargue();

  await entidadProcesoPage.inputBuscar.fill("");
  await entidadProcesoPage.inputBuscar.fill(entidad);

await expect(entidadProcesoPage.filas.filter({ hasText: entidad }).filter({ hasText: proceso })).toBeVisible({ timeout: 10000 });

//Validar dorde se encuentra la entidad y proceso creado espesifico
  //await entidadProcesoPage.inputBuscar.fill("GRANBANCO S.A.");
  //const entidad = 'GRANBANCO S.A.';
  //const proceso = 'Cálculo del Valor de las Garantías';
  //const fila = entidadProcesoPage.filas.filter({ hasText: entidad }).filter({ hasText: proceso });
  //await expect(fila).toBeVisible();
  

});
