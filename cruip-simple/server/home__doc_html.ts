import { class_ } from 'ctx-core/html'
import { type tag_dom_T } from 'relementjs'
import {
	a_,
	article_,
	button_,
	div_,
	figure_,
	footer_,
	h1_,
	h2_,
	h3_,
	h4_,
	header_,
	img_,
	li_,
	main_,
	p_,
	section_,
	source_,
	span_,
	ul_,
	video_
} from 'relementjs/html'
import {
	circle_,
	defs_,
	ellipse_,
	feColorMatrix_,
	feGaussianBlur_,
	feOffset_,
	filter_,
	g_,
	linearGradient_,
	path_,
	radialGradient_,
	rect_,
	stop_,
	svg_,
	use_
} from 'relementjs/svg'
import { type request_ctx_T } from 'rebuildjs/server'
import { layout__doc_html_ } from '../../layout/index.js'
import { type tab_id_T } from '../any/index.js'
import { layout__footer_ } from './layout__footer.js'
import { layout__header_ } from './layout__header.js'
const features_home_bg_01_png = 'features_home_bg_01.png'
const features_home_bg_02_png = 'features_home_bg_02.png'
const features_home_bg_03_png = 'features_home_bg_03.png'
const features_home_element_01_png = 'features_home_element_01.png'
const features_home_element_02_png = 'features_home_element_02.png'
const features_home_element_03_png = 'features_home_element_03.png'
const features_top_image_png = 'features_top_image.png'
const hero_image_01_png = 'hero_image_01.png'
const news_01_jpg = 'news_01.jpg'
const news_02_jpg = 'news_02.jpg'
const news_03_jpg = 'news_03.jpg'
const news_author_01_png = 'news_author_01.png'
const news_author_02_png = 'news_author_02.png'
const planet_avatar_01_png = 'planet_avatar_01.png'
const planet_avatar_02_png = 'planet_avatar_02.png'
const planet_png = 'planet.png'
const video_mp4 = 'video.mp4'
type home__doc_html_props_T = {
	ctx:request_ctx_T
}
export function home__doc_html_($p:home__doc_html_props_T) {
	const { ctx } = $p
	return layout__doc_html_({
		ctx
	}, [
		layout__header_(),
		main_({
			class: class_('grow')
		}, [
			hero__section_(),
			features__section_(),
			features_blocks__section_(),
			features_world__section_(),
			news__section_(),
			cta__section_(),
		]),
		layout__footer_()
	])
	function hero__section_() {
		return (
			section_({
				class: class_('relative')
			}, [
				div_({
					class: class_(
						'',
						'absolute',
						'left-1/2',
						'transform',
						'-translate-x-1/2',
						'bottom-0',
						'pointer-events-none',
						'-z-1'),
					'aria-hidden': true
				}, [
					svg_({
						xmlns: 'http://www.w3.org/2000/svg',
						viewBox: '0 0 1360 578',
						class: class_(
							'w-screen',
							'aspect-auto'),
					}, [
						defs_([
							linearGradient_({
								x1: '50%',
								y1: '0%',
								x2: '50%',
								y2: '100%',
								id: 'illustration-01'
							}, [
								stop_({ 'stop-color': '#FFF', offset: '0%' }),
								stop_({ 'stop-color': '#EAEAEA', offset: '77.402%' }),
								stop_({ 'stop-color': '#DFDFDF', offset: '100%' }),
							])
						]),
						g_({
							fill: 'url(#illustration-01)',
							'fill-rule': 'evenodd'
						}, [
							circle_({ cx: 1232, cy: 128, r: 128 }),
							circle_({ cx: 155, cy: 443, r: 64 }),
						])
					])
				]),
				div_({
					class: class_(
						'max-w-6xl',
						'mx-auto',
						'px-4',
						'sm:px-6')
				}, [
					div_({
						class: class_(
							'pt-32',
							'pb-12',
							'md:pt-40',
							'md:pb-20')
					}, [
						div_({
							class: class_(
								'text-center',
								'pb-12',
								'md:pb-16')
						}, [
							h1_({
								class: class_(
									'text-5xl',
									'md:text-6xl',
									'font-extrabold',
									'leading-tighter',
									'tracking-tighter',
									'mb-4'),
								'data-aos': 'zoom-y-out'
							}, [
								'Make your website ',
								span_({
									class: class_(
										'bg-clip-text',
										'text-transparent',
										'bg-gradient-to-r',
										'from-blue-500',
										'to-teal-400')
								}, 'wonderful')
							]),
							div_({
								class: class_(
									'max-w-3xl',
									'mx-auto')
							}, [
								p_({
										class: class_(
											'text-xl',
											'text-gray-600',
											'mb-8'),
										'data-aos': 'zoom-y-out',
										'data-aos-delay': 150
									},
									'Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.'),
								div_({
									class: class_(
										'max-w-xs',
										'mx-auto',
										'sm:max-w-none',
										'sm:flex',
										'sm:justify-center'),
									'data-aos': 'zoom-y-out',
									'data-aos-delay': 300
								}, [
									div_([
										a_({
											class: class_(
												'btn',
												'text-white',
												'bg-blue-600',
												'hover:bg-blue-700',
												'w-full',
												'mb-4',
												'sm:w-auto',
												'sm:mb-0'),
											href: '#0'
										}, 'Start free trial')
									]),
									div_([
										a_({
											class: class_(
												'btn',
												'text-white',
												'bg-gray-900',
												'hover:bg-gray-800',
												'w-full',
												'sm:w-auto',
												'sm:ml-4'),
											href: '#0'
										}, 'Learn more')
									])
								])
							])
						]),
						div_({
							class: class_(
								'home__hero_modal_container',
								'group/modal'),
							/** @see {import('../browser/index.ts').home__hero_modal_container__hyop} */
							hyop: 'home__hero_modal_container__hyop'
						}, [
							div_({
								class: class_(
									'relative',
									'flex',
									'justify-center',
									'mb-8'),
								'data-aos': 'zoom-y-out',
								'data-aos-delay': 450
							}, [
								div_({
									class: class_(
										'flex',
										'flex-col',
										'justify-center')
								}, [
									img_({
										class: class_(
											'mx-auto',
											'rounded',
											'shadow-xl'),
										src: hero_image_01_png,
										width: '768',
										height: '432',
										alt: 'Hero'
									}),
									svg_({
										class: class_(
											'absolute',
											'inset-0',
											'max-w-full',
											'mx-auto',
											'md:max-w-none',
											'h-auto'),
										width: '768',
										height: '432',
										viewBox: '0 0 768 432',
										xmlns: 'http://www.w3.org/2000/svg',
										'xmlns:xlink': 'http://www.w3.org/1999/xlink'
									}, [
										defs_([
											linearGradient_({ x1: '50%', y1: '0%', x2: '50%', y2: '100%', id: 'hero-ill-a' }, [
												stop_({ 'stop-color': '#FFF', offset: '0%' }),
												stop_({ 'stop-color': '#EAEAEA', offset: '77.402%' }),
												stop_({ 'stop-color': '#DFDFDF', offset: '100%' })
											]),
											linearGradient_({ x1: '50%', y1: '0%', x2: '50%', y2: '99.24%', id: 'hero-ill-b' }, [
												stop_({ 'stop-color': '#FFF', offset: '0%' }),
												stop_({ 'stop-color': '#EAEAEA', offset: '48.57%' }),
												stop_({ 'stop-color': '#DFDFDF', 'stop-opacity': '0', offset: '100%' })
											]),
											radialGradient_({
												cx: '21.152%',
												cy: '86.063%',
												fx: '21.152%',
												fy: '86.063%',
												r: '79.941%',
												id: 'hero-ill-e'
											}, [
												stop_({ 'stop-color': '#4FD1C5', offset: '0%' }),
												stop_({ 'stop-color': '#81E6D9', offset: '25.871%' }),
												stop_({ 'stop-color': '#338CF5', offset: '100%' })
											]),
											circle_({ id: 'hero-ill-d', cx: '384', cy: '216', r: '64' })
										]),
										g_({ fill: 'none', 'fill-rule': 'evenodd' }, [
											circle_({ 'fill-opacity': '.04', fill: 'url(#hero-ill-a)', cx: '384', cy: '216', r: '128' }),
											circle_({ 'fill-opacity': '.16', fill: 'url(#hero-ill-b)', cx: '384', cy: '216', r: '96' }),
											g_({ 'fill-rule': 'nonzero' }, [
												use_({ fill: '#000', 'xlink:href': '#hero-ill-d' }),
												use_({ fill: 'url(#hero-ill-e)', 'xlink:href': '#hero-ill-d' })
											])
										])
									])
								]),
								button_({
									class: class_(
										'absolute',
										'top-full',
										'flex',
										'items-center',
										'transform',
										'-translate-y-1/2',
										'bg-skin-fill',
										'rounded-full',
										'font-medium',
										'group/button',
										'p-4',
										'shadow-lg'),
									'@click.prevent': 'modalExpanded = true',
									'aria-controls': 'modal',
									/** @see {import('../browser/index.ts').home__hero__button__hyop} */
									hyop: 'home__hero__button__hyop'
								}, [
									svg_({
										class: class_(
											'w-6',
											'h-6',
											'fill-current',
											'text-gray-400',
											'group-hover/button:text-blue-600',
											'shrink-0'),
										viewBox: '0 0 24 24',
										xmlns: 'http://www.w3.org/2000/svg'
									}, [
										path_(
											{ d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z' }),
										path_({ d: 'M10 17l6-5-6-5z' })
									]),
									span_({ class: class_('ml-3') }, [
										'Watch the full video (2 min)'
									])
								])
							]),
							div_({
								class: class_(
									'home__hero_modal_backdrop__div',
									'hidden',
									'group-[.active]/modal:block',
									'fixed',
									'inset-0',
									'z-40',
									'bg-skin-fill',
									'bg-opacity-75',
									'transition-opacity',
									'backdrop-blur-sm',
									'transition',
									'ease-out',
									'duration-200',
									'opacity-0',
									'group-[.active]/modal:opacity-100',
									''),
								'aria-hidden': 'true',
							}),
							div_({
								id: 'modal',
								class: class_(
									'hidden',
									'group-[.active]/modal:block',
									'fixed',
									'inset-0',
									'z-40',
									'overflow-hidden',
									'flex',
									'items-center',
									'justify-center',
									'transform',
									'px-4',
									'sm:px-6',
									'transition',
									'ease-out',
									'duration-200',
									'opacity-0',
									'group-[.active]/modal:opacity-100',
									'scale-95',
									'group-[.active]/modal:scale-100'),
								role: 'dialog',
								'aria-modal': 'true',
								'aria-labelledby': 'modal-headline',
							}, [
								div_({
									class: class_(
										'bg-skin-fill',
										'overflow-auto',
										'max-w-6xl',
										'w-full',
										'max-h-full'),
									/** @see {import('../browser/index.ts').home__hero_modal__video_container__hyop} */
									hyop: 'home__hero_modal__video_container__hyop'
								}, [
									div_({
										class: class_(
											'relative',
											'pb-9/16')
									}, [
										video_({
											class: class_(
												'absolute',
												'w-full',
												'h-full'),
											width: '1920',
											height: '1080',
											loop: '',
											controls: '',
											/** @see {import('../browser/index.ts').home__hero_modal__video__hyop} */
											hyop: 'home__hero_modal__video__hyop'
										}, [
											source_({
												src: video_mp4,
												type: 'video/mp4'
											}),
											'Your browser does not support the video tag.'
										])
									])
								])
							])
						])
					])
				])
			])
		)
	}
	function features__section_() {
		return (
			section_({ class: class_('relative') }, [
				/*  Section background (needs .relative class on parent and next sibling elements)  */
				div_({
					class: class_(
						'absolute',
						'inset-0',
						'bg-gray-100',
						'pointer-events-none',
						'mb-16'),
					'aria-hidden': 'true'
				}),
				div_({
					class: class_(
						'absolute',
						'left-0',
						'right-0',
						'm-auto',
						'w-px',
						'p-px',
						'h-20',
						'bg-gray-200',
						'transform',
						'-translate-y-1/2')
				}),
				div_({
					class: class_(
						'relative',
						'max-w-6xl',
						'mx-auto',
						'px-4',
						'sm:px-6')
				}, [
					div_({
						class: class_(
							'pt-12',
							'md:pt-20')
					}, [
						/*  Section header  */
						div_({
							class: class_(
								'max-w-3xl',
								'mx-auto',
								'text-center',
								'pb-12',
								'md:pb-16')
						}, [
							h2_({
								class: class_(
									'h2',
									'mb-4')
							}, [
								'How Simple works'
							]),
							p_({
								class: class_(
									'text-xl',
									'text-gray-600')
							}, [
								'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.'
							])
						]),
						/*  Top image  */
						div_({
							class: class_(
								'pb-12',
								'md:pb-16')
						}, [
							img_({
								src: features_top_image_png,
								width: '1104',
								height: '325',
								alt: 'Features top'
							})
						]),
						/*  Section content  */
						div_({
							class: class_(
								'md:grid',
								'md:grid-cols-12',
								'md:gap-6',
								'group'),
							/** @see {import('../browser/index.ts').features_tab_container__hyop} */
							hyop: 'features_tab_container__hyop'
						}, [
							/*  Content  */
							div_({
								class: class_(
									'max-w-xl',
									'md:max-w-none',
									'md:w-full',
									'mx-auto',
									'md:col-span-7',
									'lg:col-span-6',
									'md:mt-6')
							}, [
								div_({
									class: class_(
										'md:pr-4',
										'lg:pr-12',
										'xl:pr-16',
										'mb-8')
								}, [
									h3_({
										class: class_(
											'h3',
											'mb-3')
									}, [
										'Powerful suite of tools'
									]),
									p_({
										class: class_(
											'text-xl',
											'text-gray-600')
									}, [
										'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.'
									])
								]),
								/*  Tabs buttons  */
								div_({
									class: class_(
										'mb-8',
										'md:mb-0')
								}, [
									features_tab__button_({
										tab_id: 1,
										/** @see {import('../browser/index.ts').features_tab_1__button__hyop} */
										hyop: 'features_tab_1__button__hyop',
										title: 'Building the Simple ecosystem',
										svg: svg_({
											xmlns: 'http://www.w3.org/2000/svg',
											viewBox: '0 0 12 12',
											class: class_(
												'w-3',
												'h-3',
												'fill-current'),
										}, [
											path_(
												{ d: 'M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z' })
										])
									}, [
										'Take collaboration to the next level with security and administrative features built for teams.'
									]),
									features_tab__button_({
											tab_id: 2,
											/** @see {import('../browser/index.ts').features_tab_2__button__hyop} */
											hyop: 'features_tab_2__button__hyop',
											title: 'Building the Simple ecosystem',
											svg: svg_({
												xmlns: 'http://www.w3.org/2000/svg',
												viewBox: '0 0 12 12',
												class: class_(
													'w-3',
													'h-3',
													'fill-current'),
											}, [
												path_({
													d: 'M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z',
													'fill-rule': 'nonzero'
												})
											])
										},
										['Take collaboration to the next level with security and administrative features built for teams.']),
									features_tab__button_({
											tab_id: 3,
											/** @see {import('../browser/index.ts').features_tab_3__button__hyop} */
											hyop: 'features_tab_3__button__hyop',
											title: 'Building the Simple ecosystem',
											svg: svg_({
												xmlns: 'http://www.w3.org/2000/svg',
												viewBox: '0 0 12 12',
												class: class_(
													'w-3',
													'h-3',
													'fill-current'),
											}, [
												path_({
													d: 'M11.334 8.06a.5.5 0 00-.421-.237 6.023 6.023 0 01-5.905-6c0-.41.042-.82.125-1.221a.5.5 0 00-.614-.586 6 6 0 106.832 8.529.5.5 0 00-.017-.485z',
													fill: '#191919',
													'fill-rule': 'nonzero'
												})
											])
										},
										['Take collaboration to the next level with security and administrative features built for teams.'])
								])
							]),
							/*  Tabs items  */
							div_({
								class: class_(
									'max-w-xl',
									'md:max-w-none',
									'md:w-full',
									'mx-auto',
									'md:col-span-5',
									'lg:col-span-6',
									'mb-8',
									'md:mb-0',
									'md:order-1'),
								'data-aos': 'zoom-y-out'
							}, [
								div_({
									class: class_(
										'relative',
										'flex',
										'flex-col',
										'text-center',
										'lg:text-right')
								}, [
									features_tab__div_({ tab_id: 1 }, [
										img_({
											class: class_(
												'md:max-w-none',
												'mx-auto',
												'rounded'),
											src: features_home_bg_01_png,
											width: '500',
											height: '375',
											alt: 'Features bg'
										}),
										img_({
											class: class_(
												'md:max-w-none',
												'absolute',
												'w-full',
												'left-0',
												'transform',
												'animate-float'),
											src: features_home_element_01_png,
											width: '500',
											height: '147',
											alt: 'Element 01',
											style: 'top:22%'
										}),
										img_({
											class: class_(
												'absolute',
												'md:max-w-none',
												'w-full',
												'left-0',
												'transform',
												'animate-float',
												'animation-delay-500'),
											src: features_home_element_02_png,
											width: '500',
											height: '158',
											alt: 'Element 02',
											style: 'top:39%'
										}),
										img_({
											class: class_(
												'md:max-w-none',
												'absolute',
												'w-full',
												'left-0',
												'bottom-0',
												'transform',
												'animate-float',
												'animation-delay-1000'),
											src: features_home_element_03_png,
											width: '500',
											height: '167',
											alt: 'Element 03',
											style: 'top:77%'
										})
									]),
									features_tab__div_({ tab_id: 2 }, [
										img_({
											class: class_(
												'md:max-w-none',
												'mx-auto',
												'rounded'),
											src: features_home_bg_02_png,
											width: '500',
											height: '375',
											alt: 'Features bg'
										}),
										img_({
											class: class_(
												'md:max-w-none',
												'absolute',
												'w-full',
												'left-0',
												'transform',
												'animate-float'),
											src: features_home_element_02_png,
											width: '500',
											height: '147',
											alt: 'Element 02',
											style: 'top:22%'
										}),
										img_({
											class: class_(
												'absolute',
												'md:max-w-none',
												'w-full',
												'left-0',
												'transform',
												'animate-float',
												'animation-delay-500'),
											src: features_home_element_02_png,
											width: '500',
											height: '158',
											alt: 'Element 02',
											style: 'top:39%'
										}),
										img_({
											class: class_(
												'md:max-w-none',
												'absolute',
												'w-full',
												'left-0',
												'bottom-0',
												'transform',
												'animate-float',
												'animation-delay-1000'),
											src: features_home_element_03_png,
											width: '500',
											height: '167',
											alt: 'Element 03',
											style: 'top:77%'
										})
									]),
									features_tab__div_({ tab_id: 3 }, [
										img_({
											class: class_(
												'md:max-w-none',
												'mx-auto',
												'rounded'),
											src: features_home_bg_03_png,
											width: '500',
											height: '375',
											alt: 'Features bg'
										}),
										img_({
											class: class_(
												'md:max-w-none',
												'absolute',
												'w-full',
												'left-0',
												'transform',
												'animate-float'),
											src: features_home_element_03_png,
											width: '500',
											height: '147',
											alt: 'Element 03',
											style: 'top:22%'
										}),
										img_({
											class: class_(
												'absolute',
												'md:max-w-none',
												'w-full',
												'left-0',
												'transform',
												'animate-float',
												'animation-delay-500'),
											src: features_home_element_02_png,
											width: '500',
											height: '158',
											alt: 'Element 02',
											style: 'top:39%'
										}),
										img_({
											class: class_(
												'md:max-w-none',
												'absolute',
												'w-full',
												'left-0',
												'bottom-0',
												'transform',
												'animate-float',
												'animation-delay-1000'),
											src: features_home_element_03_png,
											width: '500',
											height: '167',
											alt: 'Element 03',
											style: 'top:77%'
										})
									]),
								])
							])
						])
					])
				])
			])
		)
		function features_tab__button_($p:features_tab__button_props_T, ...children:tag_dom_T[]) {
			const {
				tab_id,
				title,
				svg,
				class: _class,
				...props
			} = $p
			return (
				button_({
					...props,
					class: class_(
						features_tab__button_class_(tab_id),
						_class)
				}, [
					div_([
						div_({
							class: class_(
								'font-bold',
								'leading-snug',
								'tracking-tight',
								'mb-1')
						}, title),
						div_({
							class: class_('text-gray-600')
						}, children)
					]),
					div_({
						class: class_(
							'flex',
							'justify-center',
							'items-center',
							'w-8',
							'h-8',
							'ml-auto',
							'bg-skin-fill',
							'rounded-full',
							'shadow',
							'shrink-0',
							'ml-3')
					}, svg)
				])
			)
		}
		type features_tab__button_props_T = {
			tab_id:tab_id_T
			class?:string
			hyop:string
			title:tag_dom_T
			svg:tag_dom_T
		}
		function features_tab__button_class_(tab:tab_id_T) {
			return class_(
				'flex',
				'w-full',
				'items-center',
				'mb-3',
				'p-5',
				'border',
				'border-transparent',
				'rounded',
				'text-left',
				'text-lg',
				'bg-gray-200',
				'transition',
				'duration-300',
				'ease-in-out',
				tab === 1
					? [
						'group-[.tab-1]:bg-skin-fill',
						'group-[.tab-1]:border-gray-200',
						'group-[.tab-1]:shadow-md',
						'group-[.tab-1]:hover:shadow-lg'
					]
					: tab === 2
						? [
							'group-[.tab-2]:bg-skin-fill',
							'group-[.tab-2]:border-gray-200',
							'group-[.tab-2]:shadow-md',
							'group-[.tab-2]:hover:shadow-lg'
						]
						: tab === 3
							? [
								'group-[.tab-3]:bg-skin-fill',
								'group-[.tab-3]:border-gray-200',
								'group-[.tab-3]:shadow-md',
								'group-[.tab-3]:hover:shadow-lg'
							]
							: null
			)
		}
		function features_tab_class_(tab_num:tab_id_T) {
			return class_(
				'w-full',
				'transition',
				'ease-in-out',
				'duration-700',
				'transform',
				'order-first',
				'opacity-0',
				'translate-y-16',
				tab_num === 1
					? [
						'group-[.tab-1]:duration-300',
						'group-[.tab-1]:absolute',
						'group-[.tab-1]:opacity-100',
						'group-[.tab-1]:translate-y-0',
					]
					: tab_num === 2
						? [
							'group-[.tab-2]:duration-300',
							'group-[.tab-2]:absolute',
							'group-[.tab-2]:opacity-100',
							'group-[.tab-2]:translate-y-0',
						]
						: tab_num === 3
							? [
								'group-[.tab-3]:duration-300',
								'group-[.tab-3]:absolute',
								'group-[.tab-3]:opacity-100',
								'group-[.tab-3]:translate-y-0',
							]
							: null)
		}
		function features_tab__div_($p:features_tab__div_props_T, ...children:tag_dom_T[]) {
			const {
				tab_id,
				class: _class,
			} = $p
			return (
				div_({
					class: class_(
						features_tab_class_(tab_id),
						_class),
				}, [
					div_({
						class: class_(
							'relative',
							'inline-flex',
							'flex-col')
					}, children)
				])
			)
		}
		type features_tab__div_props_T = {
			tab_id:tab_id_T
			class?:string
		}
	}
	function features_blocks__section_() {
		return (
			section_({ class: 'relative' }, [
				/*  Section background (needs .relative class on parent and next sibling elements)  */
				div_({
					class: class_(
						'absolute',
						'inset-0',
						'top-1/2',
						'md:mt-24',
						'lg:mt-0',
						'bg-gray-900',
						'pointer-events-none'),
					'aria-hidden': 'true'
				}),
				div_({
					class: class_(
						'absolute',
						'left-0',
						'right-0',
						'bottom-0',
						'm-auto',
						'w-px',
						'p-px',
						'h-20',
						'bg-gray-200',
						'transform',
						'translate-y-1/2')
				}),
				div_({
					class: class_(
						'relative',
						'max-w-6xl',
						'mx-auto',
						'px-4',
						'sm:px-6')
				}, [
					div_({
						class: class_(
							'py-12',
							'md:py-20')
					}, [
						/*  Section header  */
						div_({
							class: class_(
								'max-w-3xl',
								'mx-auto',
								'text-center',
								'pb-12',
								'md:pb-20')
						}, [
							h2_({
								class: class_(
									'h2',
									'mb-4')
							}, [
								'Explore the solutions'
							]),
							p_({
								class: class_(
									'text-xl',
									'text-gray-600')
							}, [
								'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.'
							])
						]),
						/*  Items  */
						div_({
							class: class_(
								'max-w-sm',
								'mx-auto',
								'grid',
								'gap-6',
								'md:grid-cols-2',
								'lg:grid-cols-3',
								'items-start',
								'md:max-w-2xl',
								'lg:max-w-none')
						}, [
							/*  1st item  */
							features_block__div_({
								svg: svg_({
									xmlns: 'http://www.w3.org/2000/svg',
									viewBox: '0 0 64 64',
									class: class_(
										'w-16',
										'h-16',
										'p-1',
										'-mt-1',
										'mb-2'),
								}, [
									g_({ fill: 'none', 'fill-rule': 'evenodd' }, [
										rect_({
											class: class_(
												'fill-current',
												'text-blue-600'),
											width: '64',
											height: '64',
											rx: '32'
										}),
										g_({ 'stroke-width': '2' }, [
											path_({
												class: class_(
													'stroke-current',
													'text-blue-300'),
												d: 'M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285'
											}),
											path_({
												class: class_(
													'stroke-current',
													'text-white'),
												d: 'M20.571 37.714h5.715L36.57 26.286h8'
											}),
											path_({
												class: class_(
													'stroke-current',
													'text-blue-300'),
												'stroke-linecap': 'square',
												d: 'M41.143 34.286l3.428 3.428-3.428 3.429'
											}),
											path_({
												class: class_(
													'stroke-current',
													'text-white'
												),
												'stroke-linecap': 'square',
												d: 'M41.143 29.714l3.428-3.428-3.428-3.429'
											})
										])
									])
								]),
								h4_children: ['Headless CMS'],
								p_children: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.']
							}),
							/*  2nd item  */
							features_block__div_({
								svg: svg_({
									xmlns: 'http://www.w3.org/2000/svg',
									viewBox: '0 0 64 64',
									class: class_(
										'w-16',
										'h-16',
										'p-1',
										'-mt-1',
										'mb-2'),
								}, [
									g_({ fill: 'none', 'fill-rule': 'evenodd' }, [
										rect_({
											class: class_(
												'fill-current',
												'text-blue-600'),
											width: '64',
											height: '64',
											rx: '32'
										}),
										g_({ 'stroke-width': '2', transform: 'translate(19.429 20.571)' }, [
											circle_({
												class: class_(
													'stroke-current',
													'text-white'),
												'stroke-linecap': 'square',
												cx: '12.571',
												cy: '12.571',
												r: '1.143'
											}),
											path_({
												class: class_(
													'stroke-current',
													'text-white'),
												d: 'M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696'
											}),
											path_({
												class: class_(
													'stroke-current',
													'text-blue-300'),
												d: 'M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835'
											})
										])
									])
								]),
								h4_children: ['Headless CMS'],
								p_children: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.']
							}),
							/*  3rd item  */
							features_block__div_({
								svg: svg_({
									xmlns: 'http://www.w3.org/2000/svg',
									viewBox: '0 0 64 64',
									class: class_(
										'w-16',
										'h-16',
										'p-1',
										'-mt-1',
										'mb-2'),
								}, [
									g_({ fill: 'none', 'fill-rule': 'evenodd' }, [
										rect_({
											class: class_(
												'fill-current',
												'text-blue-600'
											),
											width: '64',
											height: '64',
											rx: '32'
										}),
										g_({ 'stroke-width': '2' }, [
											path_({
												class: class_(
													'stroke-current',
													'text-blue-300'),
												d: 'M34.743 29.714L36.57 32 27.43 43.429H24M24 20.571h3.429l1.828 2.286'
											}),
											path_({
												class: class_(
													'stroke-current',
													'text-white'),
												'stroke-linecap': 'square',
												d: 'M34.743 41.143l1.828 2.286H40M40 20.571h-3.429L27.43 32l1.828 2.286'
											}),
											path_({
												class: class_(
													'stroke-current',
													'text-blue-300'),
												d: 'M36.571 32H40'
											}),
											path_({
												class: class_(
													'stroke-current',
													'text-white'),
												d: 'M24 32h3.429',
												'stroke-linecap': 'square'
											})
										])
									])
								]),
								h4_children: ['Headless CMS'],
								p_children: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
							}),
							/*  4th item  */
							features_block__div_({
								svg: svg_({
									xmlns: 'http://www.w3.org/2000/svg',
									viewBox: '0 0 64 64',
									class: class_(
										'w-16',
										'h-16',
										'p-1',
										'-mt-1',
										'mb-2'),
								}, [
									g_({ fill: 'none', 'fill-rule': 'evenodd' }, [
										rect_({
											class: class_(
												'fill-current',
												'text-blue-600'),
											width: '64',
											height: '64',
											rx: '32'
										}),
										g_({ 'stroke-width': '2' }, [
											path_({
												class: class_(
													'stroke-current',
													'text-white'),
												d: 'M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714'
											}),
											path_({
												class: class_(
													'stroke-current',
													'text-white'),
												d: 'M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286'
											}),
											path_({
												class: class_(
													'stroke-current',
													'text-white'),
												d: 'M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286'
											}),
											path_({
												class: class_(
													'stroke-current',
													'text-blue-300'),
												d: 'M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572',
												'stroke-linecap': 'square'
											})
										])
									])
								]),
								h4_children: ['Headless CMS'],
								p_children: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
							}),
							/*  5th item  */
							features_block__div_({
								svg: svg_({
									xmlns: 'http://www.w3.org/2000/svg',
									viewBox: '0 0 64 64',
									class: class_(
										'w-16',
										'h-16',
										'p-1',
										'-mt-1',
										'mb-2'),
								}, [
									g_({ fill: 'none', 'fill-rule': 'evenodd' }, [
										rect_({
											class: class_(
												'fill-current',
												'text-blue-600'),
											width: '64',
											height: '64',
											rx: '32'
										}),
										g_({ 'stroke-width': '2' }, [
											path_({
												class: class_(
													'stroke-current',
													'text-white'),
												d: 'M19.429 32a12.571 12.571 0 0021.46 8.89L23.111 23.11A12.528 12.528 0 0019.429 32z'
											}),
											path_({
												class: class_(
													'stroke-current',
													'text-blue-300'),
												d: 'M32 19.429c6.943 0 12.571 5.628 12.571 12.571M32 24a8 8 0 018 8'
											}),
											path_({
												class: class_(
													'stroke-current',
													'text-white'),
												d: 'M34.286 29.714L32 32'
											})
										])
									])
								]),
								h4_children: ['Headless CMS'],
								p_children: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
							}),
							/*  6th item  */
							features_block__div_({
								svg: svg_({
									xmlns: 'http://www.w3.org/2000/svg',
									viewBox: '0 0 64 64',
									class: class_(
										'w-16',
										'h-16',
										'p-1',
										'-mt-1',
										'mb-2'),
								}, [
									g_({ fill: 'none', 'fill-rule': 'evenodd' }, [
										rect_({
											class: class_(
												'fill-current',
												'text-blue-600'),
											width: '64',
											height: '64',
											rx: '32'
										}),
										g_({ 'stroke-width': '2', 'stroke-linecap': 'square' }, [
											path_({
												class: class_(
													'stroke-current',
													'text-white'),
												d: 'M29.714 40.358l-4.777 2.51 1.349-7.865-5.715-5.57 7.898-1.147L32 21.13l3.531 7.155 7.898 1.147L40 32.775'
											}),
											path_({
												class: class_(
													'stroke-current',
													'text-blue-300'),
												d: 'M44.571 43.429H34.286M44.571 37.714H34.286'
											})
										])
									])
								]),
								h4_children: ['Headless CMS'],
								p_children: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
							}),
						])
					])
				])
			])
		)
		function features_block__div_({
			svg,
			h4_children,
			p_children,
		}:{
			svg:tag_dom_T
			h4_children:tag_dom_T[]
			p_children:tag_dom_T[]
		}) {
			return (
				div_({
					class: class_(
						'relative',
						'flex',
						'flex-col',
						'items-center',
						'p-6',
						'bg-skin-fill',
						'rounded',
						'shadow-xl')
				}, [
					svg,
					h4_({
						class: class_(
							'text-xl',
							'font-bold',
							'leading-snug',
							'tracking-tight',
							'mb-1')
					}, h4_children),
					p_({
						class: class_(
							'text-gray-600',
							'text-center')
					}, p_children)
				])
			)
		}
	}
	function features_world__section_() {
		return (
			section_({ id: 'features_world', class: class_('overflow-hidden') }, [
				div_({
					class: class_(
						'max-w-6xl',
						'mx-auto',
						'px-4',
						'sm:px-6')
				}, [
					div_({
						class: class_(
							'py-12',
							'md:py-20')
					}, [
						/*  Section header  */
						div_({
							class: class_(
								'max-w-3xl',
								'mx-auto',
								'text-center',
								'pb-12',
								'md:pb-16')
						}, [
							h1_({
								class: class_(
									'h2',
									'mb-4')
							}, [
								'Simple can help you scale internationally'
							]),
							p_({
								class: class_(
									'text-xl',
									'text-gray-600')
							}, [
								'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.'
							])
						]),
						/*  World illustration  */
						div_({
							class: class_(
								'flex',
								'flex-col',
								'items-center',
								'pt-12',
								'md:pt-16')
						}, [
							div_({ class: 'relative' }, [
								/*  Halo effect  */
								svg_({
									class: class_(
										'absolute',
										'inset-0',
										'left-1/2',
										'top-1/2',
										'max-w-[200%]',
										'transform',
										'-translate-x-1/2',
										'-translate-y-1/2',
										'pointer-events-none'),
									width: '800',
									height: '800',
									viewBox: '0 0 800 800',
									xmlns: 'http://www.w3.org/2000/svg'
								}, [
									g_({
										class: class_(
											'fill-current',
											'text-gray-400',
											'opacity-75')
									}, [
										circle_({ class: class_('pulse'), cx: '400', cy: '400', r: '200' }),
										circle_({ class: class_('pulse', 'pulse-1'), cx: '400', cy: '400', r: '200' }),
										circle_({ class: class_('pulse', 'pulse-2'), cx: '400', cy: '400', r: '200' })
									])
								]),
								/*  Globe image  */
								img_({
									class: class_(
										'relative',
										'w-full',
										'sm:w-[400px]',
										'aspect-auto',
										'rounded-full',
										'shadow-xl'),
									src: planet_png,
									alt: 'Planet'
								}),
								/*  Static dots  */
								svg_({
									class: class_(
										'absolute',
										'top-0',
										'w-full',
										'h-auto'),
									viewBox: '0 0 400 400',
									style: 'left: 12%;',
									xmlns: 'http://www.w3.org/2000/svg'
								}, [
									defs_([
										filter_({
											x: '-41.7%',
											y: '-34.2%',
											width: '183.3%',
											height: '185.6%',
											filterunits: 'objectBoundingBox',
											id: 'world-ill-a'
										}, [
											feOffset_({ dy: '4', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }),
											feGaussianBlur_({ stddeviation: '6', in: 'shadowOffsetOuter1', result: 'shadowBlurOuter1' }),
											feColorMatrix_({
												values: '0 0 0 0 0 0 0 0 0 0.439215686 0 0 0 0 0.956862745 0 0 0 0.32 0',
												in: 'shadowBlurOuter1'
											})
										]),
										filter_({
											x: '-83.3%',
											y: '-68.5%',
											width: '266.7%',
											height: '271.2%',
											filterunits: 'objectBoundingBox',
											id: 'world-ill-c'
										}, [
											feOffset_({ dy: '4', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }),
											feGaussianBlur_({ stddeviation: '6', in: 'shadowOffsetOuter1', result: 'shadowBlurOuter1' }),
											feColorMatrix_({
												values: '0 0 0 0 0 0 0 0 0 0.439215686 0 0 0 0 0.956862745 0 0 0 0.32 0',
												in: 'shadowBlurOuter1'
											})
										]),
										filter_({
											x: '-7.3%',
											y: '-23.8%',
											width: '114.5%',
											height: '147.6%',
											filterunits: 'objectBoundingBox',
											id: 'world-ill-e'
										}, [
											feGaussianBlur_({ stddeviation: '2', in: 'SourceGraphic' })
										]),
										ellipse_({ id: 'world-ill-b', cx: '51', cy: '175.402', rx: '24', ry: '23.364' }),
										ellipse_({ id: 'world-ill-d', cx: '246', cy: '256.201', rx: '12', ry: '11.682' }),
										linearGradient_({ x1: '50%', y1: '0%', x2: '50%', y2: '100%', id: 'world-ill-f' }, [
											stop_({ 'stop-color': '#0070F4', 'stop-opacity': '0', offset: '0%' }),
											stop_({ 'stop-color': '#0070F4', 'stop-opacity': '.64', offset: '52.449%' }),
											stop_({ 'stop-color': '#0070F4', 'stop-opacity': '0', offset: '100%' })
										])
									]),
									g_({ transform: 'translate(0 -.818)', fill: 'none', 'fill-rule': 'evenodd' }, [
										use_({ fill: '#000', filter: 'url(#world-ill-a)', 'xlink:href': '#world-ill-b' }),
										use_({ fill: '#0070F4', 'xlink:href': '#world-ill-b' }),
										use_({ fill: '#000', filter: 'url(#world-ill-c)', 'xlink:href': '#world-ill-d' }),
										use_({ fill: '#0070F4', 'xlink:href': '#world-ill-d' }),
										ellipse_(
											{ 'fill-opacity': '.32', fill: '#0070F4', cx: '293', cy: '142.303', rx: '8', ry: '7.788' }),
										ellipse_(
											{ 'fill-opacity': '.64', fill: '#0070F4', cx: '250', cy: '187.083', rx: '6', ry: '5.841' }),
										ellipse_({ 'fill-opacity': '.64', fill: '#0070F4', cx: '13', cy: '233.811', rx: '2', ry: '1.947' }),
										ellipse_({ fill: '#0070F4', cx: '29', cy: '114.072', rx: '2', ry: '1.947' }),
										path_({
											d: 'M258 256.2l87-29.204',
											stroke: '#666',
											'stroke-width': '2',
											opacity: '.16',
											filter: 'url(#world-ill-e)'
										}),
										path_({
											d: 'M258 251.333c111.333-40.237 141-75.282 89-105.136M136 103.364c66.667 4.543 104.667 32.45 114 83.72',
											stroke: 'url(#world-ill-f)',
											'stroke-width': '2',
											'stroke-dasharray': '2'
										})
									])
								]),
								/*  Dynamic dots  */
								svg_({
									class: class_(
										'absolute',
										'max-w-full'),
									width: '48',
									height: '48',
									viewBox: '0 0 48 48',
									style: 'width: 12%;top: 45%; left: 50%;',
									xmlns: 'http://www.w3.org/2000/svg'
								}, [
									g_({
										class: class_(
											'fill-current',
											'text-blue-600')
									}, [
										circle_({
											class: class_(
												'pulse',
												'pulse-mini',
												'pulse-1'),
											cx: '24',
											cy: '24',
											r: '8'
										}),
										circle_({
											class: class_(
												'pulse',
												'pulse-mini',
												'pulse-2'),
											cx: '24',
											cy: '24',
											r: '8'
										}),
										circle_({ cx: '24', cy: '24', r: '8' })
									])
								]),
								svg_({
									class: class_(
										'absolute',
										'max-w-full'),
									width: '48',
									height: '48',
									viewBox: '0 0 48 48',
									style: 'width: 12%;top: 19%; left: 46%;',
									xmlns: 'http://www.w3.org/2000/svg'
								}, [
									g_({
										class: class_(
											'fill-current',
											'text-blue-600')
									}, [
										circle_({
											class: class_(
												'pulse',
												'pulse-mini'),
											cx: '24',
											cy: '24',
											r: '8'
										}),
										circle_({
											class: class_(
												'pulse',
												'pulse-mini',
												'pulse-2'),
											cx: '24',
											cy: '24',
											r: '8'
										}),
										circle_({ cx: '24', cy: '24', r: '8' })
									])
								]),
								/*  Avatars  */
								img_({
									class: class_(
										'absolute',
										'max-w-full',
										'transform',
										'animate-float'),
									src: planet_avatar_01_png,
									width: '261',
									height: '105',
									alt: 'Planet avatar 01',
									style: 'width: 65.25%; top: -3%; right: -27%;'
								}),
								img_({
									class: class_(
										'absolute',
										'max-w-full',
										'transform',
										'animate-float',
										'animation-delay-1000'),
									src: planet_avatar_02_png,
									width: '355',
									height: '173',
									alt: 'Planet avatar 02',
									style: 'width: 88.7%; bottom: -20%; right: -18%;'
								}),
								/*  Black icon  */
								svg_({
									class: class_(
										'absolute',
										'top-0',
										'max-w-full',
										'w-20',
										'h-auto',
										'rounded-full',
										'shadow-xl'),
									viewBox: '0 0 80 80',
									style: 'width: 20%; left: 6%;',
									xmlns: 'http://www.w3.org/2000/svg'
								}, [
									circle_({
										class: class_(
											'fill-current',
											'text-gray-800'),
										cx: '40',
										cy: '40',
										r: '40'
									}),
									path_({
										class: class_(
											'stroke-current',
											'text-white'),
										d: 'M30.19 41.221c7.074 3.299 12.957-4.7 20.03-1.401l1.769.824-1.419-3.883M43.988 50.877l3.887-1.41-1.769-.824c-2.19-1.021-3.475-2.651-4.42-4.512M38.724 36.91c-.944-1.86-2.23-3.49-4.42-4.512',
										'stroke-linecap': 'square',
										'stroke-width': '2'
									})
								]),
								/*  Blue icon  */
								svg_({
									class: class_(
										'absolute',
										'max-w-full',
										'w-16',
										'h-auto',
										'rounded-full',
										'shadow-xl'),
									viewBox: '0 0 64 64',
									style: 'width: 16%; top: 32%; left: -27%;',
									xmlns: 'http://www.w3.org/2000/svg'
								}, [
									circle_({
										class: class_(
											'fill-current',
											'text-blue-600'),
										cx: '32',
										cy: '32',
										r: '32'
									}),
									path_({
										class: class_(
											'stroke-current',
											'text-white'),
										d: 'M20.733 31.416l18.127-8.452M43.039 31.926L24.913 40.38',
										'stroke-width': '2',
										fill: 'none'
									}),
									path_({
										class: class_(
											'stroke-current',
											'text-white'),
										'stroke-linecap': 'square',
										d: 'M32.238 20.595l6.622 2.369-2.442 6.594M31.534 42.747l-6.621-2.368 2.442-6.595',
										'stroke-width': '2',
										fill: 'none'
									})
								]),
								/*  White icon  */
								svg_({
									xmlns: 'http://www.w3.org/2000/svg',
									viewBox: '0 0 64 64',
									class: class_(
										'absolute',
										'max-w-full',
										'w-16',
										'h-auto',
										'rounded-full',
										'shadow-xl'),
									style: 'width: 16%; top: 55%; right: -16%;',
								}, [
									circle_({
										class: class_(
											'fill-current',
											'text-gray-100'),
										fill: '#FBFBFB',
										cx: '32',
										cy: '32',
										r: '32'
									}),
									path_({
										class: class_(
											'fill-current',
											'text-gray-700'),
										d: 'M37.11 32.44l-1.69 4.646-8.458-3.078.676-1.859-4.773 1.42 2.744 4.156.677-1.858 9.396 3.42a.994.994 0 001.278-.587l2.03-5.576-1.88-.684zM27.037 30.878l1.691-4.646 8.457 3.078-.676 1.858 4.773-1.42-2.744-4.155-.676 1.858-9.397-3.42a.994.994 0 00-1.278.587l-2.03 5.576 1.88.684z'
									})
								])
							])
						])
					])
				])
			])
		)
	}
	function news__section_() {
		return (
			section_([
				div_({
					class: class_(
						'max-w-6xl',
						'mx-auto',
						'px-4',
						'sm:px-6')
				}, [
					div_({
						class: class_(
							'py-12',
							'md:py-20')
					}, [
						/*  Section header  */
						div_({
							class: class_(
								'max-w-3xl',
								'mx-auto',
								'text-center',
								'pb-12',
								'md:pb-20')
						}, [
							h2_({ class: 'h2' }, [
								'The most innovative businesses choose Simple'
							])
						]),
						/*  Categories  */
						div_({
							class: class_(
								'mb-12',
								'md:mb-16')
						}, [
							ul_({
								class: class_(
									'flex',
									'flex-wrap',
									'justify-center',
									'text-sm',
									'font-medium',
									'-m-2')
							}, [
								li_({ class: 'm-2' }, [
									a_({
										class: class_(
											'inline-flex',
											'text-center',
											'text-gray-100',
											'py-2',
											'px-4',
											'rounded-full',
											'bg-blue-600',
											'hover:bg-blue-700',
											'transition',
											'duration-150',
											'ease-in-out'),
										href: '#0'
									}, [
										'Developers'
									])
								]),
								li_({ class: 'm-2' }, [
									a_({
										class: class_(
											'inline-flex',
											'text-center',
											'text-gray-800',
											'py-2',
											'px-4',
											'rounded-full',
											'bg-skin-fill',
											'hover:bg-gray-100',
											'shadow-sm',
											'transition',
											'duration-150',
											'ease-in-out'),
										href: '#0'
									}, [
										'SaaS'
									])
								]),
								li_({ class: 'm-2' }, [
									a_({
										class: class_(
											'inline-flex',
											'text-center',
											'text-gray-800',
											'py-2',
											'px-4',
											'rounded-full',
											'bg-skin-fill',
											'hover:bg-gray-100',
											'shadow-sm',
											'transition',
											'duration-150',
											'ease-in-out'),
										href: '#0'
									}, [
										'Web Agencies'
									])
								]),
								li_({ class: 'm-2' }, [
									a_({
										class: class_(
											'inline-flex',
											'text-center',
											'text-gray-800',
											'py-2',
											'px-4',
											'rounded-full',
											'bg-skin-fill',
											'hover:bg-gray-100',
											'shadow-sm',
											'transition',
											'duration-150',
											'ease-in-out'),
										href: '#0'
									}, [
										'E-Commerce'
									])
								]),
								li_({ class: 'm-2' }, [
									a_({
										class: class_(
											'inline-flex',
											'text-center',
											'text-gray-800',
											'py-2',
											'px-4',
											'rounded-full',
											'bg-skin-fill',
											'hover:bg-gray-100',
											'shadow-sm',
											'transition',
											'duration-150',
											'ease-in-out'),
										href: '#0'
									}, [
										'Startups'
									])
								])
							])
						]),
						/*  Articles list  */
						div_({
							class: class_(
								'max-w-sm',
								'mx-auto',
								'md:max-w-none')
						}, [
							div_({
								class: class_(
									'grid',
									'gap-12',
									'md:grid-cols-3',
									'md:gap-x-6',
									'md:gap-y-8',
									'items-start')
							}, [
								/*  1st article  */
								article_({
									class: class_(
										'flex',
										'flex-col',
										'h-full'),
									'data-aos': 'zoom-y-out'
								}, [
									header_([
										a_({
											class: class_(
												'block',
												'mb-6'),
											href: 'blog-post.html'
										}, [
											figure_({
												class: class_(
													'relative',
													'h-0',
													'pb-9/16',
													'overflow-hidden',
													'translate-z-0',
													'rounded')
											}, [
												img_({
													class: class_(
														'absolute',
														'inset-0',
														'w-full',
														'h-full',
														'object-cover',
														'transform',
														'scale-105',
														'hover:-translate-y-1',
														'transition',
														'duration-700',
														'ease-out'),
													src: news_01_jpg,
													width: '352',
													height: '198',
													alt: 'News 01'
												})
											])
										]),
										div_({ class: 'mb-3' }, [
											ul_({
												class: class_(
													'flex',
													'flex-wrap',
													'text-xs',
													'font-medium',
													'-m-1')
											}, [
												li_({ class: 'm-1' }, [
													a_({
														class: class_(
															'inline-flex',
															'text-center',
															'text-gray-100',
															'py-1',
															'px-3',
															'rounded-full',
															'bg-blue-500',
															'hover:bg-blue-600',
															'transition',
															'duration-150',
															'ease-in-out'),
														href: '#0'
													}, [
														'Case studies'
													])
												]),
												li_({ class: 'm-1' }, [
													a_({
														class: class_(
															'inline-flex',
															'text-center',
															'text-gray-800',
															'py-1',
															'px-3',
															'rounded-full',
															'bg-skin-fill',
															'hover:bg-gray-100',
															'shadow-sm',
															'transition',
															'duration-150',
															'ease-in-out'),
														href: '#0'
													}, [
														'Hubspot'
													])
												])
											])
										]),
										h3_({
											class: class_(
												'text-xl',
												'font-bold',
												'leading-snug',
												'tracking-tight')
										}, [
											a_({ class: 'hover:underline', href: 'blog-post.html' }, [
												'“How HubSpot saved 25% on developing costs by switching to Simple.”'
											])
										])
									]),
									footer_({
										class: class_(
											'text-sm',
											'flex',
											'items-center',
											'mt-4')
									}, [
										div_({
											class: class_(
												'flex',
												'shrink-0',
												'mr-3')
										}, [
											a_({ class: 'relative', href: '#0' }, [
												span_({
													class: class_(
														'absolute',
														'inset-0',
														'-m-px'
													),
													'aria-hidden': 'true'
												}, [
													span_({
														class: class_(
															'absolute',
															'inset-0',
															'-m-px',
															'bg-skin-fill',
															'rounded-full')
													})
												]),
												img_({
													class: class_(
														'relative',
														'rounded-full'),
													src: news_author_01_png,
													width: '32',
													height: '32',
													alt: 'Author 01'
												})
											])
										]),
										div_([
											span_({ class: 'text-gray-600' }, [
												'By'
											]),
											a_({
												class: class_(
													'font-medium',
													'hover:underline'), href: '#0'
											}, [
												'Lisa Allison'
											])
										])
									])
								]),
								/*  2nd article  */
								article_({
									class: class_(
										'flex',
										'flex-col',
										'h-full'),
									'data-aos': 'zoom-y-out',
									'data-aos-delay': '150'
								}, [
									header_([
										a_({ class: 'block mb-6', href: 'blog-post.html' }, [
											figure_({
												class: class_(
													'relative',
													'h-0',
													'pb-9/16',
													'overflow-hidden',
													'translate-z-0',
													'rounded')
											}, [
												img_({
													class: class_(
														'absolute',
														'inset-0',
														'w-full',
														'h-full',
														'object-cover',
														'transform',
														'scale-105',
														'translate-z-0',
														'hover:-translate-y-1',
														'transition',
														'duration-700',
														'ease-out'),
													src: news_02_jpg,
													width: '352',
													height: '198',
													alt: 'News 02'
												})
											])
										]),
										div_({ class: 'mb-3' }, [
											ul_({
												class: class_(
													'flex',
													'flex-wrap',
													'text-xs',
													'font-medium',
													'-m-1')
											}, [
												li_({ class: 'm-1' }, [
													a_({
														class: class_(
															'inline-flex',
															'text-center',
															'text-gray-100',
															'py-1',
															'px-3',
															'rounded-full',
															'bg-blue-500',
															'hover:bg-blue-600',
															'transition',
															'duration-150',
															'ease-in-out'),
														href: '#0'
													}, [
														'Case studies'
													])
												]),
												li_({ class: 'm-1' }, [
													a_({
														class: class_(
															'inline-flex',
															'text-center',
															'text-gray-800',
															'py-1',
															'px-3',
															'rounded-full',
															'bg-skin-fill',
															'hover:bg-gray-100',
															'shadow-sm',
															'transition',
															'duration-150',
															'ease-in-out'),
														href: '#0'
													}, [
														'Facebook'
													])
												])
											])
										]),
										h3_({
											class: class_(
												'text-xl',
												'font-bold',
												'leading-snug',
												'tracking-tight')
										}, [
											a_({ class: 'hover:underline', href: 'blog-post.html' }, [
												'“How Facebook brought 13% cost savings to their bottom line with Simple’s products.”'
											])
										])
									]),
									footer_({
										class: class_(
											'text-sm',
											'flex',
											'items-center',
											'mt-4')
									}, [
										div_({
											class: class_(
												'flex',
												'shrink-0',
												'mr-3')
										}, [
											a_({
												class: class_(
													'relative',
													'-ml-2'),
												href: '#0'
											}, [
												span_({
													class: class_(
														'absolute',
														'inset-0',
														'-m-px'),
													'aria-hidden': 'true'
												}, [
													span_({
														class: class_(
															'absolute',
															'inset-0',
															'-m-px',
															'bg-skin-fill',
															'rounded-full')
													})
												]),
												img_({
													class: class_(
														'relative',
														'rounded-full'),
													src: news_author_02_png,
													width: '32',
													height: '32',
													alt: 'Author 02'
												})
											])
										]),
										div_([
											span_({ class: 'text-gray-600' }, [
												'By'
											]),
											a_({
												class: class_(
													'font-medium',
													'hover:underline'), href: '#0'
											}, [
												'Knut Mayer'
											])
										])
									])
								]),
								/*  3rd article  */
								article_({
									class: class_(
										'flex',
										'flex-col',
										'h-full'),
									'data-aos': 'zoom-y-out',
									'data-aos-delay': '300'
								}, [
									header_([
										a_({
											class: class_(
												'block',
												'mb-6'),
											href: 'blog-post.html'
										}, [
											figure_({
												class: class_(
													'relative',
													'h-0',
													'pb-9/16',
													'overflow-hidden',
													'translate-z-0',
													'rounded')
											}, [
												img_({
													class: class_(
														'absolute',
														'inset-0',
														'w-full',
														'h-full',
														'object-cover',
														'transform',
														'scale-105',
														'translate-z-0',
														'hover:-translate-y-1',
														'transition',
														'duration-700',
														'ease-out'),
													src: news_03_jpg,
													width: '352',
													height: '198',
													alt: 'News 03'
												})
											])
										]),
										div_({ class: 'mb-3' }, [
											ul_({
												class: class_(
													'flex',
													'flex-wrap',
													'text-xs',
													'font-medium',
													'-m-1')
											}, [
												li_({ class: 'm-1' }, [
													a_({
														class: class_(
															'inline-flex',
															'text-center',
															'text-gray-100',
															'py-1',
															'px-3',
															'rounded-full',
															'bg-blue-500',
															'hover:bg-blue-600',
															'transition',
															'duration-150',
															'ease-in-out'),
														href: '#0'
													}, [
														'Case studies'
													])
												]),
												li_({ class: 'm-1' }, [
													a_({
														class: class_(
															'inline-flex',
															'text-center',
															'text-gray-800',
															'py-1',
															'px-3',
															'rounded-full',
															'bg-skin-fill',
															'hover:bg-gray-100',
															'shadow-sm',
															'transition',
															'duration-150',
															'ease-in-out'),
														href: '#0'
													}, [
														'Tinder'
													])
												])
											])
										]),
										h3_({
											class: class_(
												'text-xl',
												'font-bold',
												'leading-snug',
												'tracking-tight')
										}, [
											a_({ class: 'hover:underline', href: 'blog-post.html' }, [
												'“How Tinder grew 115% and saved 120 Hours each week by outsourcing to Simple.”'
											])
										])
									]),
									footer_({
										class: class_(
											'text-sm',
											'flex',
											'items-center',
											'mt-4')
									}, [
										div_({
											class: class_(
												'flex',
												'shrink-0',
												'mr-3')
										}, [
											a_({ class: 'relative', href: '#0' }, [
												span_({
													class: class_(
														'absolute',
														'inset-0',
														'-m-px'),
													'aria-hidden': 'true'
												}, [
													span_({
														class: class_(
															'absolute',
															'inset-0',
															'-m-px',
															'bg-skin-fill',
															'rounded-full')
													})
												]),
												img_({
													class: class_(
														'relative',
														'rounded-full'),
													src: news_author_01_png,
													width: '32',
													height: '32',
													alt: 'Author 01'
												})
											])
										]),
										div_([
											span_({ class: 'text-gray-600' }, [
												'By'
											]),
											a_({
												class: class_(
													'font-medium',
													'hover:underline'),
												href: '#0'
											}, [
												'Lisa Allison'
											])
										])
									])
								])
							])
						])
					])
				])
			])
		)
	}
	function cta__section_() {
		return (
			section_([
				div_({
					class: class_(
						'max-w-6xl',
						'mx-auto',
						'px-4',
						'sm:px-6')
				}, [
					div_({
						class: class_(
							'pb-12',
							'md:pb-20')
					}, [
						/*  CTA box  */
						div_({
							class: class_(
								'bg-blue-600',
								'rounded',
								'py-10',
								'px-8',
								'md:py-16',
								'md:px-12',
								'shadow-2xl'
							),
							'data-aos': 'zoom-y-out'
						}, [
							div_({
								class: class_(
									'flex',
									'flex-col',
									'lg:flex-row',
									'justify-between',
									'items-center')
							}, [
								/*  CTA content  */
								div_({
									class: class_(
										'mb-6',
										'lg:mr-16',
										'lg:mb-0',
										'text-center',
										'lg:text-left')
								}, [
									h3_({
										class: class_(
											'h3',
											'text-white',
											'mb-2')
									}, [
										'Ready to get started?'
									]),
									p_({
										class: class_(
											'text-white',
											'text-lg',
											'opacity-75')
									}, [
										'We have a generous free tier available to get you started right away.'
									])
								]),
								/*  CTA button  */
								div_([
									a_({
										class: class_(
											'btn',
											'text-blue-600',
											'bg-gradient-to-r',
											'from-blue-100',
											'to-white'),
										href: '#0'
									}, [
										'Get started for free'
									])
								])
							])
						])
					])
				])
			])
		)
	}
}
