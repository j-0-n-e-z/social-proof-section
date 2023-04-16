/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				veryDarkMagenta: 'hsl(300, 43%, 22%)',
				softPink: 'hsl(333, 80%, 67%)',
				darkGrayishMagenta: 'hsl(303, 10%, 53%)',
				lightGrayishMagenta: 'hsl(300, 24%, 96%)'
			},
			fontSize: {
				base: '15px'
			},
			backgroundImage: {
				patternBackground:
					'url(./assets/bg-pattern-top.svg), url(./assets/bg-pattern-bottom.svg)',
				patternCard: 'url(./assets/bg-pattern-card.svg)'
			},
			backgroundPosition: {
				patternBackgroundDesktopPosition:
					'calc(100% - 52vw) calc(100% - 35vh), 48vw 52vh',
				patternBackgroundMobilePosition:
					'calc(100% - 40vw) calc(100% - 45vh), 40vw 40vh',
				patternCardMobilePosition: '-12px 0'
			}
		}
	},
	plugins: []
}
