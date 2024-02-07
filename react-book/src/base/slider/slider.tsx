import React from "react";
import cx from 'classnames';

import './styles/'



const classPrefix = 'ygm-slider';

const Slider = React.forwardRef<SliderRef, SliderProps>((props) => {
    return <div>slider</div>;
})

Slider.defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    value: 0
};

Slider.displayName = "Slider";

export default Slider;