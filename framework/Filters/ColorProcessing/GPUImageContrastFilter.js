'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';

const GPUImageContrastFragShaderString = GPUImageFragShaderPredefineString + `
uniform mediump float u_contrast;
void main() {
    lowp vec4 texColor = texture2D(u_texture_0, v_texCoord);
    gl_FragColor = vec4(((texColor.rgb - vec3(0.5)) * u_contrast + vec3(0.5)), texColor.a);
}
`;

export const GPUImageContrastFilter = GL.createComponent(
    ({children, contrast})=>{
        return (
            <GPUImageFilter 
                frag={GPUImageContrastFragShaderString}
                uniforms={{
                    u_contrast: contrast,
                }}>
                {children}
            </GPUImageFilter>
        );
    }
);