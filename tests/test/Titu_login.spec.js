import { test, expect } from '@playwright/test';

test.skip('iniciar sesion y cerrar sesion',async({page})=>{
    await page.goto('https://iam-test.titularizadora.com/realms/titularizadora/protocol/openid-connect/auth?client_id=archivos-client&redirect_uri=https%3A%2F%2Fcarchivos-web-dev.titularizadora.com%2Fdashboard%2Findex&response_type=code&scope=openid&response_mode=query');
    await page.locator('input[name="username"]').fill ('wcontreras@titularizadora.com');
    await page.locator('input[name="password"]').fill ('wcontreras')
    await page.locator('input[name="login"]').click();
    await page.getByAltText('profile').click();
    await page.locator('a', { hasText: 'Cerrar Sesión' }).click();


    // await expect(page.locator('app-index').getByRole('img', { name: 'logo' })).toBeVisible();
    
})
test.skip('paginacion',async({page})=>{
    await page.goto('https://iam-test.titularizadora.com/realms/titularizadora/protocol/openid-connect/auth?client_id=archivos-client&redirect_uri=https%3A%2F%2Fcarchivos-web-dev.titularizadora.com%2Fdashboard%2Findex&response_type=code&scope=openid&response_mode=query');
    await page.locator('input[name="username"]').fill ('wcontreras@titularizadora.com');
    await page.locator('input[name="password"]').fill ('wcontreras')
    await page.locator('input[name="login"]').click();
    //Dentro de la pagina de titularzadora//
    await page.getByText('Configuración').click();
    ///////////////////TIPOS DE REPOSITORIOS/////////////////
    await page.locator('a',{hasText: 'Tipos de repositorios'}).click()
    await expect(page.getByText('Tipos De Repositorios', { exact: true })).toBeVisible();
    await expect(
  page.locator('.card-subtitle')
).toHaveText(
  'El sistema cuenta con los siguientes repositorios.'
);
    //await expect(page.getByText('SFTP')).toBeVisible();
    //await expect(page.getByText('SharePoint')).toBeVisible();
    //await expect(page.getByText('Amazon S3')).toBeVisible();
    
    //await expect(page.getByText('REST API')).toBeVisible();
 const tarjetas_Repositorios = [
  {
    titulo: 'SFTP',
    descripcion: 'Protocolo seguro de transferencia de archivos'
  },
  {
    titulo: 'SharePoint',
    descripcion: 'Servicio de integración de Microsoft'
  },
  {
    titulo: 'Amazon S3',
    descripcion: 'Servicio de almacenamiento en la nube'
  },
  {
    titulo: 'REST API',
    descripcion: 'Aplicación de Interfaz de Programación'
  }
];

for (const tarjeta of tarjetas_Repositorios) {

  // Ubicar la tarjeta por su clase y por su título
  const card = page.locator('div.flex').filter({
    hasText: tarjeta.titulo
  }).first();

  // Validar que la tarjeta exista
  await expect(card).toBeVisible();

  // Validar icono (svg)
  await expect(card.locator('svg')).toBeVisible();

  // Validar título exacto
  await expect(
    card.getByText(tarjeta.titulo, { exact: true })
  ).toBeVisible();

  // Validar descripción exacta
  await expect(
    card.getByText(tarjeta.descripcion, { exact: true })
  ).toBeVisible();
}

//////////////////PAGINA TIPOS DE ARCHIVOS//////////
 await page.locator('a',{hasText: ' Tipos de archivos '}).click()
await expect(page.getByText('Tipos De Archivos', { exact: true })).toBeVisible();
    await expect(
  page.locator('.card-subtitle')
).toHaveText(
  'El sistema tiene permitido los tipos de archivos que se muestran a continuación.'
);
 const tarjetas_Archivos = [
  {
    titulo: 'XML',
    descripcion: '.xml'
  },
  {
    titulo: 'TXT',
    descripcion: '.txt'
  },
  {
    titulo: 'CSV',
    descripcion: '.csv'
  },
  {
    titulo: 'Excel',
    descripcion: '.xlsx'
  },
  {
    titulo: 'JSON',
    descripcion: '.json'
  }
];

for (const tarjeta of tarjetas_Archivos) {

  // Ubicar la tarjeta por su clase y por su título
  const card = page.locator('div.flex').filter({
    hasText: tarjeta.titulo
  }).first();

  // Validar que la tarjeta exista
  await expect(card).toBeVisible();

  // Validar icono (svg)
  await expect(card.locator('svg')).toBeVisible();

  // Validar título exacto
  await expect(
    card.getByText(tarjeta.titulo, { exact: true })
  ).toBeVisible();

  // Validar descripción exacta
  await expect(
    card.getByText(tarjeta.descripcion, { exact: true })
  ).toBeVisible();
}
})
/*
//////////////////PAGINA TIPOS DE VALIDACION //////////
 await page.locator('a',{hasText: ' Tipos de validación '}).click()
 const tarjetas_Validación  = [
  {
    titulo: 'Campo Requerido',
    descripcion: 'Validación de campo obligatorio'
  },
  {
    titulo: 'Numérico',
    descripcion: 'Validación de valor numérico'
  },
  {
    titulo: 'Alfanumérico',
    descripcion: 'Validación de valor alfanumérico'
  },
  {
    titulo: 'Email',
    descripcion: 'Validación de formato de correo electrónico'
  },
  {
    titulo: 'Fecha',
    descripcion: 'Validación de formato de fecha'
  },
  {
    titulo: 'Expresión Regular',
    descripcion: 'Validación mediante expresión regular'
  }
];

for (const tarjeta of tarjetas_Validación) {

  // Ubicar la tarjeta por su clase y por su título
  const card = page.locator('div.flex').filter({
    hasText: tarjeta.titulo
  }).first();

  // Validar que la tarjeta exista
  await expect(card).toBeVisible();

  // Validar icono (svg)
  await expect(card.locator('svg')).toBeVisible();

  // Validar título exacto
  await expect(
    card.getByText(tarjeta.titulo, { exact: true })
  ).toBeVisible();

  // Validar descripción exacta
  await expect(
    card.getByText(tarjeta.descripcion, { exact: true })
  ).toBeVisible();
}
})*/