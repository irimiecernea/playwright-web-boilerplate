import { test, expect } from '../../fixtures/page-fixture';

test('Radio Buttons Demo', async ({ radioButtons }) => {
  //go to radio buttons demo page
  await radioButtons.goto();
  expect(radioButtons.title).toHaveText(/Radio button Demo/);

  //select female gender
  await radioButtons.selectGenderType('Female');
  await radioButtons.getCheckedValueButton.click();
  expect(radioButtons.selectedRadioButton).toHaveText(
    "Radio button 'Female' is checked"
  );
  //select male gender
  await radioButtons.selectGenderType('Male');
  await radioButtons.getCheckedValueButton.click();
  expect(radioButtons.selectedRadioButton).toHaveText(
    "Radio button 'Male' is checked"
  );
});
