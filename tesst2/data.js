var APP_DATA = {
  "scenes": [
    {
      "id": "0-street-view-363",
      "name": "Street View 363",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.17745728411991024,
          "pitch": 0.2702456420486268,
          "rotation": 0,
          "target": "1-street-view-364"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.999780243678213,
          "pitch": -0.18446253137884483,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-street-view-364",
      "name": "Street View 364",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4832901810375088,
          "pitch": 0.24707236636914764,
          "rotation": 6.283185307179586,
          "target": "0-street-view-363"
        },
        {
          "yaw": -0.286443234613575,
          "pitch": -0.004416096683563353,
          "rotation": 0,
          "target": "2-street-view-365"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-street-view-365",
      "name": "Street View 365",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.80929672973393,
          "pitch": 0.22573883134658956,
          "rotation": 6.283185307179586,
          "target": "1-street-view-364"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
