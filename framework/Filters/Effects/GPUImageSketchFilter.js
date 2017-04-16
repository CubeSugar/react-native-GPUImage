'use strict';

import GL from "gl-react";
import React, { Component }  from "react";

import {
    GPUImageColorInvertFilter
} from '../ColorProcessing/GPUImageColorInvertFilter';
import {
    GPUImageSobelEdgeDetectionFilter
} from '../ImageProcessing/GPUImageSobelEdgeDetectionFilter';

export const GPUImageSketchFilter = GL.createComponent(
    ({children, texelWidth, texelHeight, edgeStrength})=>{
        return(
            <GPUImageColorInvertFilter>
                <GPUImageSobelEdgeDetectionFilter texelWidth={texelWidth}
                                                 texelHeight={texelHeight}
                                                edgeStrength={edgeStrength}>
                    {children}
                </GPUImageSobelEdgeDetectionFilter>
            </GPUImageColorInvertFilter>
        );
    }
);