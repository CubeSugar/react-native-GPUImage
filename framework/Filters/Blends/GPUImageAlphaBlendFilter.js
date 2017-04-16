'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageTwoInputFragShaderPredefineString, 
    GPUImageTwoInputFilter,
} from '../GPUImageTwoInputFilter';

const GPUImageAlphaBlendFragShaderString = GPUImageTwoInputFragShaderPredefineString + `
uniform float u_mixPercent;
void main() {
    vec4 texColor0 = texture2D(u_texture_0, v_texCoord);
    vec4 texColor1;
    if (u_texture_1_samplingScale > 1.0) {
        texColor1 = texture2D(u_texture_1, fract(v_texCoord * u_texture_1_samplingScale));
    } else {
        texColor1 = texture2D(u_texture_1, v_texCoord);
    }

    gl_FragColor = vec4(mix(texColor0.rgb, texColor1.rgb, texColor1.a * u_mixPercent), texColor0.a);
}
`;

export const GPUImageAlphaBlendFilter = GL.createComponent(
    ({ children, input2nd, mixPercent, input2ndScale}) => {
        return (
            <GPUImageTwoInputFilter
                frag={GPUImageAlphaBlendFragShaderString}
                input2nd={input2nd}
                input2ndScale={input2ndScale}
                uniforms={{
                    u_mixPercent: mixPercent,
                }}>
                {children}
            </GPUImageTwoInputFilter>
        );
    }, {
        defaultProps: {
            input2ndScale: 1.0,
            mixPercent: 0.5,
        }
    }
);