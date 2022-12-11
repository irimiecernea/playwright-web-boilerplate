import { Locator, Page } from "@playwright/test";

export class SliderPO {
  readonly page: Page;
  readonly title: Locator;
  readonly slider: Locator;
  readonly sliderValue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator("'SIP Calculator'").nth(0);
    this.slider = page.locator("(//div[@role='slider'])[1]");
    this.sliderValue = page.locator("#MONTHLY_INVESTMENT");
  }

  async goto() {
    await this.page.goto("https://groww.in/calculators/sip-calculator");
  }

  async changeSliderValueTo(amount: string) {
    await this.slider.waitFor({state: "visible"});
    let isCompleted = false;
    if (this.slider) {
      while (!isCompleted) {
        let srcBound = await this.slider.boundingBox();
        if (srcBound) {
          await this.page.mouse.move(
            srcBound.x + srcBound.width / 2,
            srcBound.y + srcBound.height / 2
          );
          await this.page.mouse.down();
          await this.page.mouse.move(
            srcBound.x + 15,
            srcBound.y + srcBound.height / 2
          );
          await this.page.mouse.up();
          let text = await this.sliderValue.inputValue();
          if (text == amount) {
            isCompleted = true;
          }
        }
      }
    }
  }
}