import { type Locator, type Page } from "playwright/test";
type gender = "Male" | "Female";

export class RadioButtons {
  readonly page: Page;
  readonly title: Locator;
  readonly maleRadioButton: Locator;
  readonly femaleRadioButton: Locator;
  readonly getValueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator("div[class=container] h1");
    this.maleRadioButton = page.locator("input[value=Male][name=optradio]");
    this.femaleRadioButton = page.locator("input[value=Female][name=optradio]");
    this.getValueButton = page.locator("#buttoncheck");
  }

  async goto() {
    await this.page.goto(
      "https://www.lambdatest.com/selenium-playground/radiobutton-demo",
    );
  }

  async selectGenderType(gender: gender) {
    if (gender === "Male") {
      await this.maleRadioButton.click();
    } else {
      await this.femaleRadioButton.click();
    }
  }
}
