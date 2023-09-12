# Getting started with Geospatial data analisys 

## About the repository

This repository contains some informations about geospatial data and some example notebooks.

## Introduction

**Geospatial data** is information that describes objects, events or other features with a location on the surface of the earth. Geospatial data typically combines location information and attribute information with temporal information (the time or life span at which the location and attributes exist). 

The two primary types of spatial data are **vector** and **raster** data. 

- **Vector data** are comprised of vertices and paths. The three basic symbol types for vector data are:  

    - **Points** are simply XY coordinates. Generally, they are latitude and longitude with a spatial reference frame (local or global). 

    - **Lines** connect points. Basically, they’re connecting the dots in a set order and it becomes a vector line with each dot representing a vertex. 

    - **Polygons** connect vertices and close the path. When lines join a set of vertices in a particular order and close it, this is now a vector polygon feature, where the first and last coordinate pairs are the same. 

    Here there are some vector data formats: 

    - [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON)
    - [Shapefile](https://en.wikipedia.org/wiki/Shapefile) 

    Here there are some libraries that handles vector data: 

    - [GeoPandas](https://geopandas.org/en/stable/index.html) - GeoPandas is an open source project to make working with geospatial data in python easier. GeoPandas extends the datatypes used by pandas to allow spatial operations on geometric types. 

    - [GDAL](https://gdal.org/index.html) - ... 

- **Raster data** is made up of pixels (also referred to as grid cells). They are usually regularly spaced and square but they don’t have to be. Rasters often look pixelated because each pixel has its own value or class. 

    Here there are some raster data format: 

    - [GeoTIFF](https://en.wikipedia.org/wiki/GeoTIFF) 

    Here there are some libraries that handles raster data: 

    - [Rasterio](https://rasterio.readthedocs.io/en/latest/index.html) - It’s a Python API based on Numpy and GeoJSON that handles gridded raster datasets such as satellite imagies. 

## Data sources 

- [Sentinel 2](https://sentinel.esa.int/web/sentinel/missions/sentinel-2) - The Copernicus SENTINEL-2 mission comprises a constellation of two polar-orbiting satellites placed in the same sun-synchronous orbit, phased at 180° to each other.
It aims at monitoring variability in land surface conditions, and its wide swath width (290 km) and high revisit time (10 days at the equator with one satellite, and 5 days with 2 satellites under cloud-free conditions which results in 2-3 days at mid-latitudes) will support monitoring of Earth's surface changes.
Users can use APIs to retrieve satellite data through [Sentinel Hub](https://docs.sentinel-hub.com/api/latest/), that offers a [Python package](https://sentinelhub-py.readthedocs.io/en/latest/index.html) to interact with. 

## Models

- [UNet](https://towardsdatascience.com/unet-line-by-line-explanation-9b191c76baf5) - Unet is a fully convolutional neural network (FCN) architecture built for image segmentation applications. UNet is able to do image localisation by predicting the image pixel by pixel

- [timm](https://huggingface.co/docs/timm/index) - timm is a library containing SOTA computer vision models, layers, utilities, optimizers, schedulers, data-loaders, augmentations, and training/evaluation scripts. It comes packaged with >700 pretrained models, and is designed to be flexible and easy to use.

## Tools 

- [QGIS](https://www.qgis.org/it/site/index.html)
- [Google Earth Engine](https://earthengine.google.com/) 

## Processing 

- [Spectral Indices with multispectral satellite data](https://www.geo.university/pages/blog?p=spectral-indices-with-multispectral-satellite-data) 

 

 