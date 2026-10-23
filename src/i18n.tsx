import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { dictionaries } from './dictionary'
import type { Dict, Lang } from './dictionary'

interface I18n {
  lang: Lang
  t: Dict
  setLang: (lang: Lang) => void
}

const I18nContext = createContext<I18n | null>(null)

function initialLang(): Lang {
  const param = new URLSearchParams(window.location.search).get('lang')
  if (param === 'pl' || param === 'en') return param
  return navigator.language.toLowerCase().startsWith('pl') ? 'pl' : 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    const url = new URL(window.location.href)
    url.searchParams.set('lang', next)
    window.history.replaceState(null, '', url)
  }, [])

  useEffect(() => {
    const dict = dictionaries[lang]
    document.documentElement.lang = lang
    document.title = dict.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', dict.meta.description)
  }, [lang])

  const value = useMemo(() => ({ lang, t: dictionaries[lang], setLang }), [lang, setLang])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18n {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider')
  return ctx
}
