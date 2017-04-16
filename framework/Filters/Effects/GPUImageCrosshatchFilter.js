'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';

const GPUImageCrosshatchFragShaderString = GPUImageFragShaderPredefineString + `
uniform float u_crossHatchSpacing;
uniform float u_lineWidth;

const vec3 W = vec3(0.2125, 0.7154, 0.0721);

void main() {
    float luminance = dot(texture2D(u_texture_0, v_texCoord).rgb, W);
    
    lowp vec4 colorToDisplay = vec4(1.0, 1.0, 1.0, 1.0);
    if (luminance < 1.00) {
        if (mod(v_texCoord.x + v_texCoord.y, u_crossHatchSpacing) <= u_lineWidth) {
            colorToDisplay = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
    if (luminance < 0.75) {
        if (mod(v_texCoord.x - v_texCoord.y, u_crossHatchSpacing) <= u_lineWidth) {
            colorToDisplay = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
    if (luminance < 0.50) {
        if (mod(v_texCoord.x + v_texCoord.y - (u_crossHatchSpacing / 2.0), u_crossHatchSpacing) <= u_lineWidth) {
            colorToDisplay = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
    if (luminance < 0.3) {
        if (mod(v_texCoord.x - v_texCoord.y - (u_crossHatchSpacing / 2.0), u_crossHatchSpacing) <= u_lineWidth) {
            colorToDisplay = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    gl_FragColor = colorToDisplay;
}
`;

export const GPUImageCrosshatchFilter = GL.createComponent(
    ({children, lineWidth, spacing})=>{
        return (
            <GPUImageFilter 
                frag={GPUImageCrosshatchFragShaderString}
                uniforms={{
                    u_crossHatchSpacing: spacing,
                    u_lineWidth: lineWidth,
                }}>
                {children}
            </GPUImageFilter>
        );
    },
    {
        defaultProps: {
            lineWidth: 0.003,
            spacing: 0.03,
        }
    }
);