// Only one item MUST have the "default: true" key

module.exports = {
    en: {

        path: `en`,
        locale: `en-US`,
        dateFormat: `DD/MM/YYYY`,
        siteLanguage: `en`,
        ogLanguage: `en_US`,
        defaultTitle: `Gatsby Starter with multi-language and CMS`,
        defaultDescription: `Gatsby example site using Markdown, i18n and CMS`,
    },
    tr: {
        default: true,
        path: `tr`,
        locale: `tr-TR`,
        dateFormat: `DD/MM/YYYY`,
        siteLanguage: `tr`,
        ogLanguage: `tr_TR`,
        defaultTitle: `Site basligi`,
        defaultDescription: `Exemplo de Gatsby site usando Markdown, i18n e CMS`,
    },
}
