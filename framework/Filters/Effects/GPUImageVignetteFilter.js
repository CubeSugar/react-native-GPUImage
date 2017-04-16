'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';

const GPUImageVignetteFragShaderString = GPUImageFragShaderPredefineString + `
uniform mediump vec2 u_vignetteCenter;
uniform mediump vec3 u_vignetteColor;
uniform mediump float u_vignetteStart;
uniform mediump float u_vignetteEnd;

float sstep(float lower, float upper, float x) {
    float t = clamp((x - lower) / (upper - lower), 0.0, 1.0);
    return t * t * (3.0 - 2.0 * t);
}
void main() {
    vec4 texColor = texture2D(u_texture_0, v_texCoord);
    lowp float d = distance(v_texCoord, u_vignetteCenter);
    lowp float percent = sstep(u_vignetteStart, u_vignetteEnd, d);
    gl_FragColor = vec4(mix(texColor.rgb, u_vignetteColor, percent), texColor.a);
}
`;

export const GPUImageVignetteFilter = GL.createComponent(
    ({children, center, color, start, end})=>{
        return (
            <GPUImageFilter 
                frag={GPUImageVignetteFragShaderString}
                uniforms={{
                    u_vignetteCenter: center,
                    u_vignetteColor: color,
                    u_vignetteStart: start,
                    u_vignetteEnd: end,
                }}>
                {children}
            </GPUImageFilter>
        );
    },
    {
        defaultProps: {
            center: [0.5, 0.5],
            color: [0.0, 0.0, 0.0],
            start: 0.3,
            end: 0.75,
        }
    }
);