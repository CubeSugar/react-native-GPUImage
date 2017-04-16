'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';

const GPUImagePixelatePositionFragShaderString = GPUImageFragShaderPredefineString + `
uniform float u_fractionalWidthOfPixel;
uniform float u_aspectRatio;
uniform lowp vec2 u_pixelateCenter;
uniform float u_pixelateRadius;

void main() {
    vec2 texCoordToUse = vec2(v_texCoord.x, (v_texCoord.y * u_aspectRatio + 0.5 - 0.5 * u_aspectRatio));
    float dis = distance(u_pixelateCenter, texCoordToUse);
    if (dis < u_pixelateRadius) {
        vec2 sampleDivisor = vec2(u_fractionalWidthOfPixel, u_fractionalWidthOfPixel / u_aspectRatio);
        vec2 samplePos     = v_texCoord - mod(v_texCoord, sampleDivisor) + 0.5 * sampleDivisor;
        gl_FragColor = texture2D(u_texture_0, samplePos);
    } else {
        gl_FragColor = texture2D(u_texture_0, v_texCoord);
    }
}
`;

export const GPUImagePixelatePositionFilter = GL.createComponent(
    ({children, fractionalWidthOfPixel, center, radius, aspectRatio})=>{
        return (
            <GPUImageFilter 
                frag={GPUImagePixelatePositionFragShaderString}
                uniforms={{
                    u_fractionalWidthOfPixel: fractionalWidthOfPixel,
                    u_aspectRatio: aspectRatio,
                    u_pixelateCenter: center,
                    u_pixelateRadius: radius,
                }}>
                {children}
            </GPUImageFilter>
        );
    },
    {
        defaultProps: {
            fractionalWidthOfPixel: 0.02,
            aspectRatio: 1.0,
            center: [0.5, 0.5],
            radius: 0.25,
        }
    }
);