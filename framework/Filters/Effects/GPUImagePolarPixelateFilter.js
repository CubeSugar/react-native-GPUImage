'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';

const GPUImagePolarPixelateFragShaderString = GPUImageFragShaderPredefineString + `
uniform vec2 u_polarCenter;
uniform vec2 u_pixelSize;

void main() {
    vec2 normCoord = 2.0 * v_texCoord - 1.0;
    vec2 normCenter = 2.0 * u_polarCenter - 1.0;

    normCoord -= normCenter;
    float r = length(normCoord);
    float phi = atan(normCoord.y, normCoord.x);
    r = r - mod(r, u_pixelSize.x) + 0.03;
    phi = phi - mod(phi, u_pixelSize.y);

    normCoord.x = r * cos(phi);
    normCoord.y = r * sin(phi);
    normCoord += normCenter;
    mediump vec2 texCoordToUse = normCoord / 2.0 + 0.5;
    gl_FragColor = texture2D(u_texture_0, texCoordToUse);
}
`;

export const GPUImagePolarPixelateFilter = GL.createComponent(
    ({children, center, pixelSize})=>{
        return (
            <GPUImageFilter 
                frag={GPUImagePolarPixelateFragShaderString}
                uniforms={{
                    u_polarCenter: center,
                    u_pixelSize: pixelSize,
                }}>
                {children}
            </GPUImageFilter>
        );
    },
    {
        defaultProps: {
            center: [0.5, 0.5],
            pixelSize: [0.05, 0.05],
        }
    }
);