'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type Lang = 'es' | 'en'

interface LanguageContextValue {
  lang: Lang
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'es',
  toggleLang: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved === 'es' || saved === 'en') setLang(saved)
  }, [])

  const toggleLang = () => {
    const next: Lang = lang === 'es' ? 'en' : 'es'
    setLang(next)
    localStorage.setItem('lang', next)
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
