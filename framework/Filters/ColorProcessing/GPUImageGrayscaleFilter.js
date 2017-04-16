'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';

const GPUImageLuminanceFragShaderString = GPUImageFragShaderPredefineString + `
void main() {
    lowp vec4 texColor = texture2D(u_texture_0, v_texCoord);
    float luminance = dot(texColor.rgb, vec3(0.2125, 0.7154, 0.0721));
    gl_FragColor = vec4(luminance, luminance, luminance, texColor.a);
}
`;

export const GPUImageGrayscaleFilter = GL.createComponent(
    ({children})=>{
        return (
            <GPUImageFilter frag={GPUImageLuminanceFragShaderString}>
                {children}
            </GPUImageFilter>
        );
    }
);