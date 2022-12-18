import { test as base } from '@playwright/test';
import { RadioButtons } from '../tests/page-objects/radio.buttons.page';
import { Slider } from '../tests/page-objects/slider.page';

type pages = {
  slider: Slider;
  radioButtons: RadioButtons;
};

const testPages = base.extend<pages>({
  slider: async ({ page }, use) => {
    await use(new Slider(page));
  },
  radioButtons: async ({ page }, use) => {
    await use(new RadioButtons(page));
  },
});

export const test = testPages;
export const expect = testPages.expect;
