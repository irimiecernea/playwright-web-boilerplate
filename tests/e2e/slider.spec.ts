import { test, expect } from '../../fixtures/page-fixture';

test('Slider Demo', async ({ sliderPO }) => {
  //go to slider demo page
  await sliderPO.goto();
  expect(sliderPO.title).toHaveText(/SIP Calculator/);

  //move the slider in order to set a desired value
  await sliderPO.changeSliderValueTo(27_500);
  await sliderPO.changeSliderValueTo(11_500);
});
