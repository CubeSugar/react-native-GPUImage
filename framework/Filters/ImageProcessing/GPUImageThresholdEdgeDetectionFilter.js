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

const GPUImageThresholdEdgeDetectionFragShaderString = GPUImageFragShaderPredefineString +
GPUImage3x3TextureSamplingFragShaderPredefine + `
uniform float u_edgeStrength;
uniform float u_threshold;
void main() {
    float bottomLeftIntensity  = texture2D(u_texture_0, v_texCoord_lb).r;
    float topRightIntensity    = texture2D(u_texture_0, v_texCoord_rt).r;
    float topLeftIntensity     = texture2D(u_texture_0, v_texCoord_lt).r;
    float bottomRightIntensity = texture2D(u_texture_0, v_texCoord_rb).r;
    float leftIntensity        = texture2D(u_texture_0, v_texCoord_l).r;
    float rightIntensity       = texture2D(u_texture_0, v_texCoord_r).r;
    float bottomIntensity      = texture2D(u_texture_0, v_texCoord_b).r;
    float topIntensity         = texture2D(u_texture_0, v_texCoord_t).r;
    float centerIntensity      = texture2D(u_texture_0, v_texCoord).r;
    
    //float x = -bottomLeftIntensity - 2.0 * leftIntensity - topLeftIntensity + bottomRightIntensity + 2.0 * rightIntensity + topRightIntensity;
    //float y = -topLeftIntensity - 2.0 * topIntensity - topRightIntensity + bottomLeftIntensity + 2.0 * bottomIntensity + bottomRightIntensity;
    float x = centerIntensity - topIntensity + bottomIntensity - centerIntensity;
    float y = centerIntensity - leftIntensity + rightIntensity - centerIntensity;

    float magnitude = step(u_threshold, length(vec2(x, y)) * u_edgeStrength);

    gl_FragColor = vec4(vec3(magnitude), 1.0);
}
`;

export const GPUImageThresholdEdgeDetectionFilter = GL.createComponent(
    ({children, texelWidth, texelHeight, edgeStrength, threshold})=>{
        return (
            <GPUImage3x3TextureSamplingFilter
                frag={GPUImageThresholdEdgeDetectionFragShaderString}
                texelWidth={texelWidth}
                texelHeight={texelHeight}
                uniforms={{
                    u_edgeStrength: edgeStrength,
                    u_threshold: threshold,
                }}>
                {children}
            </GPUImage3x3TextureSamplingFilter>
        );
    },
    {
        defaultProps: {
            edgeStrength: 1.0,
            threshold: 0.25,
        }
    }
);