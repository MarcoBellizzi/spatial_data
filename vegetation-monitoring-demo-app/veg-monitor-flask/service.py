from rasterio.warp import transform_bounds
import geopandas

data_path = '../veg-monitor/datasets_analysis/data/'

def get_points():
    gdf = geopandas.read_file(data_path + 'towers/towers.shp')
    points = []
    for punto in gdf.iterrows():
        x = punto[1]['geometry'].x
        y = punto[1]['geometry'].y
        id = punto[1]['id']
        x, y, _, _ = transform_bounds(gdf.crs, 4326, x, y, x, y)
        points.append((y, x, id))
    return points