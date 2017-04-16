'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';

export const GPUImageColorInvertFragShaderString = GPUImageFragShaderPredefineString + `
void main() {
    vec4 texColor = texture2D(u_texture_0, v_texCoord);
    gl_FragColor = vec4((1.0 - texColor.rgb), texColor.a);
}
`;

export const GPUImageColorInvertFilter = GL.createComponent(
    ({children})=>{
        return (
            <GPUImageFilter frag={GPUImageColorInvertFragShaderString}>
                {children}
            </GPUImageFilter>
        );
    }
);