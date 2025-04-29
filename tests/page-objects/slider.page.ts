import { type Locator, type Page } from "playwright/test";

export class Slider {
  readonly page: Page;
  readonly title: Locator;
  readonly sliderHandle: Locator;
  readonly sliderValue: Locator;
  readonly minSliderValue: number;
  readonly maxSliderValue: number;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator("'SIP Calculator'").nth(0);
    this.sliderHandle = page.locator("//div[@role='slider']").nth(1);
    this.sliderValue = page.locator("#RETURN_RATE");
    this.minSliderValue = 1;
    this.maxSliderValue = 30;
  }

  async goto() {
    await this.page.goto("https://groww.in/calculators/sip-calculator");
  }

  async changeSliderValueTo(amount: number) {
    if (amount < this.minSliderValue || amount > this.maxSliderValue) {
      throw new Error(
        `Amount must be no less than ${this.minSliderValue} and no higher than ${this.maxSliderValue}`,
      );
    }

    await this.sliderHandle.waitFor({ state: "visible" });
    let isCompleted = false;
    while (!isCompleted) {
      const srcBound = await this.sliderHandle.boundingBox();
      if (srcBound) {
        await this.page.mouse.move(
          srcBound.x + srcBound.width / 2,
          srcBound.y + srcBound.height / 2,
        );
        await this.page.mouse.down();
        if (amount > 12) {
          await this.page.mouse.move(
            srcBound.x + 15,
            srcBound.y + srcBound.height / 2,
          );
        } else {
          await this.page.mouse.move(
            srcBound.x - 15,
            srcBound.y + srcBound.height / 2,
          );
        }
        await this.page.mouse.up();
        const text = await this.sliderValue.inputValue();
        if (text == amount.toString()) {
          isCompleted = true;
        }
      }
    }
  }
}
