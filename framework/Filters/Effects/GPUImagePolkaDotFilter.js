'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';

const GPUImagePolkaDotFragShaderString = GPUImageFragShaderPredefineString + `
uniform float u_fractionalWidthOfPixel;
uniform float u_aspectRatio;
uniform float u_dotScaling;

void main() {
    vec2 sampleDivisor = vec2(u_fractionalWidthOfPixel, u_fractionalWidthOfPixel / u_aspectRatio);
    vec2 samplePos     = v_texCoord - mod(v_texCoord, sampleDivisor) + 0.5 * sampleDivisor;
    vec2 texCoordToUse = vec2(v_texCoord.x, (v_texCoord.y * u_aspectRatio + 0.5 - 0.5 * u_aspectRatio));
    vec2 adjustedSamplePos          = vec2(samplePos.x, (samplePos.y * u_aspectRatio + 0.5 - 0.5 * u_aspectRatio));
    float distanceFromSamplePoint   = distance(adjustedSamplePos, texCoordToUse);
    float checkForPresenceWithinDot = step(distanceFromSamplePoint, (u_fractionalWidthOfPixel * 0.5) * u_dotScaling);
    vec4 texColor = texture2D(u_texture_0, samplePos);
    gl_FragColor = vec4(texColor.rgb * checkForPresenceWithinDot, texColor.a);
}
`;

export const GPUImagePolkaDotFilter = GL.createComponent(
    ({children, dotScaling, aspectRatio, fractionalWidthOfPixel})=>{
        return (
            <GPUImageFilter 
                frag={GPUImagePolkaDotFragShaderString}
                uniforms={{
                    u_fractionalWidthOfPixel: fractionalWidthOfPixel,
                    u_aspectRatio: aspectRatio,
                    u_dotScaling: dotScaling,
                }}>
                {children}
            </GPUImageFilter>
        );
    },
    {
        defaultProps: {
            fractionalWidthOfPixel: 0.02,
            aspectRatio: 1.0,
            dotScaling: 0.9,
        }
    }
);