'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageTwoInputFragShaderPredefineString, 
    GPUImageTwoInputFilter,
} from '../GPUImageTwoInputFilter';

const GPUImageDivideBlendFragShaderString = GPUImageTwoInputFragShaderPredefineString + `
void main() {
    vec4 base = texture2D(u_texture_0, v_texCoord);
    vec4 overlay;
    if (u_texture_1_samplingScale > 1.0) {
        overlay = texture2D(u_texture_1, fract(v_texCoord * u_texture_1_samplingScale));
    } else {
        overlay = texture2D(u_texture_1, v_texCoord);
    }

    mediump float ra;
    if (overlay.a == 0.0 || ((base.r / overlay.r) > (base.a / overlay.a)))
        ra = overlay.a * base.a + overlay.r * (1.0 - base.a) + base.r * (1.0 - overlay.a);
    else
        ra = (base.r * overlay.a * overlay.a) / overlay.r + overlay.r * (1.0 - base.a) + base.r * (1.0 - overlay.a);

    mediump float ga;
    if (overlay.a == 0.0 || ((base.g / overlay.g) > (base.a / overlay.a)))
        ga = overlay.a * base.a + overlay.g * (1.0 - base.a) + base.g * (1.0 - overlay.a);
    else
        ga = (base.g * overlay.a * overlay.a) / overlay.g + overlay.g * (1.0 - base.a) + base.g * (1.0 - overlay.a);
    
    mediump float ba;
    if (overlay.a == 0.0 || ((base.b / overlay.b) > (base.a / overlay.a)))
        ba = overlay.a * base.a + overlay.b * (1.0 - base.a) + base.b * (1.0 - overlay.a);
    else
        ba = (base.b * overlay.a * overlay.a) / overlay.b + overlay.b * (1.0 - base.a) + base.b * (1.0 - overlay.a);

    mediump float a = overlay.a + base.a - overlay.a * base.a;
    gl_FragColor = vec4(ra, ga, ba, a);
}
`;

export const GPUImageDivideBlendFilter = GL.createComponent(
    ({ children, input2nd, input2ndScale}) => {
        return (
            <GPUImageTwoInputFilter
                frag={GPUImageDivideBlendFragShaderString}
                input2nd={input2nd}
                input2ndScale={input2ndScale}>
                {children}
            </GPUImageTwoInputFilter>
        );
    }, {
        defaultProps: {
            input2ndScale: 1.0,
        }
    }
);