class Theme {
  constructor() {
    this.STORAGE_KEY = 'user-color-scheme';
    this.COLOR_MODE_KEY = '--color-mode';
    this.modeToggleButton = document.querySelector('.js-mode-toggle');
    this.modeToggleText = document.querySelector('.js-mode-toggle-text');
    this.modeStatusElement = document.querySelector('.js-mode-status');
    this.modeIconLight = document.querySelector('.js-mode-icon-light');
    this.modeIconDark = document.querySelector('.js-mode-icon-dark');
    this.init();
  }

  getCSSCustomProp(propKey) {
    let response = getComputedStyle(document.documentElement).getPropertyValue(propKey);

    if (response.length) {
      response = response.replace(/\'|"/g, '').trim();
    }

    return response;
  }

  applySetting(passedSetting) {
    let currentSetting = passedSetting || localStorage.getItem(this.STORAGE_KEY);

    if(currentSetting) {
      document.documentElement.setAttribute('data-user-color-scheme', currentSetting);
      this.setButtonLabelAndStatus(currentSetting);
    }
    else {
      let currentSetting = this.getCSSCustomProp(this.COLOR_MODE_KEY);
      document.documentElement.setAttribute('data-user-color-scheme', currentSetting);
      this.setButtonLabelAndStatus(currentSetting);
    }
  }

  toggleSetting() {
    let currentSetting = localStorage.getItem(this.STORAGE_KEY);

    switch(currentSetting) {
      case null:
        currentSetting = this.getCSSCustomProp(this.COLOR_MODE_KEY) === 'dark' ? 'light' : 'dark';
        break;
      case 'light':
        currentSetting = 'dark';
        break;
      case 'dark':
        currentSetting = 'light';
        break;
    }

    localStorage.setItem(this.STORAGE_KEY, currentSetting);

    return currentSetting;
  }

  setButtonLabelAndStatus(currentSetting) {
    this.modeToggleText.innerText = `${currentSetting === 'dark' ? 'Light theme' : 'Dark theme'}`;
    this.modeStatusElement.innerText = `Theme is now ${currentSetting === 'dark' ? 'light' : 'dark'}`;
    this.modeIconLight.classList.toggle('u-hidden', currentSetting === 'dark');
    this.modeIconDark.classList.toggle('u-hidden', currentSetting === 'light');
  }

  init() {
    this.modeToggleButton.addEventListener('click', evt => {
      evt.preventDefault();
      this.applySetting(this.toggleSetting());
    });

    this.applySetting();

    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }
}

export default Theme;

new Theme;