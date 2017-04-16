'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageTwoInputFragShaderPredefineString, 
    GPUImageTwoInputFilter,
} from '../GPUImageTwoInputFilter';

const GPUImageDarkenBlendFragShaderString = GPUImageTwoInputFragShaderPredefineString + `
void main() {
    vec4 base = texture2D(u_texture_0, v_texCoord);
    vec4 overlay;
    if (u_texture_1_samplingScale > 1.0) {
        overlay = texture2D(u_texture_1, fract(v_texCoord * u_texture_1_samplingScale));
    } else {
        overlay = texture2D(u_texture_1, v_texCoord);
    }
    gl_FragColor = vec4(min(overlay.rgb * base.a, base.rgb * overlay.a) + overlay.rgb * (1.0 - base.a) + base.rgb * (1.0 - overlay.a), 1.0);
}
`;

export const GPUImageDarkenBlendFilter = GL.createComponent(
    ({ children, input2nd, input2ndScale}) => {
        return (
            <GPUImageTwoInputFilter
                frag={GPUImageDarkenBlendFragShaderString}
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