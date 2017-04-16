'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageTwoInputFragShaderPredefineString, 
    GPUImageTwoInputFilter,
} from '../GPUImageTwoInputFilter';

const GPUImageChromaKeyBlendFragShaderString = GPUImageTwoInputFragShaderPredefineString + `
uniform float u_thresholdSensitivity;
uniform float u_smoothing;
uniform vec3  u_colorToReplace;
void main() {
    vec4 texColor0 = texture2D(u_texture_0, v_texCoord);
    vec4 texColor1;
    if (u_texture_1_samplingScale > 1.0) {
        texColor1 = texture2D(u_texture_1, fract(v_texCoord * u_texture_1_samplingScale));
    } else {
        texColor1 = texture2D(u_texture_1, v_texCoord);
    }

     float maskY = 0.2989 * u_colorToReplace.r + 0.5866 * u_colorToReplace.g + 0.1145 * u_colorToReplace.b;
     float maskCr = 0.7132 * (u_colorToReplace.r - maskY);
     float maskCb = 0.5647 * (u_colorToReplace.b - maskY);
     
     float Y = 0.2989 * texColor0.r + 0.5866 * texColor0.g + 0.1145 * texColor0.b;
     float Cr = 0.7132 * (texColor0.r - Y);
     float Cb = 0.5647 * (texColor0.b - Y);
     
     float blendValue = 1.0 - smoothstep(u_thresholdSensitivity, u_thresholdSensitivity + u_smoothing, distance(vec2(Cr, Cb), vec2(maskCr, maskCb)));
     gl_FragColor = mix(texColor0, texColor1, blendValue);
}
`;

export const GPUImageChromaKeyBlendFilter = GL.createComponent(
    ({ children, input2nd, threshold, smoothing, colorToReplace, input2ndScale}) => {
        return (
            <GPUImageTwoInputFilter
                frag={GPUImageChromaKeyBlendFragShaderString}
                input2nd={input2nd}
                input2ndScale={input2ndScale}
                uniforms={{
                    u_thresholdSensitivity: threshold,
                    u_smoothing: smoothing,
                    u_colorToReplace: colorToReplace,
                }}>
                {children}
            </GPUImageTwoInputFilter>
        );
    }, {
        defaultProps: {
            input2ndScale: 1.0,
            threshold: 0.4,
            smoothing: 0.1,
            colorToReplace: [0.0, 1.0, 0.0],
        }
    }
);