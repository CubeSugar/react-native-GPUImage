# [WIP] react-native-GPUImage
GPUImage Component in React Native

## DEPENDENCIES

- React-Native > 0.42
- gl-react
- gl-react-native

## PROGRESS

### GPUImage
[x] GLProgram.js
[x] GPUImage.js
[x] GPUImageFramebuffer
[x] GPUImageFramebufferCache

#### Sources
[x] GPUImageOutput
[x] GPUImageVideoCamera
[x] GPUImageStillCamera
[x] GPUImageMovie
[x] GPUImageMovieComposition
[x] GPUImageTextureInput
[x] GPUImageTexutreOutput
[x] GPUImageRawDataInput
[x] GPUImageRawDataOutput
[x] GPUImageUIElement
[x] GPUImageColorConversion

#### Pipeline
[x] GPUImageFilterPipeline

#### Filters
[Y] GPUImageFilter
[x] GPUImageFilterGroup
[ ] GPUImageTwoPassFilter
[ ] GPUImageTwoPassTextureSamplingFilter
[Y] GPUImageTwoInputFilter
[ ] GPUImageThreeInputFilter
[ ] GPUImageFourInputFilter
[ ] GPUImageTwoInputCrossTextureSamplingFilter
[Y] GPUImage3x3TextureSamplingFilter
[x] GPUImageBuffer

##### Color processing
[Y] GPUImageBrightnessFilter
[ ] GPUImageLevelsFilter
[ ] GPUImageExposureFilter
[Y] GPUImageContrastFilter
[Y] GPUImageSaturationFilter
[Y] GPUImageGammaFilter
[Y] GPUImageColorMatrixFilter
[Y] GPUImageRGBFilter
[ ] GPUImageHSBFilter
[ ] GPUImageHueFilter
[Y] GPUImageColorInvertFilter
[Y] GPUImageGrayscaleFilter
[Y] GPUImageLuminanceThresholdFilter

##### Image processing
[Y] GPUImage3x3ConvolutionFilter
[Y] GPUImageLocalBinaryPatternFilter
[Y] GPUImageColorLocalBinaryPatternFilter
[Y] GPUImageSobelEdgeDetectionFilter
[Y] GPUImageThresholdEdgeDetectionFilter
[Y] GPUImageDirectionalSobelEdgeDetectionFilter
[Y] GPUImageDirectionalNonMaximumSuppressionFilter
[Y] GPUImageWeakPixelInclusionFilter
[Y] GPUImageCannyEdgeDetectionFilter

##### Blends
[Y] GPUImageSourceOverBlendFilter
[Y] GPUImageColorBurnBlendFilter
[Y] GPUImageColorDodgeBlendFilter
[Y] GPUImageDarkenBlendFilter
[Y] GPUImageDifferenceBlendFilter
[Y] GPUImageDissolveBlendFilter
[Y] GPUImageExclusionBlendFilter
[Y] GPUImageHardLightBlendFilter
[Y] GPUImageSoftLightBlendFilter
[Y] GPUImageLightenBlendFilter
[Y] GPUImageAddBlendFilter
[Y] GPUImageSubstractBlendFilter
[Y] GPUImageDivideBlendFilter
[Y] GPUImageMultiplyBlendFilter
[Y] GPUImageOverlayBlendFilter
[Y] GPUImageScreenBlendFilter
[Y] GPUImageChromaKeyBlendFilter
[Y] GPUImageAlphaBlendFilter
[Y] GPUImageNormalBlendFilter
[Y] GPUImageColorBlendFilter
[Y] GPUImageHueBlendFilter
[Y] GPUImageSaturationBlendFilter
[Y] GPUImageLuminosityBlendFilter
[Y] GPUImageLinearBurnBlendFilter
[Y] GPUImageMaskFilter

##### Effects
[Y] GPUImagePixellateFilter
[Y] GPUImagePolarPixellateFilter
[Y] GPUImagePixellatePositionFilter
[Y] GPUImagePolkaDotFilter
[Y] GPUImageHalftoneFilter
[Y] GPUImageCrosshatchFilter
[Y] GPUImageSketchFilter
[Y] GPUImageThresholdSketchFilter
[Y] GPUImageEmbossFilter
[Y] GPUImageToonFilter
[Y] GPUImageVignetteFilter

##### Other
[ ] GPUImageAdaptiveThresholdFilter
[ ] GPUImageAmatorkaFilter
[ ] GPUImageAverageColor
[ ] GPUImageAverageLuminanceThresholdFilter
[ ] GPUImageBilateralFilter
[ ] GPUImageBoxBlurFilter
[ ] GPUImageBulgeDistortionFilter
[ ] GPUImageCGAColorspaceFilter
[ ] GPUImageChromaKeyFilter
[ ] GPUImageClosingFilter
[ ] GPUImageColorPackingFilter
[ ] GPUImageColorFASTFeatureDetector
[ ] GPUImageCropFilter
[ ] GPUImageCrosshairGenerator
[ ] GPUImageDilationFilter
[ ] GPUImageErosionFilter
[ ] GPUImageFASTCornerDectionFilter
[ ] GPUImageFalseColorFilter
[ ] GPUImageGaussianBlurFilter
[ ] GPUImageGaussianBlurPositionFilter
[ ] GPUImageGaussianSelectiveBlurFilter
[ ] GPUImageGlassSphereFilter
[ ] GPUImageHarrisCornerDetectionFilter
[ ] GPUIMageHazeFilter
[ ] GPUImageHighPassFilter
[ ] GPUImageHighlightShadowFilter
[ ] GPUImageHighlightShadowTintFilter
[ ] GPUImageHistogramEqualizationFIlter
[ ] GPUImageHistogramFilter
[ ] GPUImageHistogramGenerator
[ ] GPUImageHoughTransformLineDetector
[ ] GPUImageJFAVoronoiFilter
[ ] GPUImageKuwaharaFilter
[ ] GPUImageKuwaharaRadius3Filter
[ ] GPUImageLanczosResamplingFilter
[ ] GPUImageLaplacianFilter
[ ] GPUImageLineGenerator
[ ] GPUImageLookupFilter
[ ] GPUImageLowPassFilter
[ ] GPUImageLuminanceRangeFilter
[ ] GPUImageLuminosity
[ ] GPUImageMedianFilter
[ ] GPUImageMissEtikateFilter
[ ] GPUImageMonochromeFilter
[ ] GPUImageMosaicFilter
[ ] GPUImageMotionBlurFilter
[ ] GPUImageMotionDetector
[ ] GPUImageNobleCornerDetectionFilter
[ ] GPUImageNonMaximumSuppressionFilter
[ ] GPUImageOpacityFilter
[ ] GPUImageOpeningFilter
[ ] GPUImageParallelCoordinateLineTransformFilter
[ ] GPUImagePerlinNoiseFilter
[ ] GPUImagePinchDistortionFilter
[ ] GPUImagePoissonBlendFilter
[ ] GPUImagePosterizeFilter
[ ] GPUImagePrewittEdgeDetectionFilter
[ ] GPUImageRGBClosingFilter
[ ] GPUImageRGBDilationFilter
[ ] GPUImageRGBErosionFilter
[ ] GPUImageRGBOpeningFilter
[ ] GPUImageSepiaFilter
[ ] GPUImageSharpenFilter
[ ] GPUImageShiTomasiFeatureDetectionFilter
[-] GPUImageSingleComponentGaussianBlurFilter
[ ] GPUImageSkinToneFilter
[ ] GPUImageSoftEleganceFilter
[ ] GPUImageSolarizeFilter
[ ] GPUImageSolidColorGenerator
[ ] GPUImageSphereRefractionFilter
[ ] GPUImageStretchDistortionFilter
[ ] GPUImageSwirlFilter
[ ] GPUImageThresholdNonMaximumSuppressionFilter
[ ] GPUImageTiltShiftFilter
[ ] GPUImageToneCurveFilter
[ ] GPUImageTransformFilter
[ ] GPUImageUnsharpMaskFilter
[ ] GPUImageVibranceFilter
[ ] GPUImageVoronoiConsumerFilter
[ ] GPUImageWhiteBalanceFilter
[ ] GPUImageXYDerivativeFilter
[ ] GPUImageZoomBlurFilter
[ ] GPUImageiOSBlurFilter


