'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from './GPUImageFilter';

export const GPUImageTwoInputFragShaderPredefineString = GPUImageFragShaderPredefineString + `
uniform sampler2D u_texture_1;
uniform float u_texture_1_samplingScale;
`;

const GPUImageTwoInputFragShaderString = GPUImageTwoInputFragShaderPredefineString + `
void main() {
    vec4 texColor0 = texture2D(u_texture_0, v_texCoord);
    vec4 texColor1;
    if (u_texture_1_samplingScale > 1.0) {
        texColor1 = texture2D(u_texture_1, fract(v_texCoord * u_texture_1_samplingScale));
    } else {
        texColor1 = texture2D(u_texture_1, v_texCoord);
    }
    gl_FragColor = texColor0 + texColor1;
}
`;

export const GPUImageTwoInputFilter = GL.createComponent(
    ({ children, frag, input2nd, input2ndScale, uniforms }) => {
        return (
            <GPUImageFilter
                frag={frag || GPUImageTwoInputFragShaderString}
                uniforms={{
                    u_texture_1: input2nd,
                    u_texture_1_samplingScale: input2ndScale,
                    ...uniforms,
                }}>
                {children}
            </GPUImageFilter>
        );
    }, {
        defaultProps: {
            input2ndScale: 1.0,
        }
    }
);