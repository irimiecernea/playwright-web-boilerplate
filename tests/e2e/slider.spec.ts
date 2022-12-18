import { test, expect } from '../../fixtures/page-fixture';

test('Slider Demo', async ({ slider }) => {
  //go to slider demo page
  await slider.goto();
  expect(slider.title).toHaveText(/SIP Calculator/);

  //move the slider in order to set a desired value
  await slider.changeSliderValueTo(27_500);
  await slider.changeSliderValueTo(11_500);
});
