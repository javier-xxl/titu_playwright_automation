import { test, expect } from "@playwright/test";
import { ConfiguracionPageg } from "../../Pages/ConfiguracionPage";

const paginas = [
  {
    nombre: "Tipos De Repositorios",
    subtitulo: "El sistema cuenta con los siguientes repositorios.",
    menu: "Tipos De Repositorios",
    tarjetas: [
      {
        titulo: "SFTP",
        descripcion: "Protocolo seguro de transferencia de archivos",
      },
      {
        titulo: "SharePoint",
        descripcion: "Servicio de integración de Microsoft",
      },
      {
        titulo: "Amazon S3",
        descripcion: "Servicio de almacenamiento en la nube",
      },
      {
        titulo: "REST API",
        descripcion: "Aplicación de Interfaz de Programación",
      },
    ],
  },

  {
    nombre: "Tipos De Archivos",
    subtitulo:
      "El sistema tiene permitido los tipos de archivos que se muestran a continuación.",
    menu: "Tipos De Archivos",
    tarjetas: [
      { titulo: "XML", descripcion: ".xml" },
      { titulo: "TXT", descripcion: ".txt" },
      { titulo: "CSV", descripcion: ".csv" },
      { titulo: "Excel", descripcion: ".xlsx" },
      { titulo: "JSON", descripcion: ".json" },
    ],
  },

  {
    nombre: "Tipos De Validación",
    subtitulo:
      "El sistema cuenta con los siguientes tipos de validación disponibles.",
    menu: "Tipos De Validación",
    tarjetas: [
      {
        titulo: "Campo Requerido",
        descripcion: "Validación de campo obligatorio",
      },
      { titulo: "Numérico", descripcion: "Validación de valor numérico" },
      {
        titulo: "Alfanumérico",
        descripcion: "Validación de valor alfanumérico",
      },
      {
        titulo: "Email",
        descripcion: "Validación de formato de correo electrónico",
      },
      {
        titulo: "Formato de fecha",
        descripcion: "Validación de formato de fecha",
      },
      {
        titulo: "Expresión Regular",
        descripcion: "Validación mediante expresión regular",
      },
    ],
  },

  {
    nombre: "Tipos De Datos",
    subtitulo: "El sistema permite los siguientes tipos de datos.",
    menu: "Tipos De Datos",
    tarjetas: [
      {
        titulo: "VARCHAR2",
        descripcion: "Cadena de caracteres de longitud variable.",
      },
      {
        titulo: "NUMBER",
        descripcion: "Número que puede contener dígitos enteros.",
      },
      { titulo: "DATE", descripcion: "Fecha que incluye día, mes y año." },
      {
        titulo: "TIMESTAMP",
        descripcion: "Marca de tiempo que incluye fecha y hora.",
      },
      {
        titulo: "CLOB",
        descripcion: "Objeto de gran tamaño para almacenar texto.",
      },
      {
        titulo: "BLOB",
        descripcion: "Objeto de gran tamaño para almacenar datos binarios.",
      },
    ],
  },
];

for (const pagina of paginas) {
  test(`Validar ${pagina.nombre}`, async ({ page }) => {
    await page.goto(
      "https://carchivos-web-dev.titularizadora.com/dashboard/index",
    );

    const configuracionPage = new ConfiguracionPage(page);

    // abrir menú Configuración
    await configuracionPage.menuConfiguracion.click();

    // abrir página correspondiente
    await page.getByText(pagina.menu).click();

    // validar título
    await expect(page.getByText(pagina.nombre)).toBeVisible();

    // validar subtítulo
    await expect(configuracionPage.subtitulo).toHaveText(pagina.subtitulo);

    // validar tarjetas
    await configuracionPage.validarTarjetas(pagina.tarjetas);
  });
}
