<script setup>
import { useLanguage } from './composables/useLanguage.js'
import { useScrollReveal } from './composables/useScrollReveal.js'
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import ProblemsSection from './components/ProblemsSection.vue'
import AppsSection from './components/AppsSection.vue'
import WorkSection from './components/WorkSection.vue'
import HowSection from './components/HowSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import StackSection from './components/StackSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

const { lang, t, setLang } = useLanguage()
useScrollReveal()
</script>

<template>
  <SiteNav :t="t" :lang="lang" @set-lang="setLang" />
  <main>
    <HeroSection :t="t" :lang="lang" />
    <ProblemsSection :t="t" />
    <AppsSection :t="t" />
    <WorkSection :t="t" />
    <HowSection :t="t" />
    <ExperienceSection :t="t" />
    <StackSection :t="t" />
    <FaqSection :t="t" />
    <ContactSection :t="t" />
  </main>
  <SiteFooter :t="t" />
</template>
