'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';

const GPUImagePixelateFragShaderString = GPUImageFragShaderPredefineString + `
uniform float u_fractionalWidthOfPixel;
uniform float u_aspectRatio;

void main() {
    vec2 sampleDivisor = vec2(u_fractionalWidthOfPixel, u_fractionalWidthOfPixel / u_aspectRatio);
    vec2 samplePos     = v_texCoord - mod(v_texCoord, sampleDivisor) + 0.5 * sampleDivisor;
    gl_FragColor = texture2D(u_texture_0, samplePos);
}
`;

export const GPUImagePixelateFilter = GL.createComponent(
    ({children, aspectRatio, fractionalWidthOfPixel})=>{
        return (
            <GPUImageFilter 
                frag={GPUImagePixelateFragShaderString}
                uniforms={{
                    u_fractionalWidthOfPixel: fractionalWidthOfPixel,
                    u_aspectRatio: aspectRatio,
                }}>
                {children}
            </GPUImageFilter>
        );
    },
    {
        defaultProps: {
            fractionalWidthOfPixel: 0.02,
            aspectRatio: 1.0,
        }
    }
);