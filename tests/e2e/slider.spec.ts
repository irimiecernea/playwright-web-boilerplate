import { test, expect } from '../../fixtures/page-fixtures';

test('Slider Demo', async ({ slider }) => {
  //go to slider demo page
  await slider.goto();
  await expect(slider.title).toHaveText(/SIP Calculator/);

  //move the slider in order to set a desired value
  await slider.changeSliderValueTo(30);
});
