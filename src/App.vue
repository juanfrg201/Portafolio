<script setup>
import { useLanguage } from './composables/useLanguage.js'
import { useScrollReveal } from './composables/useScrollReveal.js'
import StatusBar from './components/StatusBar.vue'
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import StackSection from './components/StackSection.vue'
import ProblemsSection from './components/ProblemsSection.vue'
import HowSection from './components/HowSection.vue'
import AppsSection from './components/AppsSection.vue'
import WorkSection from './components/WorkSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import FaqSection from './components/FaqSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

const { lang, t, toggleLang } = useLanguage()
useScrollReveal()
</script>

<template>
  <StatusBar :t="t" />
  <SiteNav :t="t" :lang="lang" @toggle-lang="toggleLang" />
  <main>
    <HeroSection :t="t" />
    <StackSection :t="t" />
    <ProblemsSection :t="t" />
    <HowSection :t="t" />
    <AppsSection :t="t" />
    <WorkSection :t="t" />
    <ExperienceSection :t="t" />
    <FaqSection :t="t" />
    <ContactSection :t="t" />
  </main>
  <SiteFooter :t="t" />
</template>
