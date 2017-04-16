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

const GPUImage3x3ConvolutionFragShaderString = GPUImageFragShaderPredefineString +
GPUImage3x3TextureSamplingFragShaderPredefine + `
uniform mediump mat3 u_convolutionMatrix;
void main() {
    mediump vec3 bottomLeftColor  = texture2D(u_texture_0, v_texCoord_lb).rgb;
    mediump vec3 topRightColor    = texture2D(u_texture_0, v_texCoord_rt).rgb;
    mediump vec3 topLeftColor     = texture2D(u_texture_0, v_texCoord_lt).rgb;
    mediump vec3 bottomRightColor = texture2D(u_texture_0, v_texCoord_rb).rgb;
    mediump vec3 leftColor        = texture2D(u_texture_0, v_texCoord_l).rgb;
    mediump vec3 rightColor       = texture2D(u_texture_0, v_texCoord_r).rgb;
    mediump vec3 bottomColor      = texture2D(u_texture_0, v_texCoord_b).rgb;
    mediump vec3 topColor         = texture2D(u_texture_0, v_texCoord_t).rgb;
    mediump vec4 centerColor      = texture2D(u_texture_0, v_texCoord);

    mediump vec3 convolution = vec3(0.0);
    convolution += topLeftColor     * u_convolutionMatrix[0][0];
    convolution += topColor         * u_convolutionMatrix[0][1];
    convolution += topRightColor    * u_convolutionMatrix[0][2];
    convolution += leftColor        * u_convolutionMatrix[1][0];
    convolution += centerColor.rgb  * u_convolutionMatrix[1][1];
    convolution += rightColor       * u_convolutionMatrix[1][2];
    convolution += bottomLeftColor  * u_convolutionMatrix[2][0];
    convolution += bottomColor      * u_convolutionMatrix[2][1];
    convolution += bottomRightColor * u_convolutionMatrix[2][2];

    gl_FragColor = vec4(convolution, centerColor.a);
}
`;

export const GPUImage3x3ConvolutionFilter = GL.createComponent(
    ({children, texelWidth, texelHeight, convolutionMatrix})=>{
        return (
            <GPUImage3x3TextureSamplingFilter
                frag={GPUImage3x3ConvolutionFragShaderString}
                texelWidth={texelWidth}
                texelHeight={texelHeight}
                uniforms={{
                    u_convolutionMatrix: convolutionMatrix,
                }}>
                {children}
            </GPUImage3x3TextureSamplingFilter>
        );
    },
    {
        defaultProps: {
            convolutionMatrix: [0.0, 0.0, 0.0,
                                0.0, 1.0, 0.0,
                                0.0, 0.0, 0.0],
        }
    }
);