'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageFragShaderPredefineString, 
    GPUImageFilter
} from '../GPUImageFilter';
import {
    GPUImage3x3TextureSamplingFragShaderPredefine,
    GPUImage3x3TextureSamplingFilter
} from '../GPUImage3x3TextureSamplingFilter';

const GPUImageDirectionalSobelEdgeDetectionFragShaderString = GPUImageFragShaderPredefineString +
GPUImage3x3TextureSamplingFragShaderPredefine + `
void main() {
    float bottomLeftIntensity  = texture2D(u_texture_0, v_texCoord_lb).r;
    float topRightIntensity    = texture2D(u_texture_0, v_texCoord_rt).r;
    float topLeftIntensity     = texture2D(u_texture_0, v_texCoord_lt).r;
    float bottomRightIntensity = texture2D(u_texture_0, v_texCoord_rb).r;
    float leftIntensity        = texture2D(u_texture_0, v_texCoord_l).r;
    float rightIntensity       = texture2D(u_texture_0, v_texCoord_r).r;
    float bottomIntensity      = texture2D(u_texture_0, v_texCoord_b).r;
    float topIntensity         = texture2D(u_texture_0, v_texCoord_t).r;
    
    vec2 gradientDirection;
    gradientDirection.x = -bottomLeftIntensity - 2.0 * leftIntensity - topLeftIntensity + bottomRightIntensity + 2.0 * rightIntensity + topRightIntensity;
    gradientDirection.y = -topLeftIntensity - 2.0 * topIntensity - topRightIntensity + bottomLeftIntensity + 2.0 * bottomIntensity + bottomRightIntensity;
    
    float gradientMagnitude = length(gradientDirection);
    vec2 normalizedDirection = normalize(gradientDirection);
    normalizedDirection = sign(normalizedDirection) * floor(abs(normalizedDirection) + 0.617316); // Offset by 1-sin(pi/8) to set to 0 if near axis, 1 if away
    normalizedDirection = (normalizedDirection + 1.0) * 0.5; // Place -1.0 - 1.0 within 0 - 1.0
    
    gl_FragColor = vec4(gradientMagnitude, normalizedDirection.x, normalizedDirection.y, 1.0);
}
`;

export const GPUImageDirectionalSobelEdgeDetectionFilter = GL.createComponent(
    ({children, texelWidth, texelHeight})=>{
        return (
            <GPUImage3x3TextureSamplingFilter
                frag={GPUImageDirectionalSobelEdgeDetectionFragShaderString}
                texelWidth={texelWidth}
                texelHeight={texelHeight}>
                {children}
            </GPUImage3x3TextureSamplingFilter>
        );
    }
);