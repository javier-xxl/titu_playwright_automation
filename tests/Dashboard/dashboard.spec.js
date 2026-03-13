import { test, expect } from '@playwright/test';
import { DashboardPage } from '../../Pages/DashboardPage';


test('Ver_Dashborad', async ({ page }) => {

await page.goto('https://carchivos-web-dev.titularizadora.com/dashboard/index');

const dashboardPage = new DashboardPage(page)

await page.waitForURL(/dashboard/);
await expect(dashboardPage.menuInicio).toBeVisible()
await expect(dashboardPage.menuConfiguracion).toBeVisible()

});