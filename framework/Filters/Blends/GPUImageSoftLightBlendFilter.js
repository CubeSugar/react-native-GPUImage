'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageTwoInputFragShaderPredefineString, 
    GPUImageTwoInputFilter,
} from '../GPUImageTwoInputFilter';

const GPUImageSoftLightBlendFragShaderString = GPUImageTwoInputFragShaderPredefineString + `
void main() {
    vec4 base = texture2D(u_texture_0, v_texCoord);
    vec4 overlay;
    if (u_texture_1_samplingScale > 1.0) {
        overlay = texture2D(u_texture_1, fract(v_texCoord * u_texture_1_samplingScale));
    } else {
        overlay = texture2D(u_texture_1, v_texCoord);
    }
    mediump float alphaDivisor = base.a + step(base.a, 0.0); // Protect against a divide-by-zero blacking out things in the output
    gl_FragColor = base * (overlay.a * (base / alphaDivisor) + (2.0 * overlay * (1.0 - (base / alphaDivisor)))) + overlay * (1.0 - base.a) + base * (1.0 - overlay.a);
}
`;

export const GPUImageSoftLightBlendFilter = GL.createComponent(
    ({ children, input2nd, input2ndScale}) => {
        return (
            <GPUImageTwoInputFilter
                frag={GPUImageSoftLightBlendFragShaderString}
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