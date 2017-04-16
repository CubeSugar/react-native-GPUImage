# [WIP] react-native-GPUImage
GPUImage Component for React Native

inspired from [GPUImage](https://github.com/BradLarson/GPUImage) and [GPUImage for Android](https://github.com/CyberAgent/android-gpuimage)

## DEPENDENCIES

- React-Native > 0.42
- gl-react
- gl-react-native

## USAGE


## PROGRESS

#### Filters
- [x] GPUImageFilter
- [ ] GPUImageFilterGroup
- [ ] GPUImageTwoPassFilter
- [ ] GPUImageTwoPassTextureSamplingFilter
- [x] GPUImageTwoInputFilter
- [ ] GPUImageThreeInputFilter
- [ ] GPUImageFourInputFilter
- [ ] GPUImageTwoInputCrossTextureSamplingFilter
- [x] GPUImage3x3TextureSamplingFilter
- [ ] GPUImageBuffer

#### Color processing
- [x] GPUImageBrightnessFilter
- [ ] GPUImageLevelsFilter
- [ ] GPUImageExposureFilter
- [x] GPUImageContrastFilter
- [x] GPUImageSaturationFilter
- [x] GPUImageGammaFilter
- [x] GPUImageColorMatrixFilter
- [x] GPUImageRGBFilter
- [ ] GPUImageHSBFilter
- [ ] GPUImageHueFilter
- [x] GPUImageColorInvertFilter
- [x] GPUImageGrayscaleFilter
- [x] GPUImageLuminanceThresholdFilter

#### Image processing
- [x] GPUImage3x3ConvolutionFilter
- [x] GPUImageLocalBinaryPatternFilter
- [x] GPUImageColorLocalBinaryPatternFilter
- [x] GPUImageSobelEdgeDetectionFilter
- [x] GPUImageThresholdEdgeDetectionFilter
- [x] GPUImageDirectionalSobelEdgeDetectionFilter
- [x] GPUImageDirectionalNonMaximumSuppressionFilter
- [x] GPUImageWeakPixelInclusionFilter
- [x] GPUImageCannyEdgeDetectionFilter

#### Blends
- [x] GPUImageSourceOverBlendFilter
- [x] GPUImageColorBurnBlendFilter
- [x] GPUImageColorDodgeBlendFilter
- [x] GPUImageDarkenBlendFilter
- [x] GPUImageDifferenceBlendFilter
- [x] GPUImageDissolveBlendFilter
- [x] GPUImageExclusionBlendFilter
- [x] GPUImageHardLightBlendFilter
- [x] GPUImageSoftLightBlendFilter
- [x] GPUImageLightenBlendFilter
- [x] GPUImageAddBlendFilter
- [x] GPUImageSubstractBlendFilter
- [x] GPUImageDivideBlendFilter
- [x] GPUImageMultiplyBlendFilter
- [x] GPUImageOverlayBlendFilter
- [x] GPUImageScreenBlendFilter
- [x] GPUImageChromaKeyBlendFilter
- [x] GPUImageAlphaBlendFilter
- [x] GPUImageNormalBlendFilter
- [x] GPUImageColorBlendFilter
- [x] GPUImageHueBlendFilter
- [x] GPUImageSaturationBlendFilter
- [x] GPUImageLuminosityBlendFilter
- [x] GPUImageLinearBurnBlendFilter
- [x] GPUImageMaskFilter

#### Effects
- [x] GPUImagePixellateFilter
- [x] GPUImagePolarPixellateFilter
- [x] GPUImagePixellatePositionFilter
- [x] GPUImagePolkaDotFilter
- [x] GPUImageHalftoneFilter
- [x] GPUImageCrosshatchFilter
- [x] GPUImageSketchFilter
- [x] GPUImageThresholdSketchFilter
- [x] GPUImageEmbossFilter
- [x] GPUImageToonFilter
- [x] GPUImageVignetteFilter

#### GPUImage
- [ ] GLProgram.js
- [ ] GPUImage.js
- [ ] GPUImageFramebuffer
- [ ] GPUImageFramebufferCache

#### Sources
- [ ] GPUImageOutput
- [ ] GPUImageVideoCamera
- [ ] GPUImageStillCamera
- [ ] GPUImageMovie
- [ ] GPUImageMovieComposition
- [ ] GPUImageTextureInput
- [ ] GPUImageTexutreOutput
- [ ] GPUImageRawDataInput
- [ ] GPUImageRawDataOutput
- [ ] GPUImageUIElement
- [ ] GPUImageColorConversion

#### Pipeline
- [ ] GPUImageFilterPipeline

#### Others
- [ ] GPUImageAdaptiveThresholdFilter
- [ ] GPUImageAmatorkaFilter
- [ ] GPUImageAverageColor
- [ ] GPUImageAverageLuminanceThresholdFilter
- [ ] GPUImageBilateralFilter
- [ ] GPUImageBoxBlurFilter
- [ ] GPUImageBulgeDistortionFilter
- [ ] GPUImageCGAColorspaceFilter
- [ ] GPUImageChromaKeyFilter
- [ ] GPUImageClosingFilter
- [ ] GPUImageColorPackingFilter
- [ ] GPUImageColorFASTFeatureDetector
- [ ] GPUImageCropFilter
- [ ] GPUImageCrosshairGenerator
- [ ] GPUImageDilationFilter
- [ ] GPUImageErosionFilter
- [ ] GPUImageFASTCornerDectionFilter
- [ ] GPUImageFalseColorFilter
- [ ] GPUImageGaussianBlurFilter
- [ ] GPUImageGaussianBlurPositionFilter
- [ ] GPUImageGaussianSelectiveBlurFilter
- [ ] GPUImageGlassSphereFilter
- [ ] GPUImageHarrisCornerDetectionFilter
- [ ] GPUIMageHazeFilter
- [ ] GPUImageHighPassFilter
- [ ] GPUImageHighlightShadowFilter
- [ ] GPUImageHighlightShadowTintFilter
- [ ] GPUImageHistogramEqualizationFIlter
- [ ] GPUImageHistogramFilter
- [ ] GPUImageHistogramGenerator
- [ ] GPUImageHoughTransformLineDetector
- [ ] GPUImageJFAVoronoiFilter
- [ ] GPUImageKuwaharaFilter
- [ ] GPUImageKuwaharaRadius3Filter
- [ ] GPUImageLanczosResamplingFilter
- [ ] GPUImageLaplacianFilter
- [ ] GPUImageLineGenerator
- [ ] GPUImageLookupFilter
- [ ] GPUImageLowPassFilter
- [ ] GPUImageLuminanceRangeFilter
- [ ] GPUImageLuminosity
- [ ] GPUImageMedianFilter
- [ ] GPUImageMissEtikateFilter
- [ ] GPUImageMonochromeFilter
- [ ] GPUImageMosaicFilter
- [ ] GPUImageMotionBlurFilter
- [ ] GPUImageMotionDetector
- [ ] GPUImageNobleCornerDetectionFilter
- [ ] GPUImageNonMaximumSuppressionFilter
- [ ] GPUImageOpacityFilter
- [ ] GPUImageOpeningFilter
- [ ] GPUImageParallelCoordinateLineTransformFilter
- [ ] GPUImagePerlinNoiseFilter
- [ ] GPUImagePinchDistortionFilter
- [ ] GPUImagePoissonBlendFilter
- [ ] GPUImagePosterizeFilter
- [ ] GPUImagePrewittEdgeDetectionFilter
- [ ] GPUImageRGBClosingFilter
- [ ] GPUImageRGBDilationFilter
- [ ] GPUImageRGBErosionFilter
- [ ] GPUImageRGBOpeningFilter
- [ ] GPUImageSepiaFilter
- [ ] GPUImageSharpenFilter
- [ ] GPUImageShiTomasiFeatureDetectionFilter
- [ ] GPUImageSingleComponentGaussianBlurFilter
- [ ] GPUImageSkinToneFilter
- [ ] GPUImageSoftEleganceFilter
- [ ] GPUImageSolarizeFilter
- [ ] GPUImageSolidColorGenerator
- [ ] GPUImageSphereRefractionFilter
- [ ] GPUImageStretchDistortionFilter
- [ ] GPUImageSwirlFilter
- [ ] GPUImageThresholdNonMaximumSuppressionFilter
- [ ] GPUImageTiltShiftFilter
- [ ] GPUImageToneCurveFilter
- [ ] GPUImageTransformFilter
- [ ] GPUImageUnsharpMaskFilter
- [ ] GPUImageVibranceFilter
- [ ] GPUImageVoronoiConsumerFilter
- [ ] GPUImageWhiteBalanceFilter
- [ ] GPUImageXYDerivativeFilter
- [ ] GPUImageZoomBlurFilter
- [ ] GPUImageiOSBlurFilter


