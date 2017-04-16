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

const GPUImageLocalBinaryPatternFragShaderString = GPUImageFragShaderPredefineString +
GPUImage3x3TextureSamplingFragShaderPredefine + `
void main() {
    float bottomLeftIntensity  = texture2D(u_texture_0, v_texCoord_lb).r;
    float topRightIntensity    = texture2D(u_texture_0, v_texCoord_rt).r;
    float topLeftIntensity     = texture2D(u_texture_0, v_texCoord_lt).r;
    float bottomRightIntensity = texture2D(u_texture_0, v_texCoord_rb).r;
    float leftIntensity        = texture2D(u_texture_0, v_texCoord_l).r;
    float rightIntensity       = texture2D(u_texture_0, v_texCoord_r).r;
    float bottomIntensity      = texture2D(u_texture_0, v_texCoord_b).r;
    float topIntensity         = texture2D(u_texture_0, v_texCoord_t).r;
    float centerIntensity      = texture2D(u_texture_0, v_texCoord).r;

    lowp float byteTally = 1.0 / 255.0 * step(centerIntensity, topRightIntensity);
    byteTally += 2.0 / 255.0 * step(centerIntensity, topIntensity);
    byteTally += 4.0 / 255.0 * step(centerIntensity, topLeftIntensity);
    byteTally += 8.0 / 255.0 * step(centerIntensity, leftIntensity);
    byteTally += 16.0 / 255.0 * step(centerIntensity, bottomLeftIntensity);
    byteTally += 32.0 / 255.0 * step(centerIntensity, bottomIntensity);
    byteTally += 64.0 / 255.0 * step(centerIntensity, bottomRightIntensity);
    byteTally += 128.0 / 255.0 * step(centerIntensity, rightIntensity);
         
    // TODO: Replace the above with a dot product and two vec4s
    // TODO: Apply step to a matrix, rather than individually
    
    gl_FragColor = vec4(byteTally, byteTally, byteTally, 1.0);
}
`;

export const GPUImageLocalBinaryPatternFilter = GL.createComponent(
    ({children, texelWidth, texelHeight})=>{
        return (
            <GPUImage3x3TextureSamplingFilter
                frag={GPUImageLocalBinaryPatternFragShaderString}
                texelWidth={texelWidth}
                texelHeight={texelHeight}>
                {children}
            </GPUImage3x3TextureSamplingFilter>
        );
    }
);