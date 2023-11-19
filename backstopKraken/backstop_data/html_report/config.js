report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\bitmaps_reference\\01487380516_ghost5_0_document_0_desktop.png",
        "test": "..\\bitmaps_test\\20231119-161823\\01487380516_ghost5_0_document_0_desktop.png",
        "selector": "document",
        "fileName": "01487380516_ghost5_0_document_0_desktop.png",
        "label": "ghost5",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "C://Users//ginav//uniandes//krakenNode16//backstopKraken//backstop_data//bitmaps_test//step1_screenshot.png",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -736,
            "height": -318
          },
          "rawMisMatchPercentage": 26.79272762345679,
          "misMatchPercentage": "26.79",
          "analysisTime": 46
        },
        "diffImage": "..\\bitmaps_test\\20231119-161823\\failed_diff_01487380516_ghost5_0_document_0_desktop.png"
      },
      "status": "fail"
    }
  ]
});