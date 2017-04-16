'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';
import {
    GPUImage3x3TextureSamplingFragShaderPredefine,
    GPUImage3x3TextureSamplingFilter
} from '../GPUImage3x3TextureSamplingFilter';

const GPUImageToonFragShaderString = GPUImageFragShaderPredefineString +
GPUImage3x3TextureSamplingFragShaderPredefine + `
uniform float u_threshold;
uniform float u_quantizationLevels;
void main() {
    float bottomLeftIntensity  = texture2D(u_texture_0, v_texCoord_lb).r;
    float topRightIntensity    = texture2D(u_texture_0, v_texCoord_rt).r;
    float topLeftIntensity     = texture2D(u_texture_0, v_texCoord_lt).r;
    float bottomRightIntensity = texture2D(u_texture_0, v_texCoord_rb).r;
    float leftIntensity        = texture2D(u_texture_0, v_texCoord_l).r;
    float rightIntensity       = texture2D(u_texture_0, v_texCoord_r).r;
    float bottomIntensity      = texture2D(u_texture_0, v_texCoord_b).r;
    float topIntensity         = texture2D(u_texture_0, v_texCoord_t).r;

    vec4 texColor = texture2D(u_texture_0, v_texCoord);
    
    float x = -bottomLeftIntensity - 2.0 * leftIntensity - topLeftIntensity + bottomRightIntensity + 2.0 * rightIntensity + topRightIntensity;
    float y = -topLeftIntensity - 2.0 * topIntensity - topRightIntensity + bottomLeftIntensity + 2.0 * bottomIntensity + bottomRightIntensity;
    float magnitude = length(vec2(x, y));
    vec3 posterizedImageColor = floor((texColor.rgb * u_quantizationLevels) + 0.5) / u_quantizationLevels;
    float test = 1.0 - step(u_threshold, magnitude);

    gl_FragColor = vec4(posterizedImageColor * test, texColor.z);
}
`;

export const GPUImageToonFilter = GL.createComponent(
    ({children, texelWidth, texelHeight, levels, threshold})=>{
        return (
            <GPUImage3x3TextureSamplingFilter
                frag={GPUImageToonFragShaderString}
                texelWidth={texelWidth}
                texelHeight={texelHeight}
                uniforms={{
                    u_threshold: threshold,
                    u_quantizationLevels: levels,
                }}>
                {children}
            </GPUImage3x3TextureSamplingFilter>
        );
    },
    {
        defaultProps: {
            threshold: 0.2,
            levels: 10.0,
        }
    }
);