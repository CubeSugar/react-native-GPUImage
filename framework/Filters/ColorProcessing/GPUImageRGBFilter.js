'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';

const GPUImageRGBFragShaderString = GPUImageFragShaderPredefineString + `
uniform mediump float u_r;
uniform mediump float u_g;
uniform mediump float u_b;
void main() {
    vec4 texColor = texture2D(u_texture_0, v_texCoord);
    gl_FragColor = vec4(texColor.r * u_r,
                        texColor.g * u_g,
                        texColor.b * u_b,
                        texColor.a);
}
`;

export const GPUImageRGBFilter = GL.createComponent(
    ({children, r, g, b})=>{
        return (
            <GPUImageFilter 
                frag={GPUImageRGBFragShaderString}
                uniforms={{
                    u_r: r,
                    u_g: g,
                    u_b: b,
                }}>
                {children}
            </GPUImageFilter>
        );
    },
);