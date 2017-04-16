'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageTwoInputFragShaderPredefineString, 
    GPUImageTwoInputFilter,
} from '../GPUImageTwoInputFilter';

const GPUImageHueBlendFragShaderString = GPUImageTwoInputFragShaderPredefineString + `
const vec3 W = vec3(0.3, 0.59, 0.11);
mediump vec3 clipColor(mediump vec3 c) {
    float l = dot(c, W);
    float n = min(min(c.r, c.g), c.b);
    float x = max(max(c.r, c.g), c.b);
    if (n < 0.0) {
        c.rgb = l + ((c.rgb - l) * l) / (l - n);
    }
    //vec3 if_n_lowthen_0 = l + ((c.rgb - l) * l) / (l - n);
    //c.rgb = mix(if_n_lowthen_0, c.rgb, step(0.0, n)); 

    if (x > 1.0) {
        c.rgb = l + ((c.rgb - l) * (1.0 - l)) / (x - l);
    }
    //vec3 if_x_bigthen_1 = l + ((c.rgb - l) * (1.0 - l)) / (x - l);
    //c.rgb = mix(if_x_bigthen_1, c.rgb, step(x, 1.0));
    return c;
}
mediump vec3 setLum(mediump vec3 c, float l) {
    float d = l - dot(c, W);
    c += vec3(d);
    return clipColor(c);
}
float sat(mediump vec3 c) {
    float n = min(min(c.r, c.g), c.b);
    float x = max(max(c.r, c.g), c.b);
    return x - n;
}
float mid(mediump float cmin, mediump float cmid, mediump float cmax, float s) {
    return ((cmid - cmin) * s) / (cmax - cmin);
}
mediump vec3 setSat(mediump vec3 c, float s) {
     if (c.r > c.g) {
         if (c.r > c.b) {
             if (c.g > c.b) {
                 /* g is mid, b is min */
                 c.g = mid(c.b, c.g, c.r, s);
                 c.b = 0.0;
             } else {
                 /* b is mid, g is min */
                 c.b = mid(c.g, c.b, c.r, s);
                 c.g = 0.0;
             }
             c.r = s;
         } else {
             /* b is max, r is mid, g is min */
             c.r = mid(c.g, c.r, c.b, s);
             c.b = s;
             c.r = 0.0;
         }
     } else if (c.r > c.b) {
         /* g is max, r is mid, b is min */
         c.r = mid(c.b, c.r, c.g, s);
         c.g = s;
         c.b = 0.0;
     } else if (c.g > c.b) {
         /* g is max, b is mid, r is min */
         c.b = mid(c.r, c.b, c.g, s);
         c.g = s;
         c.r = 0.0;
     } else if (c.b > c.g) {
         /* b is max, g is mid, r is min */
         c.g = mid(c.r, c.g, c.b, s);
         c.b = s;
         c.r = 0.0;
     } else {
         c = vec3(0.0);
     }
     return c;
}
void main() {
    vec4 base = texture2D(u_texture_0, v_texCoord);
    vec4 overlay;
    if (u_texture_1_samplingScale > 1.0) {
        overlay = texture2D(u_texture_1, fract(v_texCoord * u_texture_1_samplingScale));
    } else {
        overlay = texture2D(u_texture_1, v_texCoord);
    }
    gl_FragColor = vec4(base.rgb * (1.0 - overlay.a) + setLum(setSat(overlay.rgb, sat(base.rgb)), dot(base.rgb, W)) * overlay.a, base.a);
}
`;

export const GPUImageHueBlendFilter = GL.createComponent(
    ({ children, input2nd, input2ndScale}) => {
        return (
            <GPUImageTwoInputFilter
                frag={GPUImageHueBlendFragShaderString}
                input2nd={input2nd}
                input2ndScale={input2ndScale}>
                {children}
            </GPUImageTwoInputFilter>
        );
    }, {
        defaultProps: {
            input2ndScale: 1.0,
        }
    }
);