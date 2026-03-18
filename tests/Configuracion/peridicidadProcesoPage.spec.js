import { test, expect } from "@playwright/test";
import { ConfiguracionPage } from "../../Pages/ConfiguracionPage";
import { PeriodicidadProcesoPage } from "../../Pages/PeriodicidadProcesoPage";

test("Configurar perioricidad del proceso", async ({ page }) => {
  await page.goto(
    "https://carchivos-web-dev.titularizadora.com/dashboard/index",
  );
  const configuracionPage = new ConfiguracionPage(page);
  const periodicidadProcesoPage = new PeriodicidadProcesoPage(page);

  await configuracionPage.menuConfiguracion.click();
  await page.getByText("Periodicidad proceso").click();
  await periodicidadProcesoPage.ConfigurarPeriodicidad({
    periodicidad: "Diaria",
    horaIncio: "07:00",
    horaFin: "16:00",
    intervalo: "1 Hora",
    dias: ["Lunes", "Martes", "Miércoles"],
  });

  await page.waitForURL(/periodicity-process/);

  await expect(page.getByRole("alert")).toContainText(
    "Periodicidad actualizada exitosamente",
  );

  await expect(periodicidadProcesoPage.dropdownPeriodicidad).toContainText("Diaria");

  await expect(periodicidadProcesoPage.dropdownHorainicio).toContainText("07:00");

  await expect(periodicidadProcesoPage.dropdownHorafin).toContainText("16:00");

  await expect(periodicidadProcesoPage.dropdownIntervalo).toContainText("1 Hora");
});
