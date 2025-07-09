/*
  Copyright (C) 2024 Nintendo Homebrew
  SPDX-License-Identifier: MIT
*/

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

import * as i18n from './i18n'

process.env.VITE_EXTRA_EXTENSIONS = 'nsmwhf'

export default defineConfig({
  title: "3DS Hacks Guide",
  description: "Documentation for NSMWHF - A next-generation tool for modifying Super Mario World (1990)",
  head: [
    ['link', { rel: 'icon', href: '/images/site-config/favicon.ico' }],
    ['script', {}, `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-760Y60FQ3T');`]
  ],
  locales: {
    root: i18n.en_US
  },
  sitemap: {
    hostname: 'https://nsmwhf-team.github.io/nsmwhf-docs/'
  },
  themeConfig: {
    outline: {
      level: 'deep'
    },
    docFooter: {
      prev: false,
      next: false
    },
    socialLinks: [
      { icon: 'discord', link: 'it's not public yet' },
      { icon: 'github', link: 'https://github.com/nsmwhf-team/nsmwhf-docs/' }
    ]
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHero\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPHero.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPFooter.vue', import.meta.url)
          )
        },
        {
          find: /^.*\/VPDocOutlineItem\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPDocOutlineItem.vue', import.meta.url)
          )
        }
      ]
    }
  },
  srcExclude: [
    '**/_include/**',
    '**/_internal/**'
  ]
})
