import { test as base } from "@playwright/test";
import { SliderPO } from "../tests/page-objects/slider";

type pages = {
  sliderPO: SliderPO;
};

const testPages = base.extend<pages>({
  sliderPO: async ({ page }, use) => {
    await use(new SliderPO(page));
  },
});

export const test = testPages;
export const expect = testPages.expect;
