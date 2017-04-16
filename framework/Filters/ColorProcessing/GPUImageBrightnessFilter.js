'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';

const GPUImageBrightnessFragShaderString = GPUImageFragShaderPredefineString + `
uniform mediump float u_brightness;
void main() {
    vec4 texColor = texture2D(u_texture_0, v_texCoord);
    gl_FragColor = vec4((texColor.rgb + u_brightness), texColor.a);
}
`;

export const GPUImageBrightnessFilter = GL.createComponent(
    ({children, brightness})=>{
        return (
            <GPUImageFilter 
                frag={GPUImageBrightnessFragShaderString}
                uniforms={{
                    u_brightness: brightness,
                }}>
                {children}
            </GPUImageFilter>
        );
    },
);