import {test} from "../../fixtures/page-fixture";

test("Slider Demo", async ({ sliderPO }) => {
    //go to slider demo page
    await sliderPO.goto();

    //move the slider in order to set a desired value
   await  sliderPO.changeSliderValueTo('82500')
});
