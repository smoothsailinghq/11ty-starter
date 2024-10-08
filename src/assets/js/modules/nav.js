import { createFocusTrap } from 'focus-trap';

const SELECTORS = {
  nav: '.js-nav',
  toggleBtn: '.js-nav-toggle'
}

const CLASSES = {
  open: 'is-open',
  nav: 'has-nav'
}

export class Navigation {
  constructor() {
    this.isOpen = false

    this.nav = document.querySelector(SELECTORS.nav)
    this.toggleBtn = this.nav.querySelector(SELECTORS.toggleBtn)
    this.focusTrap = createFocusTrap(this.nav)

    this.toggleBtn.addEventListener('click', () => this.toggleMenu())
  }

  toggleMenu(force) {
    this.isOpen = typeof force === 'boolean' ? force : !this.isOpen

    this.nav.classList.toggle(CLASSES.open, this.isOpen)
    this.toggleBtn.setAttribute('aria-expanded', String(this.isOpen))

    let htmlElement = document.getElementsByTagName("html")[0];
    htmlElement.classList.toggle(CLASSES.nav, this.isOpen)

    if (this.isOpen) {
      this.focusTrap.activate()
    } else {
      this.focusTrap.deactivate()
    }
  }
}

window.Navigation = Navigation;