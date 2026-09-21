import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let observer = null
  let onHashChange = null
  let onScroll = null

  onMounted(() => {
    const nodes = [...document.querySelectorAll('.fade-in')]
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const isAlreadyOnScreen = (el) =>
      el.getBoundingClientRect().top < window.innerHeight * 0.42

    const reveal = (el, instant = false) => {
      el.classList.add('visible')
      if (instant) el.classList.add('caught-up')
      observer?.unobserve(el)
    }

    const catchUp = () => {
      nodes.forEach((el) => {
        if (el.classList.contains('caught-up')) return
        if (isAlreadyOnScreen(el)) reveal(el, true)
      })
    }

    if (reduced) {
      nodes.forEach((el) => reveal(el, true))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          reveal(entry.target, isAlreadyOnScreen(entry.target))
        })
      },
      { threshold: 0, rootMargin: '0px 0px 28% 0px' }
    )

    onHashChange = () => {
      const id = window.location.hash.slice(1)
      const el = id ? document.getElementById(id) : null
      if (el?.classList.contains('fade-in')) reveal(el, true)
      catchUp()
    }

    onScroll = catchUp

    nodes.forEach((el) => observer.observe(el))
    catchUp()
    onHashChange()
    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('scroll', onScroll, { passive: true })
  })

  onUnmounted(() => {
    if (onHashChange) window.removeEventListener('hashchange', onHashChange)
    if (onScroll) window.removeEventListener('scroll', onScroll)
    observer?.disconnect()
  })
}
