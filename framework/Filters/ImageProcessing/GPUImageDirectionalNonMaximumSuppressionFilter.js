'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';

const GPUImageDirectionalNonMaximumSuppressionShaderString = GPUImageFragShaderPredefineString + `
uniform float u_texel_width;
uniform float u_texel_height;
uniform float u_lower_threshold;
uniform float u_upper_threshold;

float sstep(float lower, float upper, float x) {
    float t = clamp((x - lower) / (upper - lower), 0.0, 1.0);
    return t * t * (3.0 - 2.0 * t);
}

void main() {
    vec3 currentGradientAndDirection = texture2D(u_texture_0, v_texCoord).rgb;
    vec2 gradientDirection = ((currentGradientAndDirection.gb * 2.0) - 1.0) * vec2(u_texel_width, u_texel_height);
    
    float firstSampledGradientMagnitude = texture2D(u_texture_0, v_texCoord + gradientDirection).r;
    float secondSampledGradientMagnitude = texture2D(u_texture_0, v_texCoord - gradientDirection).r;
    float thresholdCompliance = sstep(u_lower_threshold, u_upper_threshold, currentGradientAndDirection.r);
    
    float multiplier = step(firstSampledGradientMagnitude, currentGradientAndDirection.r);
    multiplier = multiplier * step(secondSampledGradientMagnitude, currentGradientAndDirection.r);
    multiplier = multiplier * thresholdCompliance;
    
    gl_FragColor = vec4(multiplier, multiplier, multiplier, 1.0);
}
`;

export const GPUImageDirectionalNonMaximumSuppressionFilter = GL.createComponent(
    ({children, texelWidth, texelHeight, lowerThreshold, upperThreshold})=>{
        return (
            <GPUImageFilter
                frag={GPUImageDirectionalNonMaximumSuppressionShaderString}
                uniforms={{
                    u_texel_width: texelWidth,
                    u_texel_height: texelHeight,
                    u_lower_threshold: lowerThreshold,
                    u_upper_threshold: upperThreshold,
                }}>
                {children}
            </GPUImageFilter>
        );
    }
);