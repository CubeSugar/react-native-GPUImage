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

const GPUImageWeakPixelInclusionShaderString = GPUImageFragShaderPredefineString +
GPUImage3x3TextureSamplingFragShaderPredefine + `
void main() {
    float intensityLB = texture2D(u_texture_0, v_texCoord_lb).r;
    float intensityRT = texture2D(u_texture_0, v_texCoord_rt).r;
    float intensityLT = texture2D(u_texture_0, v_texCoord_lt).r;
    float intensityRB = texture2D(u_texture_0, v_texCoord_rb).r;
    float intensityL  = texture2D(u_texture_0, v_texCoord_l).r;
    float intensityR  = texture2D(u_texture_0, v_texCoord_r).r;
    float intensityB  = texture2D(u_texture_0, v_texCoord_b).r;
    float intensityT  = texture2D(u_texture_0, v_texCoord_t).r;
    float intensityC  = texture2D(u_texture_0, v_texCoord).r;
    float intensitySum = intensityLT + intensityT + intensityRT + intensityL + intensityR +
                         intensityLB + intensityB + intensityRB + intensityC;

    float sumTest = step(0.5, intensitySum);
    float pixelTest = step(0.001, intensityC);
    gl_FragColor = vec4(vec3(sumTest * pixelTest), 1.0);
}
`;

export const GPUImageWeakPixelInclusionFilter = GL.createComponent(
    ({children, texelWidth, texelHeight})=>{
        return (
            <GPUImage3x3TextureSamplingFilter
                frag={GPUImageWeakPixelInclusionShaderString}
                texelWidth={texelWidth}
                texelHeight={texelHeight}>
                {children}
            </GPUImage3x3TextureSamplingFilter>
        );
    }
);