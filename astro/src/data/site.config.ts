interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://zloioperator.pages.dev/', // Write here your website url
	author: 'Злой Оператор', // Site author
	title: 'Злой Оператор', // Site title.
	description: 'Блог про поиск удаленки, развитие своих навыков и эмиграцию из РФ.', // Description to display in the meta tags
	lang: 'ru-RU',
	ogLocale: 'ru_RU',
	shareMessage: 'Поделиться', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
