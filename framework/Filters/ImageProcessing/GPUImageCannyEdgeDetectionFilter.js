'use strict';

import GL from "gl-react";
import React, { Component }  from "react";
import {GPUImageGrayscaleFilter} from '../ColorProcessing/GPUImageGrayscaleFilter';
import {GPUImageDirectionalSobelEdgeDetectionFilter} from './GPUImageDirectionalSobelEdgeDetectionFilter';
import {GPUImageDirectionalNonMaximumSuppressionFilter} from './GPUImageDirectionalNonMaximumSuppressionFilter';
import {GPUImageWeakPixelInclusionFilter} from './GPUImageWeakPixelInclusionFilter';
import {GPUImageSingleComponentGaussianBlurFilter} from './GPUImageSingleComponentGaussianBlurFilter'

export const GPUImageCannyEdgeDetectionFilter = GL.createComponent(
    ({children, texelWidth, texelHeight, blurSigma, lowerThreshold, upperThreshold})=>{
        return (
            <GPUImageWeakPixelInclusionFilter texelWidth={texelWidth} texelHeight={texelHeight}>
                <GPUImageDirectionalNonMaximumSuppressionFilter texelWidth={texelWidth}
                                                               texelHeight={texelHeight}
                                                            lowerThreshold={lowerThreshold}
                                                            upperThreshold={upperThreshold}>
                    <GPUImageDirectionalSobelEdgeDetectionFilter texelWidth={texelWidth} texelHeight={texelHeight}>
                        <GPUImageSingleComponentGaussianBlurFilter texelWidth={texelWidth} texelHeight={texelHeight} sigma={blurSigma}>
                            <GPUImageGrayscaleFilter>
                                {children}
                            </GPUImageGrayscaleFilter>
                        </GPUImageSingleComponentGaussianBlurFilter>
                    </GPUImageDirectionalSobelEdgeDetectionFilter>
                </GPUImageDirectionalNonMaximumSuppressionFilter>
            </GPUImageWeakPixelInclusionFilter>
        );
    }
);