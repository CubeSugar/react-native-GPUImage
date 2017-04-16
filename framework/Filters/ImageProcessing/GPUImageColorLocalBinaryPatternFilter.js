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

const GPUImageColorLocalBinaryPatternFragShaderString = GPUImageFragShaderPredefineString +
GPUImage3x3TextureSamplingFragShaderPredefine + `
void main() {
    lowp vec3 bottomLeftIntensity  = texture2D(u_texture_0, v_texCoord_lb).rgb;
    lowp vec3 topRightIntensity    = texture2D(u_texture_0, v_texCoord_rt).rgb;
    lowp vec3 topLeftIntensity     = texture2D(u_texture_0, v_texCoord_lt).rgb;
    lowp vec3 bottomRightIntensity = texture2D(u_texture_0, v_texCoord_rb).rgb;
    lowp vec3 leftIntensity        = texture2D(u_texture_0, v_texCoord_l).rgb;
    lowp vec3 rightIntensity       = texture2D(u_texture_0, v_texCoord_r).rgb;
    lowp vec3 bottomIntensity      = texture2D(u_texture_0, v_texCoord_b).rgb;
    lowp vec3 topIntensity         = texture2D(u_texture_0, v_texCoord_t).rgb;
    lowp vec3 centerIntensity      = texture2D(u_texture_0, v_texCoord).rgb;

    lowp float rByteTally = 1.0 / 255.0 * step(centerIntensity.r, topRightIntensity.r);
    rByteTally +=   2.0 / 255.0 * step(centerIntensity.r, topIntensity.r);
    rByteTally +=   4.0 / 255.0 * step(centerIntensity.r, topLeftIntensity.r);
    rByteTally +=   8.0 / 255.0 * step(centerIntensity.r, leftIntensity.r);
    rByteTally +=  16.0 / 255.0 * step(centerIntensity.r, bottomLeftIntensity.r);
    rByteTally +=  32.0 / 255.0 * step(centerIntensity.r, bottomIntensity.r);
    rByteTally +=  64.0 / 255.0 * step(centerIntensity.r, bottomRightIntensity.r);
    rByteTally += 128.0 / 255.0 * step(centerIntensity.r, rightIntensity.r);

    lowp float gByteTally = 1.0 / 255.0 * step(centerIntensity.g, topRightIntensity.g);
    gByteTally +=   2.0 / 255.0 * step(centerIntensity.g, topIntensity.g);
    gByteTally +=   4.0 / 255.0 * step(centerIntensity.g, topLeftIntensity.g);
    gByteTally +=   8.0 / 255.0 * step(centerIntensity.g, leftIntensity.g);
    gByteTally +=  16.0 / 255.0 * step(centerIntensity.g, bottomLeftIntensity.g);
    gByteTally +=  32.0 / 255.0 * step(centerIntensity.g, bottomIntensity.g);
    gByteTally +=  64.0 / 255.0 * step(centerIntensity.g, bottomRightIntensity.g);
    gByteTally += 128.0 / 255.0 * step(centerIntensity.g, rightIntensity.g);

    lowp float bByteTally = 1.0 / 255.0 * step(centerIntensity.b, topRightIntensity.b);
    bByteTally +=   2.0 / 255.0 * step(centerIntensity.b, topIntensity.b);
    bByteTally +=   4.0 / 255.0 * step(centerIntensity.b, topLeftIntensity.b);
    bByteTally +=   8.0 / 255.0 * step(centerIntensity.b, leftIntensity.b);
    bByteTally +=  16.0 / 255.0 * step(centerIntensity.b, bottomLeftIntensity.b);
    bByteTally +=  32.0 / 255.0 * step(centerIntensity.b, bottomIntensity.b);
    bByteTally +=  64.0 / 255.0 * step(centerIntensity.b, bottomRightIntensity.b);
    bByteTally += 128.0 / 255.0 * step(centerIntensity.b, rightIntensity.b);
         
    // TODO: Replace the above with a dot product and two vec4s
    // TODO: Apply step to a matrix, rather than individually
    
    gl_FragColor = vec4(rByteTally, gByteTally, bByteTally, 1.0);
}
`;

export const GPUImageColorLocalBinaryPatternFilter = GL.createComponent(
    ({children, texelWidth, texelHeight})=>{
        return (
            <GPUImage3x3TextureSamplingFilter
                frag={GPUImageColorLocalBinaryPatternFragShaderString}
                texelWidth={texelWidth}
                texelHeight={texelHeight}>
                {children}
            </GPUImage3x3TextureSamplingFilter>
        );
    }
);