'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageTwoInputFragShaderPredefineString, 
    GPUImageTwoInputFilter,
} from '../GPUImageTwoInputFilter';

const GPUImageColorBurnBlendFragShaderString = GPUImageTwoInputFragShaderPredefineString + `
void main() {
    vec4 texColor0 = texture2D(u_texture_0, v_texCoord);
    vec4 texColor1;
    if (u_texture_1_samplingScale > 1.0) {
        texColor1 = texture2D(u_texture_1, fract(v_texCoord * u_texture_1_samplingScale));
    } else {
        texColor1 = texture2D(u_texture_1, v_texCoord);
    }

    mediump vec4 whiteColor = vec4(1.0);
    gl_FragColor = whiteColor - (whiteColor - texColor0) / texColor1;
}
`;

export const GPUImageColorBurnBlendFilter = GL.createComponent(
    ({ children, input2nd, input2ndScale}) => {
        return (
            <GPUImageTwoInputFilter
                frag={GPUImageColorBurnBlendFragShaderString}
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