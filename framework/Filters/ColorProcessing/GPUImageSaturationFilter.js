'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';

const GPUImageSaturationFragShaderString = GPUImageFragShaderPredefineString + `
uniform mediump float u_saturation;
void main() {
    vec4 texColor = texture2D(u_texture_0, v_texCoord);
    mediump float luminance = dot(texColor.rgb, vec3(0.2125, 0.7154, 0.0721));
    vec3 grayColor = vec3(luminance);
    gl_FragColor = vec4(mix(grayColor, texColor.rgb, u_saturation), texColor.a);

}
`;

export const GPUImageSaturationFilter = GL.createComponent(
    ({children, saturation})=>{
        return (
            <GPUImageFilter 
                frag={GPUImageSaturationFragShaderString}
                uniforms={{
                    u_saturation: saturation,
                }}>
                {children}
            </GPUImageFilter>
        );
    }
);