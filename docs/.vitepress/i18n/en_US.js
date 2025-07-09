import { en_US as localeData } from './strings'

const sidebar_common = {
	text: localeData.other,
	items: [
		{ text: localeData.pages["contribute"], link: `/contribute` },
		{ text: localeData.pages["credits"], link: `/credits` },
		{ text: localeData.pages["privacy-policy"], link: `/privacy-policy` },
		{ text: localeData.pages["site-navigation"], link: `/site-navigation` }
	]
};

export default {
	lang: "en",
	label: "English",
	title: localeData.title,
	description: localeData.description,
	themeConfig: {
		sidebar: {
			'/docs/': [
				{
					text: localeData.guide,
					items: [
						{ text: localeData.pages["installation"], link: `installation` }					]
				},
				sidebar_common
			]
		}
	}
};