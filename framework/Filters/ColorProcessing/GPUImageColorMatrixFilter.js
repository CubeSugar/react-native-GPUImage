'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';

const GPUImageColorMatrixFragShaderString = GPUImageFragShaderPredefineString + `
uniform mediump mat4 u_matrix;
uniform mediump vec4 u_offset;
void main() {
    vec4 texColor = texture2D(u_texture_0, v_texCoord);
    vec4 result = texColor * u_matrix + u_offset;
    gl_FragColor = result;
}
`;

export const GPUImageColorMatrixFilter = GL.createComponent(
    ({children, matrix, offset})=>{
        return (
            <GPUImageFilter 
                frag={GPUImageColorMatrixFragShaderString}
                uniforms={{
                    u_matrix: matrix,
                    u_offset: offset,
                }}>
                {children}
            </GPUImageFilter>
        );
    }
);