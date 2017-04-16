'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';

const GPUImageHalftoneFragShaderString = GPUImageFragShaderPredefineString + `
uniform float u_fractionalWidthOfPixel;
uniform float u_aspectRatio;

const vec3 W = vec3(0.2125, 0.7145, 0.0721);

void main() {
    vec2 sampleDivisor = vec2(u_fractionalWidthOfPixel, u_fractionalWidthOfPixel / u_aspectRatio);
    vec2 samplePos     = v_texCoord - mod(v_texCoord, sampleDivisor) + 0.5 * sampleDivisor;
    vec2 texCoordToUse = vec2(v_texCoord.x, (v_texCoord.y * u_aspectRatio + 0.5 - 0.5 * u_aspectRatio));
    vec2 adjustedSamplePos          = vec2(samplePos.x, (samplePos.y * u_aspectRatio + 0.5 - 0.5 * u_aspectRatio));
    float distanceFromSamplePoint   = distance(adjustedSamplePos, texCoordToUse);
    vec3 texColor = texture2D(u_texture_0, samplePos).rgb;
    float dotScaling = 1.0 - dot(texColor, W);
    mediump float checkForPresenceWithinDot = 1.0 - step(distanceFromSamplePoint, (u_fractionalWidthOfPixel * 0.5) * dotScaling);
    gl_FragColor = vec4(vec3(checkForPresenceWithinDot), 1.0);
}
`;

export const GPUImageHalftoneFilter = GL.createComponent(
    ({children, aspectRatio, fractionalWidthOfPixel})=>{
        return (
            <GPUImageFilter 
                frag={GPUImageHalftoneFragShaderString}
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