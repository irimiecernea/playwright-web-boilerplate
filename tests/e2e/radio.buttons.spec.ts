import { test, expect } from '../../fixtures/page-fixture';

test('Radio Buttons Demo', async ({ radioButtons, page }) => {
  //go to radio buttons demo page
  await radioButtons.goto();
  await expect(radioButtons.title).toHaveText(/Radio button Demo/);

  //select female gender
  await radioButtons.selectGenderType('Female');
  await radioButtons.getValueButton.click();
  await expect(page.getByText("Radio button 'Female' is checked")).toBeVisible();
  //select male gender
  await radioButtons.selectGenderType('Male');
  await radioButtons.getValueButton.click();
  await expect(page.getByText("Radio button 'Male' is checked")).toBeVisible();
});
