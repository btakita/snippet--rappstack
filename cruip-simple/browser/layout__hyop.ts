import { hover__enter$__new, seq_034521_class_tup_ } from '@rappstack/ui--browser/transition'
import { memo_ } from 'ctx-core/rmemo'
export function layout__header__hyop(home__header:HTMLElement) {
	window.addEventListener('scroll', update)
	update()
	function update() {
		const scrolled = window.scrollY > 10
		home__header.classList.toggle('scroll-down', scrolled)
		document.documentElement.classList.toggle('scrolled', scrolled)
	}
}
const [
	layout__header_resources__seq_enter_el__add,
	layout__header_resources__seq_el__add
] = seq_034521_class_tup_(hover__enter$__new)
export function layout__header_resources__li__hyop(home_desktop_resources__li:HTMLElement) {
	layout__header_resources__seq_enter_el__add(home_desktop_resources__li)
}
export function layout__header_resources__li__ul__hyop(home_desktop_resources__li__ul:HTMLElement) {
	layout__header_resources__seq_enter_el__add(home_desktop_resources__li__ul)
	layout__header_resources__seq_el__add(home_desktop_resources__li__ul)
}
const [
	layout__header_mobile_menu__seq_enter_el__add,
	layout__header_mobile_menu__seq_el__add,
] = seq_034521_class_tup_(el=>{
	return memo_($=>{
		el.addEventListener('click', ()=>{
			$.set(!$())
		})
		return false
	})
})
export function layout__header_mobile_menu__button__hyop(
	layout__header_mobile_menu__button:HTMLButtonElement
) {
	layout__header_mobile_menu__seq_enter_el__add(layout__header_mobile_menu__button)
}
export function layout__header_mobile_menu__nav__hyop(layout__header_mobile_menu__nav:HTMLElement) {
	layout__header_mobile_menu__seq_el__add(layout__header_mobile_menu__nav)
}
