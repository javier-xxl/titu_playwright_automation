import { test, expect } from '@playwright/test';
import { LoginPage } from '../../Pages/LoginPage';
import { DashboardPage } from '../../Pages/DashboardPage';


test('test_login', async ({ page }) => {

  await page.goto('https://iam-test.titularizadora.com/realms/titularizadora/protocol/openid-connect/auth?client_id=archivos-client&redirect_uri=https%3A%2F%2Fcarchivos-web-dev.titularizadora.com%2Fdashboard%2Findex&response_type=code&scope=openid&response_mode=query');

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page)

  await loginPage.login(
    'wcontreras@titularizadora.com',
    'wcontreras'
  );

//await expect(page).toHaveURL('https://carchivos-web-dev.titularizadora.com/dashboard/index');
await expect(page.getByText('Configuración')).toBeVisible();
expect(await DashboardPage.isDashboardPageVisible()).toBe(true)


});