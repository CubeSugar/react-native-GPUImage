'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';

const GPUImageGammaFragShaderString = GPUImageFragShaderPredefineString + `
uniform mediump float u_gamma;
void main() {
    vec4 texColor = texture2D(u_texture_0, v_texCoord);
    gl_FragColor = vec4(pow(texColor.rgb, vec3(u_gamma)), texColor.a);
}
`;

export const GPUImageGammaFilter = GL.createComponent(
    ({children, gamma})=>{
        return (
            <GPUImageFilter 
                frag={GPUImageGammaFragShaderString}
                uniforms={{
                    u_gamma: gamma,
                }}>
                {children}
            </GPUImageFilter>
        );
    },
);