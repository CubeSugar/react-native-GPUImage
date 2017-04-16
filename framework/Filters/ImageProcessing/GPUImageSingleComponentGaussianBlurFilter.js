
'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';

const GPUImageSingleComponentGaussianBlurFragShaderString = GPUImageFragShaderPredefineString + `
uniform float u_gaussian_sigma;
uniform float u_texel_width;
uniform float u_texel_height;

/// Calculate the gaussian blur at given coords
float gaussBlur(vec2 coords) {
    int   windowSize      = 2; 
    float gaussFilter[25];
    gaussFilter[0] = 2.0; gaussFilter[1] = 4.0; 
    gaussFilter[2] = 5.0, gaussFilter[3] = 4.0;  
    gaussFilter[4] = 2.0;
    gaussFilter[5] = 4.0; gaussFilter[6] = 9.0; 
    gaussFilter[7] = 12.0, gaussFilter[8] = 9.0;  
    gaussFilter[9] = 4.0;
    gaussFilter[10] = 5.0; gaussFilter[11] = 12.0; 
    gaussFilter[12] = 15.0, gaussFilter[13] = 12.0;  
    gaussFilter[14] = 5.0;
    gaussFilter[15] = 4.0; gaussFilter[16] = 9.0; 
    gaussFilter[17] = 12.0, gaussFilter[18] = 9.0;  
    gaussFilter[19] = 4.0;
    gaussFilter[20] = 2.0; gaussFilter[21] = 4.0; 
    gaussFilter[22] = 5.0, gaussFilter[23] = 4.0;  
    gaussFilter[24] = 2.0;
    
    int   offset = 0;
    float color = 0.0;
    vec4  auxColor = vec4(0.0);
    /// Loop through the window and calculate the convolution
    for (int y = -windowSize; y <= windowSize; y++) {
        for (int x = -windowSize; x <= windowSize; x++) {
            auxColor = texture2D(u_texture_0, coords + vec2(float(x) * u_texel_width, float(y) * u_texel_height));
            color += auxColor.r * gaussFilter[offset];
            offset += 1;
        }
    } 

    return color;
}

void main() {    
    float mid = gaussBlur(v_texCoord) * u_gaussian_sigma;
    gl_FragColor = vec4(mid, mid, mid, 1.0);
}
`;

export const GPUImageSingleComponentGaussianBlurFilter = GL.createComponent(
    ({children, texelWidth, texelHeight, sigma})=>{
        return (
            <GPUImageFilter 
                frag={GPUImageSingleComponentGaussianBlurFragShaderString}
                uniforms={{
                    u_texel_width: texelWidth,
                    u_texel_height: texelHeight,
                    u_gaussian_sigma: sigma,
                }}>
                {children}
            </GPUImageFilter>
        );
    }
);