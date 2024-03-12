import { jsonld_Graph_ } from '@rappstack/domain--server/jsonld'
import {
	font__meta_props_a1_,
	type icon_link_props_T,
	site__author_, site__body_class_,
	site__description_,
	site__google_site_verification_, site__gtag_id_,
	site__icon_,
	site__light_and_dark_mode_,
	site__social_image_url_,
	site__title_
} from '@rappstack/domain--server/site'
import { jsonld__script_ } from '@rappstack/ui--server/jsonld'
import { class_ } from 'ctx-core/html'
import { raw_, type tag_dom_T } from 'relementjs'
import { body_, head_, link_, meta_, script_, title_ } from 'relementjs/html'
import { doc_html_ } from 'relementjs/server'
import { assets_, assets__new, type assets_T, type request_ctx_T, request_url_ } from 'relysjs/server'
export function layout__doc_html_({
	ctx,
	assets,
	canonical_url,
	title,
	author,
	description,
	icon,
	social_image_url,
	body_class,
}:{
	ctx:request_ctx_T
	assets?:assets_T
	canonical_url?:string
	title?:string
	author?:string
	description?:string
	icon?:icon_link_props_T
	social_image_url?:string
	body_class?:string
}, ...children:tag_dom_T[]) {
	canonical_url ??= request_url_(ctx).href
	title ??= site__title_(ctx)
	description ??= site__description_(ctx)
	author ??= site__author_(ctx)
	icon ??= site__icon_(ctx)
	social_image_url ??= new URL(site__social_image_url_(ctx), request_url_(ctx).origin) + ''
	assets = assets__new(assets_(ctx), assets)
	const site__light_and_dark_mode = site__light_and_dark_mode_(ctx)
	const site__google_site_verification = site__google_site_verification_(ctx)
	const site__gtag_id = site__gtag_id_(ctx)
	return (
		doc_html_({
			lang: 'en'
		}, [
			head_([
				meta_({ 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' }),
				meta_({ name: 'viewport', content: 'width=device-width' }),
				meta_({ name: 'title', content: title }),
				meta_({ name: 'description', content: description }),
				meta_({ name: 'author', content: author }),
				//  Open Graph / Facebook
				meta_({ property: 'og:title', content: title }),
				meta_({ property: 'og:description', content: description }),
				meta_({ property: 'og:url', content: canonical_url }),
				meta_({ property: 'og:image', content: social_image_url }),
				// Twitter
				meta_({ property: 'twitter:card', content: 'summary_large_image' }),
				meta_({ property: 'twitter:url', content: canonical_url }),
				meta_({ property: 'twitter:title', content: title }),
				meta_({ property: 'twitter:description', content: description }),
				meta_({ property: 'twitter:image', content: social_image_url }),
				site__light_and_dark_mode
					? [
						meta_({ name: 'darkreader-lock' }),
						meta_({ name: 'darkreader', content: 'disable' }),
					]
					: null,
				font__meta_props_a1_(ctx).map(meta_props=>
					meta_(meta_props)),
				meta_({ name: 'theme-color', content: '' }),
				link_({ rel: 'icon', ...icon }),
				link_({ rel: 'canonical', href: canonical_url }),
				link_({ rel: 'sitemap', href: '/sitemap.xml' }),
				site__google_site_verification
					? meta_({ name: 'google-site-verification', content: site__google_site_verification })
					: null,
				...assets.css_a.map(href=>
					link_({ rel: 'stylesheet', type: 'text/css', href })),
				...assets.script_a.map(src=>
					script_({ type: 'module', src })),
				site__light_and_dark_mode
					? [
						// language=js
						script_(raw_(`
					// remove fouc
					const localStorage__theme = localStorage.getItem('theme')
					document.firstElementChild.setAttribute(
						'data-theme',
						localStorage__theme
							? localStorage__theme
							: window.matchMedia('(prefers-color-scheme: dark)').matches
								? 'dark'
								: 'light')
				`.trim().replaceAll('					', '')))
					]
					: null,
				title_(title),
			]),
			body_({
				class: class_(
					site__body_class_(ctx),
					body_class)
			}, [
				children,
				jsonld__script_(jsonld_Graph_(ctx)),
				site__gtag_id
					? [
						// Google tag (gtag.js)
						// language=html
						raw_(`
<script>
  window.dataLayer = window.dataLayer || []
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date())
  gtag('config', '${site__gtag_id}')
  window.addEventListener('load', ()=>{
		setTimeout(()=>{
			let script = document.createElement('script')
			script.src = 'https://www.googletagmanager.com/gtag/js?id=${site__gtag_id}'
			script.async = true
			script.defer = true
			document.head.appendChild(script)			
		}, 1500)
  })
</script>
				`.trim())
					]
					: null,
			])
		])
	)
}
