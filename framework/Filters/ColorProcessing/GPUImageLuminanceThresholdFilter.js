'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';

const GPUImageLuminanceThresholdFragShaderString = GPUImageFragShaderPredefineString + `
uniform float u_threshold;
void main() {
    vec4 texColor = texture2D(u_texture_0, v_texCoord);
    float luminance = step(u_threshold, dot(texColor.rgb, vec3(0.2125, 0.7154, 0.0721)));
    gl_FragColor = vec4(luminance, luminance, luminance, texColor.a);
}
`;

export const GPUImageLuminanceThresholdFilter = GL.createComponent(
    ({children, threshold})=>{
        return (
            <GPUImageFilter 
                frag={GPUImageLuminanceThresholdFragShaderString}
                uniforms={{
                    u_threshold: threshold,
                }}>
                {children}
            </GPUImageFilter>
        );
    }
);