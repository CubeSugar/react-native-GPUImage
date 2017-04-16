'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImage3x3ConvolutionFilter
} from '../ImageProcessing/GPUImage3x3ConvolutionFilter';

export const GPUImageEmbossFilter = GL.createComponent(
    ({children, texelWidth, texelHeight, intensity})=>{
        return(
            <GPUImage3x3ConvolutionFilter 
                texelWidth={texelWidth}
                texelHeight={texelHeight}
                convolutionMatrix={[-2.0 * intensity, -intensity, 0.0,
                                    -intensity, 1.0, intensity,
                                    0.0, intensity, 2.0 * intensity]}
                >
                {children}
            </GPUImage3x3ConvolutionFilter>
        );
    },
    {
        defaultProps: {
            intensity: 1.0,
        }
    }
);