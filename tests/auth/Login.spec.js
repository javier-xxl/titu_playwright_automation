import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/LoginPage';
import { DashboardPage } from '../../Pages/DashboardPage';


test('login', async ({ page }) => {

  await page.goto('https://iam-test.titularizadora.com/realms/titularizadora/protocol/openid-connect/auth?client_id=archivos-client&redirect_uri=https%3A%2F%2Fcarchivos-web-dev.titularizadora.com%2Fdashboard%2Findex&response_type=code&scope=openid&response_mode=query');

  const loginPage = new LoginPage(page);
  const dashboardpage = new DashboardPage(page)

  await loginPage.login(
    'wcontreras@titularizadora.com',
    'wcontreras'
  );
await page.waitForURL(/dashboard/);
await page.context().storageState({path: 'storageState.json'})
await expect(dashboardpage.menuInicio).toBeVisible()



});